import API from "./databaseInteractions.js"

let DOM = {
  buildMessage(messageObject) {
    let userId = sessionStorage.getItem("userId")
    document.getElementById("messageOutput").innerHTML += `<div class="messageDiv"><div>${messageObject.user.username}: ${messageObject.message}</div></div>`
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
        <div class="article-div">
          <h2 id="article-title-${article.id}">${article.title}</h2>
          <p id="article-synopsis-${article.id}">${article.synopsis}</p>
          <a href="${article.url}" target="_blank" id="article-url-${article.id}">Article Link</a>
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
      <label>News Title</label> 
      <input id="newsTitle" type="text" placeholder="News Title">
      <label>Synopsis</label>
      <input id="synopsis" type="text" placeholder="Synopsis">
      <label>URL</label>
      <input id="url" type="text" placeholder="URL">
      <button id="saveArticle">Save Article</button>
    `
  },
  buildEventsForm () {
    let eventsContainer = document.getElementById("eventsContainer")
    return eventsContainer.innerHTML = `
    <div class="event">
    <div class="eventsForm"></div>
    <label>Event Title</label>
    <input id="eventTitle" type=text placeholder="Event Name">
    <label>Event Date</label>
    <input id="eventDate" type="datetime-local">
    <label id="eventLocation></label>
    <input id="eventLocation" placeholder="Event Location>
    <button id="saveEvent"Save Event</button>
    </div>
    `
  },
  buildEvents() {
    API.fetchEvents()
    .then(events => {
      document.getElementById("eventsOutput").innerHTML = ""
      events.forEach(event => {
        this.buildEvent(event)
      })
    })
  },
  buildEvent(object) {
    document.getElementById("eventsOutput").innerHTML += `
    <div class="event">
    <div id="eventName--${object.id}">${object.name}</div>
    <div id="eventDate--${object.id}">${object.date}</div>
    <div id="eventLocation--${object.id}">${object.location}</div>
    <button id="edit--${object.id}">Edit</button>
    <button id="delete--${object.id}">Delete</button>
    </div>
    `
  }
}


export default DOM
