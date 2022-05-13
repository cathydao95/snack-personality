// BUTTONS
const startBtn = document.querySelector(".btn-start");
const nextBtn = document.querySelector(".btn-next");
const nextBtnt = document.querySelector(".btn-next-test");
const resultsBtn = document.querySelector(".btn-results");
const resetBtns = document.querySelectorAll(".btn-reset");

// DISPLAYS
const displayResults = document.querySelector(".display-results");
const containerResults = document.querySelector(".container-results");
const sweetPersonality = document.querySelector(".display-sweets");
const saltPersonality = document.querySelector(".display-salt");

// ERROR MESSAGES
const errorMessage = document.querySelector(".error1");
const error2Message = document.querySelector(".error2");
const error3Message = document.querySelector(".error3");

// RADIOBUTTONS
const inputResults = document.querySelectorAll('input[name="afternoon-snack"]');
const finalResults = document.querySelectorAll('input[name="movie-snack"]');
const radioBtns = document.querySelectorAll('input[type="radio"]');

let sum;

// FUNCTION TO SCROLL DOWN WHEN BUTTON CLICKED
function scrollDown() {
  window.scrollBy(0, window.innerHeight);
}

// FUNCTION TO VALIDATE IF QUESTION 1ST QUESTION ANSWERED
function validateClick() {
  let newArray = Array.from(inputResults);
  let check = newArray.some((x) => x.checked);
  if (check) {
    console.log("ok");
    errorMessage.innerText = "";
    scrollDown();
  } else {
    errorMessage.innerText = "Please select an answer";
  }
}

// FUNCTION TO VALIDATE IF SECOND QUESTION ANSWERED
function validateFinal() {
  let answersArray = Array.from(finalResults);
  let check2 = answersArray.some((x) => x.checked);
  if (check2) {
    console.log(check2);
    error2Message.innerText = "";
    console.log("ok");
    scrollDown();
  } else {
    error2Message.innerText = "Please select an answer";
  }
}

// FUNCTION TO CHECK ALL QUESTIONS ANSWERED AND COUNT INPUTS
function choiceCounter() {
  const ArrayChecked = Array.from(radioBtns);
  const test = ArrayChecked.map((x) => x.checked);
  const lastCheck = test.filter((value) => value === true);
  if (lastCheck.length === 2) {
    error3Message.innerText = "";
    sum = [...document.querySelectorAll("input[type=radio]:checked")].reduce(
      (acc, val) => acc + Number(val.value),
      0
    );
    console.log(sum);
    if (sum > 1) {
      console.log(sum);
      containerResults.style.display = "block";
      saltPersonality.style.display = "block";
      sweetPersonality.style.display = "none";
    } else if (sum < 1) {
      console.log(sum);
      containerResults.style.display = "block";
      sweetPersonality.style.display = "block";
      saltPersonality.style.display = "none";
    } else {
      let randomNum = Math.random() * 2;
      console.log(randomNum);
      if (randomNum > 1) {
        containerResults.style.display = "block";
        saltPersonality.style.display = "block";
        sweetPersonality.style.display = "none";
      } else {
        containerResults.style.display = "block";
        sweetPersonality.style.display = "block";
      }
    }
  } else {
    error3Message.innerText = "Please answer all questions";
  }
}

// SHOW RESULTS
function showResults(e) {
  e.preventDefault();
  choiceCounter();
  scrollDown();
}
// RESTART
function restartQuiz() {
  sum = 0;
  errorMessage.innerText = "";
  error2Message.innerText = "";
  error3Message.innerText = "";
  displayResults.style.display = "none";
  saltPersonality.style.display = "none";
  sweetPersonality.style.display = "none";
  containerResults.style.display = "none";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  startGame();
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// START GAME AND LISTEN TO CLICKS
function startGame() {
  startBtn.addEventListener("click", scrollDown);
  nextBtn.addEventListener("click", validateClick);
  nextBtnt.addEventListener("click", validateFinal);
  resultsBtn.addEventListener("click", showResults);
  resetBtns.forEach((resetBtn) => {
    resetBtn.addEventListener("click", restartQuiz);
  });
}
startGame();
