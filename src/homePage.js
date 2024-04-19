import HomePicture from "./assets/home-picture.jpg";
function homePage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  const heading = document.createElement("h1");
  heading.textContent = "Pizza Restaurant";
  const image = document.createElement("img");
  image.setAttribute("src", HomePicture);
  image.alt = "pizza image";
  const description = document.createElement("p");
  description.textContent = "A paragraph describing the restaurant mission";
  contentDiv.append(heading, image, description);
}

export default homePage;
