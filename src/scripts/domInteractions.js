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
  }
}


export default DOM