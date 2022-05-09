const startBtn = document.querySelector(".btn-start");
const nextBtns = document.querySelectorAll(".btn-next");
// WHY CANT SHARE SAME EVENT LISTENER?

const resultsBtn = document.querySelector(".btn-results");
const restartBtn = document.querySelector(".btn-reset");
const displayResults = document.querySelector(".display-results");
const containerResults = document.querySelector(".container-results");
const sweetPersonality = document.querySelector(".display-sweets");
const saltPersonality = document.querySelector(".display-salt");

const question = document.querySelector(".q-num");
const errorMessage = document.querySelector(".error1");

const inputResults = document.getElementsByName("afternoon-snack");

const snackPersonality = {
  //OBJECT: Holds possible quiz results
  results: {
    sweet: {
      name: `ice cream`,
      counter: 0,
    },
    salt: {
      name: `potato chips`,
      counter: 0,
    },
  },
};

const userChoice = {
  choice1: document.getElementsByName("afternoon-snack").value,
  choice2: document.getElementsByName("movie-snack").value,
};

function scrollDown() {
  window.scrollBy(0, window.innerHeight);
}

// WHY CAN'T GET BOTH BUTTONS TO WORK?!!? BC QUERY SELECTOR?
function validateClick() {
  inputResults.forEach((inputResult) => {
    if (inputResult.checked) {
      errorMessage.innerText = "";
      scrollDown();
    } else {
      errorMessage.innerText = "Please select an answer";
    }
  });
}

// IF BUTTONS ARE CLICKED, SCROLL DOWN TO NEXT QUESTION
//   if (document.querySelector('input[name="afternoon-snack"]').checked) {
//     console.log("HELLO");
//     scrollDown();
//   } else {
//     console.log("PLEASE CHECK SOMETHING");
//   }

// function validateSClick() {
//   if (document.querySelector('input[name="movie-snack"]').checked) {
//     console.log("HELLO");
//     scrollDown();
//   } else {
//     console.log("PLEASE CHECK SOMETHING");
//   }
// }

// function resetCounter() {
//   snackPersonality.sweet.counter = 0;
//   snackPersonality.salt.counter = 0;
// }

function choiceCounter() {
  for (const [ley, value] of Object.entries(userChoice)) {
    if (value === "salt") {
      snackPersonality.results.salt.counter++;
    } else {
      snackPersonality.results.sweet.counter++;
    }
  }
}

//   userChoice.forEach((choice) => {
//     if (choice.value === "salt") {
//       snackPersonality.salt.counter++;
//     } else {
//       snackPersonality.sweet.counter++;
//     }
//   });
// }

function printResults() {
  if (
    snackPersonality.results.salt.counter <
    snackPersonality.results.sweet.counter
  ) {
    containerResults.style.display = "block";
    saltPersonality.style.display = "block";
  } else {
    containerResults.style.display = "block";
    sweetPersonality.style.display = "block";
  }
}

function showResults(e) {
  e.preventDefault();
  // resetCounter();
  choiceCounter();
  printResults();
  scrollDown();
}

function restartQuiz() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  displayResults.style.display = "none";
  containerResults.style.display = "none";
}

function startGame() {
  startBtn.addEventListener("click", scrollDown);
  nextBtns.forEach((btn) => btn.addEventListener("click", validateClick));

  resultsBtn.addEventListener("click", showResults);
  restartBtn.addEventListener("click", restartQuiz);
}

startGame();
