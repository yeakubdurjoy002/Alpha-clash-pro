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
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  setBackgroundColoById(alphabet);
  return alphabet;

  // const index = Math.floor(Math.random() * alphabetString.length);
  // return alphabetString[index];
}

function continueGame() {
  // Step 1: Get a random alphabet
  const randomLetter = randomAlphabet();
  // console.log("your random alphabet is", randomLetter);

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

  // get the expected letter to press
  const currentAlphabet = document.querySelector(".artboard .flex .text-8xl");
  const expectedAlphabet = currentAlphabet.innerText;
  if (playerPressed === expectedAlphabet) {
    // console.log("Wow you got a letter");
    // Update Score :
    // get the current score
    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    console.log(currentScore);

    // increase the score by 1
    const newScore = currentScore + 1;
    // show the score live
    currentScoreElement.innerText = newScore;

    // start the new game
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    const newLifeElement = document.getElementById("current-life");
    const newLifeText = newLifeElement.innerText;
    const newLifeNumber = parseInt(newLifeText);
    const newLife = newLifeNumber - 1;
    newLifeElement.innerText = newLife;
    if (newLife === 0) {
      const playEnd = document.getElementById("play-end");

      playEndSection(playEnd);
    }

    console.log(playEnd);
  }

  // console.log(playerPressed, expectedAlphabet);
}
document.addEventListener("keyup", handleKeyBoard);
