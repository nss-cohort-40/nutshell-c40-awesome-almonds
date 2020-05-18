import API from "./databaseInteractions.js"
import DOM from "./domInteractions.js"

let messagesEvents = {
  newMessage() {
    document.getElementById("sendMessageButton").addEventListener("click", () => {
      if (document.getElementById("editMessage").innerHTML != "") {
        const messageObject = {
          message: document.getElementById("messageInput").value,
          userId: document.getElementById("userId").innerHTML,
          id: document.getElementById("editMessage").innerHTML
        }
        API.putMessage(messageObject, messageObject.id)
        .then(data => DOM.buildMessages())
        document.getElementById("editMessage").innerHTML = "";
      } else {
        const messageObject = {
          message: document.getElementById("messageInput").value,
          userId: document.getElementById("userId").innerHTML
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