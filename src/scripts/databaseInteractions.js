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
  postArticles(artObj) {
    return fetch(`http://localhost:8088/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(artObj)
    })
  },
  deleteArticle(artId) {
    console.log(artId)
    return fetch(`http://localhost:8088/articles/${artId}`, {
      method: "DELETE"
    })
  }
}

export default API;
