import API from "./databaseInteractions.js";

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
      if (newsTitle === "" || synopsis === "" || url === ""){
        alert("Must fill in forms")
        return
      }
      API.postArticles({
        userId: "",
        url: url,
        title: newsTitle,
        synopsis: synopsis,
        date: dateSubmitted
      })
    }) 
  },
  presentNewsDashboard () {
    API.fetchArticles()
      .then(articles => {
        const sortArticles = articles.sort((a, b) => {
          return new Date(a.date) - new Date(b.date)
        })
        // display to dashboard in order
        newsContainer.innerHTML = 
      })
  }
}

export default newsListener;