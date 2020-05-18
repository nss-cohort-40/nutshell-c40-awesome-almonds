import API from "./databaseInteractions.js";
import DOM from "./domInteractions.js";

let newsContainer = document.getElementById("newsContainer")
const newsListener = {
  renderNewsFormButton () {
    newsContainer.innerHTML = `<button id="createNewsForm">Create News Article</button>`
    document.getElementById("createNewsForm").addEventListener("click", event => {
      this.createNewsForm(event)
      this.createNewsObject()
    })
  },
  createNewsForm () {
    return newsContainer.innerHTML = `
      <label>News Title</label>
      <input id="newsTitle" type="text" placeholder="News Title">
      <label>Synopsis</label>
      <input id="synopsis" type="text" placeholder="Synopsis">
      <label>URL</label>
      <input id="url" type="text" placeholder="URL">
      <button id="saveArticle">Save Article</button>
    `
  },
  createNewsObject () {
    document.getElementById("saveArticle").addEventListener("click", event => {
      let newsTitle = document.getElementById("newsTitle").value
      let synopsis = document.getElementById("synopsis").value
      let url = document.getElementById("url").value
      let dateSubmitted = new Date()
      let userId = document.getElementById("userId").innerHTML
      if (newsTitle === "" || synopsis === "" || url === ""){
        alert("Must fill in forms")
        return
      }
      API.postArticles({
        userId: userId,
        url: url,
        title: newsTitle,
        synopsis: synopsis,
        date: dateSubmitted
      })
      .then(this.presentNewsDashboard)
      
    }) 
  },
  presentNewsDashboard () {
    API.fetchArticles()
      .then(articles => {
        const sortedArticles = articles.sort((a, b) => {
          return new Date(a.date) - new Date(b.date)
        })
        // display to dashboard in order
        DOM.renderArticles(sortedArticles)
      })
      .then(this.deleteNewsArticle)
  },
  deleteNewsArticle () {
      newsContainer.addEventListener("click", event => {
      console.log(event.target.value)
      if(event.target.startsWith("delete--")){
        const artId = event.target.id.split("delete--")[1]
        API.deleteArticle(artId)
        .then(this.presentNewsDashboard)
      }
    })
  }
}

export default newsListener;