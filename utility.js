// function randomAlphabet() {
//   const alphabetString = "abcdefghijklmnopqrstuvwxyz";
//   const index = alphabetString.split("");
//   console.log(index);
// }
function setBackgroundColoById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-[#FFA500]");
}
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-[#FFA500]");
}
function playEndSection(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
