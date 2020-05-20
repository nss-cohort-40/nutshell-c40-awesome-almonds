import loginRegisterListener from "./loginRegisterEvents.js";
import newsListener from "./newsEvents.js";
import messageEvents from "./messagesEvents.js"

loginRegisterListener.login();
loginRegisterListener.register();
loginRegisterListener.registerUser();
newsListener.renderNewsFormButton();
newsListener.editOrDeleteArticle();
loginRegisterListener.logout()
messageEvents.newMessage()
messageEvents.editOrDelete()
