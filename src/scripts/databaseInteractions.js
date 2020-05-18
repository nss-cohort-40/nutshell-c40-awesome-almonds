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
  }
}

export default API;
