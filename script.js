// const colaKnap = document.querySelector("#colaElement");
// const fantaKnap = document.querySelector("#fantaElement");
// const snapsKnap = document.querySelector("#snapsElement");
// const beerKnap = document.querySelector("#beerElement");

// colaKnap.addEventListener("click", colaKlik);
// fantaKnap.addEventListener("click", fantaKlik);
// snapsKnap.addEventListener("click", snapsKlik);
// beerKnap.addEventListener("click", beerKlik);

// function colaKlik() {
//   console.log("alkoholfri");
// }
// function fantaKlik() {
//   console.log("alkoholfri");
// }
// function snapsKlik() {
//   console.log("indeholder alkohol");
// }

// function beerKlik() {
//   console.log("indeholder alkohol");
// }

// dette er også en muligthed men for at lave mindst muligt kode ville man nok gøre dette//

document.querySelector("#colaElement").addEventListener("click", tjek);
document.querySelector("#fantaElement").addEventListener("click", tjek);
document.querySelector("#snapsElement").addEventListener("click", tjek);
document.querySelector("#beerElement").addEventListener("click", tjek);

function tjek() {
  console.log(this.alt);
  if (this.alt == "indeholder alkohol" || this.alt == "akoholfri") {
    console.log("indeholder alkohol");
  } else {
    console.log("alkoholfri");
  }
}
