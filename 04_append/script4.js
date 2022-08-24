const titel = document.querySelector("header h1");
const article1 = document.querySelector("article:nth-child(1)");
const img1 = document.querySelector("article:nth-child(1) img");
const article1Heading = document.querySelector("article:nth-child(1) h3");
const article1Content = document.querySelector("article:nth-child(1) p");

titel.textContent = "Billeder";
article1Heading.textContent = "Arkitektur";
article1Content.textContent = "Bygninger skaber rum";
img1.src = "https://placeimg.com/640/480/any";
img1.alt = "Woman smiling";

let articleNy = document.createElement("article");
let newH3 = document.createElement("h3");
let newHeadlineText = document.createTextNode("Mennesker");
let newPic = document.createElement("img");
let newContent = document.createElement("p");

newH3.appendChild(newHeadlineText);
newContent.textContent = "Her står der noget om mennesker";
newArticle.appendChild(newPic);
newArticle.appendChild(newH3);
newArticle.appendChild(newContent);
articleSection.appendChild(newArticle);
newPic.src = "https://placeimg.com/400/300/people";
