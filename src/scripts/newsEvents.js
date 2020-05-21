import API from "./databaseInteractions.js";
import DOM from "./domInteractions.js";

const newsListener = {
  renderNewsFormButton() {
    document.getElementById("articleFormButton").innerHTML = `<button id="createNewsForm">Create News Article</button>`
    document.getElementById("createNewsForm").addEventListener("click", event => {
      DOM.createNewsForm(event)
      this.createNewsObject()
    })
  },
  createNewsObject() {
    document.getElementById("saveArticle").addEventListener("click", event => {
      const hiddenArticleId = document.getElementById("articleId")
      if (hiddenArticleId.innerHTML != "") {
        this.editArticle(hiddenArticleId.innerHTML)
      } else {
        let newsTitle = document.getElementById("newsTitle").value
        let synopsis = document.getElementById("synopsis").value
        let url = document.getElementById("url").value
        let dateSubmitted = new Date()
        let userId = sessionStorage.getItem("userId")
        document.getElementById("newsTitle").value = ""
        document.getElementById("synopsis").value = ""
        document.getElementById("url").value = ""
        if (newsTitle === "" || synopsis === "" || url === "") {
          alert("Must fill in forms")
          return
        }
        API.postArticle({
          userId: userId,
          url: url,
          title: newsTitle,
          synopsis: synopsis,
          date: dateSubmitted
        })
        .then(this.presentNewsDashboard)
      }
    })
  },
  presentNewsDashboard() {
    API.fetchArticles()
      .then(articles => {
        const sortedArticles = articles.sort((a, b) => {
          return new Date(a.date) - new Date(b.date)
        })
        DOM.renderArticles(sortedArticles)
      })
  },
  updateArticle(artId) {
    API.fetchArticleById(artId)
    .then(article => {
      document.getElementById("newsTitle").value = article.title
      document.getElementById("articleId").innerHTML = article.id
      document.getElementById(`synopsis`).value = article.synopsis
      document.getElementById(`url`).value = article.url
    })
  },
  editArticle(articleId) {
    const articleObj = {
      title: document.getElementById("newsTitle").value,
      synopsis: document.getElementById("synopsis").value,
      url: document.getElementById("url").value,
      userId: sessionStorage.getItem("userId"),
      date: new Date()
    }
    API.putArticle(articleObj, articleId)
    .then((event) => {
      document.getElementById("articleId").innerHTML = ""
      document.getElementById("newsTitle").value = ""
      document.getElementById("synopsis").value = ""
      document.getElementById("url").value = ""
    })
    .then(this.presentNewsDashboard)
  },
  editOrDeleteArticle() {
    this.presentNewsDashboard()
    document.getElementById("articleOutput").addEventListener("click", event => {
      if (event.target.id.includes("delete--")) {
        const artId = event.target.id.split("delete--")[1]
        API.deleteArticle(artId)
          .then(newsListener.presentNewsDashboard)
      }
      if (event.target.id.includes("edit--")) {
        const artId = event.target.id.split("edit--")[1]
        DOM.createNewsForm()
        this.createNewsObject()
        newsListener.updateArticle(artId)
      }
    })
  }
}

export default newsListener;