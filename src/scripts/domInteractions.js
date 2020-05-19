import API from "./databaseInteractions.js"

let DOM = {
  buildMessage(messageObject) {
    let userId = document.getElementById("userId").innerHTML
    document.getElementById("messageOutput").innerHTML += `<div>${messageObject.user.username}</div><p>${messageObject.message}<p>`
    if (messageObject.userId === userId) {
      document.getElementById("messageOutput").innerHTML += `<button id="edit--${messageObject.id}">Edit</button><button id="delete--${messageObject.id}">Delete</button>`
    }
  },
  buildMessages() {
    document.getElementById("messageOutput").innerHTML = ""
    API.fetchMessages()
    .then(messages => {
      messages.forEach(message => {
      DOM.buildMessage(message)
    })})
  },
  renderArticles(articles) {
    document.getElementById("articleOutput").innerHTML = ""
    articles.forEach(article => {
      document.getElementById("articleOutput").innerHTML += `
        <div id="article-div">
          <h2 id="article-title-${article.id}">${article.title}</h2>
          <p id="article-synopsis-${article.id}>${article.synopsis}</p>
          <p id="article-url-${article.id}">${article.url}<p>
          <button id="delete--${article.id}">Delete Article</button>
          <button id="edit--${article.id}">Edit Article</button>
        </div>
      `
    });
  },
  createNewsForm () {
    let newsContainer = document.getElementById("articleForm")
    return newsContainer.innerHTML = `
      <div class="hidden" id="articleId"></div>
      <div class="hidden" id="articleUserId"></div>
      <label>News Title</label> 
      <input id="newsTitle" type="text" placeholder="News Title">
      <label>Synopsis</label>
      <input id="synopsis" type="text" placeholder="Synopsis">
      <label>URL</label>
      <input id="url" type="text" placeholder="URL">
      <button id="saveArticle">Save Article</button>
    `
  }
}


export default DOM
