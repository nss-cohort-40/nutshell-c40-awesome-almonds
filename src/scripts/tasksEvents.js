import API from "./databaseInteractions.js"
import DOM from "./domInteractions.js"

const tasksEvents = {
  newTask() {
    document.getElementById("createTaskButton").addEventListener("click", () => {
      if (document.getElementById("editTask").innerHTML != "") {
        const task = {
          task: document.getElementById("taskInput").value,
          userId: sessionStorage.getItem("userId"),
          id: document.getElementById("editTask").innerHTML
        }
        API.putTask(task, task.id)
          .then(data => DOM.renderTasks())
        document.getElementById("editTask").innerHTML = "";
      } else {
        const task = {
          task: document.getElementById("taskInput").value,
          userId: sessionStorage.getItem("userId")
        }
        API.postTask(task)
          .then(data => DOM.renderTasks())
      }
    })
  },
  editOrDelete() {
    document.getElementById("taskOutput").addEventListener("click", () => {
      if (event.target.id.includes("edit--")) {
        this.editTask(event.target.id.split("--")[1])
      }
      if (event.target.id.includes("delete--")) {
        this.deleteTask(event.target.id.split("--")[1])
      }
    })
  },
  editTask(taskId) {
    API.getTask(taskId)
      .then(task => {
        document.getElementById("taskInput").value = task.task
        document.getElementById("editTask").innerHTML = taskId
      })
  },
  deleteTask(taskId) {
    API.deleteTask(taskId)
      .then(data => DOM.renderTasks())
  }
}

export default tasksEvents;