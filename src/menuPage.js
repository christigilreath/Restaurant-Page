import menuPicture from "./assets/menu-picture.jpg";
function menuPage() {
  const heading = document.querySelector("h1");
  heading.textContent = "Menu";
  const image = document.querySelector("img");
  image.src = menuPicture;
  image.alt = "pizza menu image";
  const description = document.querySelector("p");
  description.textContent = "A typed out menu for the restaurant";
}

export default menuPage;
