/*
    Authors: John, Daniel, Elijah, Ronnie
    Purpose: Fetching data from the database to interact with the other modules.
*/
const API = {
    fetchUsers() {
      return fetch(`http://localhost:8088/users`)
        .then(data => data.json())
    },
    postUsers(data) {
      return fetch(`http://localhost:8088/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
    },
    fetchArticles() {
      return fetch(`http://localhost:8088/articles`)
        .then(data => data.json())
    },
    fetchArticleById(articleId) {
      return fetch(`http://localhost:8088/articles/${articleId}`)
        .then(data => data.json())
    },
    putArticle(articleObj, articleId) {
      return fetch(`http://localhost:8088/articles/${articleId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleObj)
      })
    },
    postArticle(articleObj) {
      return fetch(`http://localhost:8088/articles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleObj)
      })
    },
    postMessage(data) {
      return fetch(`http://localhost:8088/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
    },
    deleteArticle(artId) {
      return fetch(`http://localhost:8088/articles/${artId}`, {
        method: "DELETE",
      })
    },
    fetchMessages() {
      return fetch(`http://localhost:8088/messages?_expand=user`)
        .then(messages => messages.json())
    },
    deleteMessage(messageId) {
      return fetch(`http://localhost:8088/messages/${messageId}`, {
        method: "DELETE"
      })
    },
    putMessage(message, messageId) {
      return fetch(`http://localhost:8088/messages/${messageId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message)
      })
    },
    getSpecificMessage(messageId) {
      return fetch(`http://localhost:8088/messages/${messageId}`)
        .then(message => message.json())
    },
    postTask(data) {
      return fetch(`http://localhost:8088/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
    },
    fetchTasks() {
      return fetch(`http://localhost:8088/tasks?_expand=user&userId=${sessionStorage.getItem("userId")}`)
        .then(tasks => tasks.json())
    },
    deleteTask(taskId) {
      return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "DELETE"
      })
    },
    putTask(task, taskId) {
      return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task)
      })
    },
    getTask(tasksId) {
      return fetch(`http://localhost:8088/tasks/${tasksId}`)
        .then(task => task.json())
    },
    fetchEvents() {
      return fetch(`http://localhost:8088/events?userId=${sessionStorage.getItem("userId")}`)
        .then(events => events.json())
    },
    fetchEventById(eventId) {
      return fetch(`http://localhost:8088/events/${eventId}`)
        .then(event => event.json())
    },
    postEvent(eventObj) {
      return fetch(`http://localhost:8088/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventObj)
      })
    },
    deleteEvent(eventId) {
      return fetch(`http://localhost:8088/events/${eventId}`, {
        method: "DELETE"
      })
    },
    putEvent(eventObj, eventId) {
      return fetch(`http://localhost:8088/events/${eventId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventObj)
      })
    }
  }
    export default API;