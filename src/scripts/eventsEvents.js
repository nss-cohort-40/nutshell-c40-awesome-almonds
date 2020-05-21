import API from "./databaseInteractions.js"
import DOM from "./domInteractions.js"


const eventsContainer = {
  makeEvent() {
    document.getElementById("eventsSubmit").addEventListener("click", () => {
      console.log("clicked")
      if (document.getElementById("eventsNameInput").value === "" || document.getElementById("eventsDateInput").value === "" || document.getElementById("eventsLocationInput").value === ""){
        return
      } else if (document.getElementById("eventId").innerHTML === ""){
        console.log("posting")
        API.postEvent({
          name: document.getElementById("eventsNameInput").value,
          date: document.getElementById("eventsDateInput").value,
          location: document.getElementById("eventsLocationInput").value,
          userId: sessionStorage.getItem("userId")
        })
        .then(event => {
          DOM.buildEvents()
        })
        document.getElementById("eventsNameInput").value = "";
        document.getElementById("eventsDateInput").value = "";
        document.getElementById("eventsLocationInput").value = "";
      } else {
        console.log("editing")
        API.putEvent({
          name: document.getElementById("eventsNameInput").value,
          date: document.getElementById("eventsDateInput").value,
          location: document.getElementById("eventsLocationInput").value,
          userId: sessionStorage.getItem("userId")
        }, document.getElementById("eventId").innerHTML)
        .then(event => {
          DOM.buildEvents()
        })
        document.getElementById("eventId").innerHTML = "";
        document.getElementById("eventsNameInput").value = "";
        document.getElementById("eventsDateInput").value = "";
        document.getElementById("eventsLocationInput").value = "";
      }
    })
  },
  editOrDelete() {
    document.getElementById("eventsOutput").addEventListener("click", () => {
      if (event.target.id.includes("edit--")) {
        console.log("edit button")
        eventsContainer.editEvent(event.target.id.split("--")[1])
      }
      if (event.target.id.includes("delete--")) {
        console.log("delete button")
        eventsContainer.deleteEvent(event.target.id.split("--")[1])
      }
    })
  },
  editEvent(eventId) {
    API.fetchEventById(eventId)
    .then(event => {
      document.getElementById("eventId").innerHTML = event.id;
      document.getElementById("eventsNameInput").value = event.name;
      document.getElementById("eventsDateInput").value = event.date;
      document.getElementById("eventsLocationInput").value = event.location;
    })
    
  },
  deleteEvent(eventId) {
    API.deleteEvent(eventId)
    DOM.buildEvents()
  }
}

export default eventsContainer