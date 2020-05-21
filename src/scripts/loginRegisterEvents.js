import API from "./databaseInteractions.js"
import DOM from "./domInteractions.js"
import newsListener from "./newsEvents.js"


const loginRegisterListener = {
  login() {
    if (sessionStorage.getItem("userId")) {
      document.getElementById("loginContainer").classList.add("hidden")
      document.getElementById("hideUser").classList.remove("hidden")
      DOM.buildMessages();
      DOM.renderTasks();
      DOM.buildEvents();
      newsListener.presentNewsDashboard();
    }
    document.getElementById("loginButton").addEventListener("click", () => {
      let userEmail = document.getElementById("loginEmail").value
      let userPassword = document.getElementById("loginPassword").value
      if (userEmail === "" || userPassword === "") {
        alert("Must fill in forms")
        return
      }
      API.fetchUsers()
        .then(users => {
          const person = users.find(user => user.email === userEmail)
          if (person) {
            if (person.password === userPassword) {
              document.getElementById("loginContainer").classList.add("hidden")
              document.getElementById("hideUser").classList.remove("hidden")
              sessionStorage.setItem("userId", person.id)
              DOM.buildMessages()
              DOM.buildEvents()
              DOM.renderTasks()
              newsListener.presentNewsDashboard();
              document.getElementById("loginEmail").value = ""
              document.getElementById("loginPassword").value = ""
            } else {
              alert("Incorrect Password")
            }
          } else {
            alert("Incorrect Email or User does not exist")
          }
        })
    })
  },
  register() {
    document.getElementById("loginRegisterButton").addEventListener("click", () => {
      document.getElementById("loginContainer").classList.add("hidden")
      document.getElementById("registerContainer").classList.remove("hidden")
    })
  },
  registerUser() {
    document.getElementById("registerButton").addEventListener("click", () => {
      let createEmail = document.getElementById("registerEmail").value
      let createPassword = document.getElementById("registerPassword").value
      let confirmPassword = document.getElementById("registerPasswordConfirmation").value
      if (createEmail === "" || createPassword === "" || confirmPassword === "") {
        alert("Must fill in forms")
        return
      }
      API.fetchUsers()
        .then(users => {
          const person = users.find(user => user.email === createEmail)
          let newUserId = users.length + 1
          if (!person) {
            if (createPassword === confirmPassword) {
              API.postUsers({
                username: createEmail.split("@")[0],
                email: createEmail,
                password: createPassword
              })
              document.getElementById("registerContainer").classList.add("hidden")
              document.getElementById("hideUser").classList.remove("hidden")
              sessionStorage.setItem("userId", newUserId)
            } else {
              alert("Passwords do not match")
            }
          } else {
            alert("User already exists")
          }
        })
      DOM.buildMessages()
      DOM.buildEvents()
      DOM.renderTasks()
      newsListener.presentNewsDashboard();
    })
  },
  logout() {
    document.getElementById("logoutButton").addEventListener("click", () => {
      sessionStorage.removeItem("userId")
      document.getElementById("loginContainer").classList.remove("hidden")
      document.getElementById("hideUser").classList.add("hidden")
    })
  }
}


export default loginRegisterListener;