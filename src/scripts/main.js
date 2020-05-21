import loginRegisterListener from "./loginRegisterEvents.js";
import newsListener from "./newsEvents.js";
import messageEvents from "./messagesEvents.js"
import tasksEvents from "./tasksEvents.js";
import eventsContainer from "./eventsEvents.js"

loginRegisterListener.login();
loginRegisterListener.register();
loginRegisterListener.registerUser();
newsListener.renderNewsFormButton();
newsListener.editOrDeleteArticle();
loginRegisterListener.logout()
messageEvents.newMessage()
messageEvents.editOrDelete()
tasksEvents.newTask();
tasksEvents.editOrDelete();
tasksEvents.taskCompleted();
eventsContainer.makeEvent();
eventsContainer.editOrDelete();

