const titel = document.querySelector("header h1");
const articleSection = document.querySelector("section");
const article1 = document.querySelector("article:nth-child(1)");
const img1 = document.querySelector("article:nth-child(1) img");
const article1Heading = document.querySelector("article:nth-child(1) h3");
const article1Content = document.querySelector("article:nth-child(1) p");

document.addEventListener("click", start);

function start() {
  console.log("virker det?");
  titel.textContent = "Billeder";
  article1Heading.textContent = "Arkitektur";
  article1Content.textContent = "Bygninger skaber rum";
  img1.src = "https://placeimg.com/640/480/any";
  img1.alt = "Woman smiling";

  let newArticle = document.createElement("article");
  let newH3 = document.createElement("h3");
  let newHeadlineText = document.createTextNode("Mennesker");
  newH3.appendChild(newHeadlineText);
  let newPic = document.createElement("img");
  newPic.src = "https://placeimg.com/640/480/any";
  let newContent = document.createElement("p");
  newContent.textContent = "Her står der noget om mennesker";
  newArticle.appendChild(newPic);
  newArticle.appendChild(newH3);
  newArticle.appendChild(newContent);
  articleSection.appendChild(newArticle);
}
