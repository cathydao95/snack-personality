// START BUTTON
const startBtn = document.querySelector(".btn-start");

// NEXT BUTTONS
const nextBtn = document.querySelector(".btn-next");

// RESULTS BUTTON
const resultsBtn = document.querySelector(".btn-results");

// RESET BUTTON
const restartBtn = document.querySelector(".btn-reset");

// DISPLAYS
const displayResults = document.querySelector(".display-results");
const containerResults = document.querySelector(".container-results");
const sweetPersonality = document.querySelector(".display-sweets");
const saltPersonality = document.querySelector(".display-salt");

// ERROR MESSAGE
const errorMessage = document.querySelector(".error1");
const error2Message = document.querySelector(".error2");

// AFTERNOON SNACK NAMES
// const inputResults = document.getElementsByName("afternoon-snack");
const inputResults = document.querySelectorAll('input[name="afternoon-snack"]');

const finalResults = document.querySelectorAll('input[name="movie-snack"]');

// IS VALID TRUE?
let isValid;
let sum;

// FUNCTION TO SCROLL DOWN WHEN BUTTON CLICKED
function scrollDown() {
  window.scrollBy(0, window.innerHeight);
}

// FUNCTION TO VALIDATE IF QUESTION IS ANSWERED
function validateClick() {
  for (let result of inputResults) {
    if (result.checked) {
      isValid = true;
      console.log(result.value);
      errorMessage.innerText = "";
      scrollDown();
    }
    if (!isValid) {
      errorMessage.innerText = "Please select an answer";
    }
  }
}

function choiceCounter() {
  for (let finalResult of finalResults) {
    if (finalResult.checked) {
      error2Message.innerText = "";
      sum = [...document.querySelectorAll("input[type=radio]:checked")].reduce(
        (acc, val) => acc + Number(val.value),
        0
      );
      if (sum > 1) {
        console.log(sum);
        containerResults.style.display = "block";
        saltPersonality.style.display = "block";
      } else if (sum < 1) {
        console.log(sum);
        containerResults.style.display = "block";
        sweetPersonality.style.display = "block";
      } else if ((sum = 1)) {
        let randomNum = Math.random() * 2;
        if (randomNum > 1) {
          containerResults.style.display = "block";
          saltPersonality.style.display = "block";
        } else {
          containerResults.style.display = "block";
          sweetPersonality.style.display = "block";
        }
      }
    } else {
      error2Message.innerText = "Please select an answer";
    }
  }
}

function showResults(e) {
  e.preventDefault();
  choiceCounter();
  // printResults();
  scrollDown();
}

function restartQuiz() {
  errorMessage.innerText = "";
  sum = 0;
  displayResults.style.display = "none";
  saltPersonality.style.display = "none";
  sweetPersonality.style.display = "block";
  containerResults.style.display = "none";
  startGame();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Function to Start the Game and Listento Button Clicks
function startGame() {
  startBtn.addEventListener("click", scrollDown);
  nextBtn.addEventListener("click", validateClick);
  resultsBtn.addEventListener("click", showResults);
  restartBtn.addEventListener("click", restartQuiz);
}

startGame();
