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
