import loginRegisterListener from "./loginRegisterEvents.js";
import newsListener from "./newsEvents.js";
import messageEvents from "./messagesEvents.js"
import tasksEvents from "./tasksEvents.js";

loginRegisterListener.login();
loginRegisterListener.register();
loginRegisterListener.registerUser();
newsListener.renderNewsFormButton();
loginRegisterListener.logout()
messageEvents.newMessage()
messageEvents.editOrDelete()
tasksEvents.newTask();
tasksEvents.editOrDelete();
