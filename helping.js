function randomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const index = Math.floor(Math.random() * alphabetString.length);
  const alphabet = alphabetString[index];
  setBackgroundColorById(alphabet);
  return alphabet;
}

function continueGame() {
  const randomLetter = randomAlphabet();
  const displayElement = document.getElementById("current-alphabet");
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
  const playerPressed = e.key.toLowerCase();
  const currentAlphabet = document.getElementById("current-alphabet");
  const expectedAlphabet = currentAlphabet.innerText;

  if (playerPressed === expectedAlphabet) {
    const currentScoreElement = document.getElementById("current-score");
    const currentScore = parseInt(currentScoreElement.innerText);
    currentScoreElement.innerText = currentScore + 1;

    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    const newLifeElement = document.getElementById("current-life");
    const newLife = parseInt(newLifeElement.innerText) - 1;
    newLifeElement.innerText = newLife;
    if (newLife === 0) {
      const playGround = document.getElementById("play-ground");
      playGround.classList.add("hidden");
      const playEnd = document.getElementById("play-end");
      playEnd.classList.remove("hidden");
      document.querySelector("#play-end .score span:last-child").innerText =
        document.getElementById("current-score").innerText;
    }
  }
}

document.addEventListener("keyup", handleKeyBoard);

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.add("bg-[#FFA500]");
  }
}

function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.remove("bg-[#FFA500]");
  }
}

function playEndSection() {
  const playEnd = document.getElementById("play-end");
  playEnd.classList.remove("hidden");
}

// Ensure to reset the game when Play Again button is clicked
document.querySelector("#play-end .btn").addEventListener("click", function () {
  const playEnd = document.getElementById("play-end");
  playEnd.classList.add("hidden");
  const homeSection = document.getElementById("home-section");
  homeSection.classList.remove("hidden");

  // Reset score and life
  document.getElementById("current-score").innerText = "0";
  document.getElementById("current-life").innerText = "10";
});
