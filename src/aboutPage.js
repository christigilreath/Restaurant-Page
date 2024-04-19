import AboutImage from "./assets/about-picture.jpeg";
function aboutPage() {
  const heading = document.querySelector("h1");
  heading.textContent = "About";
  const image = document.querySelector("img");
  image.src = AboutImage;

  image.alt = "pizza restaurant image";
  const description = document.querySelector("p");
  description.textContent = "A history of the pizza restaurant";
}

export default aboutPage;
