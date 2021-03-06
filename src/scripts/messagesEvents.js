/*
    Authors: John, Daniel, Elijah, Ronnie
    Purpose: Shows messages from all users and allows the current user to edit their own messages
*/

import API from "./databaseInteractions.js"
import DOM from "./domInteractions.js"

let messagesEvents = {
  newMessage() {
    document.getElementById("sendMessageButton").addEventListener("click", () => {
      if (document.getElementById("editMessage").innerHTML != "") {
        const messageObject = {
          message: document.getElementById("messageInput").value,
          userId: sessionStorage.getItem("userId"),
          id: document.getElementById("editMessage").innerHTML
        }
        API.putMessage(messageObject, messageObject.id)
        .then(data => DOM.buildMessages())
        document.getElementById("editMessage").innerHTML = "";
      } else {
        if (document.getElementById("messageInput").value === "") {
          return
        }
        const messageObject = {
          message: document.getElementById("messageInput").value,
          userId: sessionStorage.getItem("userId")
        }
        API.postMessage(messageObject)
        .then(data => DOM.buildMessages())
      }
      document.getElementById("messageInput").value = ""
    })
  },
  editOrDelete() {
    document.getElementById("messageOutput").addEventListener("click", () => {
      if (event.target.id.includes("edit--")) {
        messagesEvents.editMessage(event.target.id.split("--")[1])
      }
      if (event.target.id.includes("delete--")) {
        messagesEvents.deleteMessage(event.target.id.split("--")[1])
      }
    })
  },
  editMessage(messageId) {
    API.getSpecificMessage(messageId)
    .then(messageObject => {
      document.getElementById("messageInput").value = messageObject.message
      document.getElementById("editMessage").innerHTML = messageId
    })
  },
  deleteMessage(messageId) {
    API.deleteMessage(messageId)
    .then(data => DOM.buildMessages())
  }
}


export default messagesEvents;