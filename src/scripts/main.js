import loginRegisterListener from "./loginRegisterEvents.js";
import messageEvents from "./messagesEvents.js"

loginRegisterListener.login();
loginRegisterListener.register();
loginRegisterListener.registerUser();

messageEvents.newMessage()
messageEvents.editOrDelete()