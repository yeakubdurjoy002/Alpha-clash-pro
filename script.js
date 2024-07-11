// function continueGame() {
//   // step-1: get a random alphabet
//   //
// }

// function play() {
//   const homeSection = document.getElementById("home-section");
//   homeSection.classList.add("hidden");
//   const playGround = document.getElementById("play-ground");
//   playGround.classList.remove("hidden");
//   continueGame();
// }

function randomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  const randomNumber = Math.random() * 25;
  const index = Math.floor(randomNumber);
  const alphabet = alphabets[index];
  setBackgroundColoById(alphabet);
  return alphabet;

  // const index = Math.floor(Math.random() * alphabetString.length);
  // return alphabetString[index];
}

function continueGame() {
  // Step 1: Get a random alphabet
  const randomLetter = randomAlphabet();

  // Step 2: Display the random alphabet in the play ground
  const playGround = document.getElementById("play-ground");
  const displayElement = playGround.querySelector(".artboard .flex .text-8xl");
  displayElement.textContent = randomLetter;
}

function play() {
  const homeSection = document.getElementById("home-section");
  homeSection.classList.add("hidden");
  const playGround = document.getElementById("play-ground");
  playGround.classList.remove("hidden");
  continueGame();
}
function handleKeyBoard(e) {
  const playerPressed = e.key;
  console.log(playerPressed);
}
document.addEventListener("keyup", handleKeyBoard);
