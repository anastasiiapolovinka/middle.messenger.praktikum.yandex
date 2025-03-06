import "./style.scss";
import MessagesLayout from "./layout/messages";
import ProfileLayout from "./layout/profile";
import ErrorPage from "./pages/error/ErrorPage";
import AuthLayout from "./layout/auth";
import EditPassword from "./pages/profile/editpassword";
import EditUsersData from "./pages/profile/editusersdata";
import Profile from "./pages/profile";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Router from "./modules/Router";

// profile
const editpassword = new EditPassword();
const edituserdata = new EditUsersData();
const profile = new Profile();
const profilePage = new ProfileLayout({ children: { content: profile } });
const editpasswordPage = new ProfileLayout({
  children: { content: editpassword },
});
const editusersdataPage = new ProfileLayout({
  children: { content: edituserdata },
});
// auth
const login = new Login();
const register = new Register();
const loginPage = new AuthLayout({
  children: { content: login },
  name: "login",
});
const registerPage = new AuthLayout({
  children: { content: register },
});
// error
const page404 = new ErrorPage({
  title: "404",
  errormassage: "Не туда попали",
  linkButtonText: "Назад к чатам",
});
const page500 = new ErrorPage({
  title: "500",
  errormassage: "Мы уже фиксим",
  linkButtonText: "Назад к чатам",
});
// chat
const chatPage = new MessagesLayout({ class: "chats" });

document.addEventListener("DOMContentLoaded", () => {
  const router = new Router("#app");
  router
    .add("/", loginPage)
    .add("/register", registerPage)
    .add("/messanger", chatPage)
    .add("/chats", chatPage)
    .add("/profile", profilePage)
    .add("/editpassword", editpasswordPage)
    .add("/edituserdata", editusersdataPage)
    .add("/404", page404)
    .add("/500", page500)
    .start();
});
