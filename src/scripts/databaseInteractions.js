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
