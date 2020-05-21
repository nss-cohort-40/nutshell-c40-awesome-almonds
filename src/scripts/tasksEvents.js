import API from "./databaseInteractions.js"
import DOM from "./domInteractions.js"

const tasksEvents = {
  newTask() {
    document.getElementById("createTaskButton").addEventListener("click", () => {
      if (document.getElementById("editTask").innerHTML != "") {
        const task = {
          task: document.getElementById("taskInput").value,
          userId: sessionStorage.getItem("userId"),
          expectedCompletion: document.getElementById("expectedCompletion").value,
          completed: false,
          id: document.getElementById("editTask").innerHTML
        }
        API.putTask(task, task.id)
          .then(data => {
            DOM.renderTasks()
            document.getElementById("taskInput").value = "";
            document.getElementById("expectedCompletion").value = "";
          })
        document.getElementById("editTask").innerHTML = "";
      } else {
        const task = {
          task: document.getElementById("taskInput").value,
          userId: sessionStorage.getItem("userId"),
          expectedCompletion: document.getElementById("expectedCompletion").value,
          completed: false,
        }
        API.postTask(task)
          .then(data => {
            DOM.renderTasks()
            document.getElementById("taskInput").value = "";
            document.getElementById("expectedCompletion").value = "";
          })
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
  },
  taskCompleted() {
    document.getElementById(`taskOutput`).addEventListener("change", () => {
      if (event.target.id.includes("taskCompleted--")) {
        let taskId = event.target.id.split("--")[1]
        API.getTask(taskId)
          .then(taskObject => {
            taskObject.completed = true
            API.putTask(taskObject, taskObject.id)
              .then(data => DOM.renderTasks())
          })
      } else {
        return
      }
    })
  }

}

export default tasksEvents;