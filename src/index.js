import homePage from "./homePage.js";
import menuPage from "./menuPage.js";
import aboutPage from "./aboutPage.js";
import "./styles/style.css";
homePage();

const buttons = document.querySelectorAll("button");

console.log(buttons);

function tabFunction(button) {
  console.log(button);
  if (button.target.id === "home") {
    homePage();
  }
  if (button.target.id === "menu") {
    menuPage();
  }
  if (button.target.id === "about") {
    aboutPage();
  }
}

buttons.forEach((btn) => btn.addEventListener("click", tabFunction));
