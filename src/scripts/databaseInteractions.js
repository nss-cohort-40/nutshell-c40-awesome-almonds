const API = {
  fetchUsers() {
    return fetch(`http://localhost:8088/users`)
      .then(data => data.json())
  },
  postUsers(data) {
    console.log(data)
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
    console.log(data)
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
  }
}

export default API;
