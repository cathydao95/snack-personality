const startBtn = document.querySelector(".btn-start");
const nextBtn = document.querySelector(".btn-next");
// WHY CANT SHARE SAME EVENT LISTENER?
const nextBtn2 = document.querySelector(".btn2-next");
const resultsBtn = document.querySelector(".btn-results");
const restartBtn = document.querySelector(".btn-reset");
const displayResults = document.querySelector(".display-results");
const containerResults = document.querySelector(".container-results");
const question = document.querySelector(".q-num");
const errorMessage = document.querySelector(".error1");

const snackPersonality = {
  //OBJECT: Holds possible quiz results
  results: {
    sweet: {
      name: `ice cream`,
      img: `./sweet.jpg`,
      class: `img-result img-result-sweets`,
      alt: `picture of ice cream.`,
      description: `ou live on the wild side and are often described as living a carefree lifestyle with few regrets. You love to stand out and feel special. A sweet tooth can also be linked to a strong willingness to help out as well as emotional vulnerability..`,
      counter: 0,
    },
    salt: {
      name: `potato chips`,
      img: `./salt.jpg`,
      class: `img-result img-result-salt`,
      alt: `picture of chips.`,
      description: `You go with the flow. Hirsch’s data reveals salt lovers have an “external locus of control,” meaning they believe a higher or outside force, not their own actions, determine their fate. You also crave small rewards and immediate gratification, thus making you a competitive and worthy`,
      counter: 0,
    },
  },
};

function scrollDown() {
  window.scrollBy(0, window.innerHeight);
}

// WHY CAN'T GET BOTH BUTTONS TO WORK?!!? BC QUERY SELECTOR?
function validateClick() {
  // IF ONE OF THE BUTTONS ARE NOT CLICKED, INNER TEXT CHANGED TO PLEASE CLICK!!!!
  if (!document.querySelector('input[name="afternoon-snack"]').checked) {
    errorMessage.innerText = "Please select an answer";
  } else {
    errorMessage.innerText = "";
    scrollDown();
    console.log("successful");
  }

  // IF BUTTONS ARE CLICKED, SCROLL DOWN TO NEXT QUESTION
  //   if (document.querySelector('input[name="afternoon-snack"]').checked) {
  //     console.log("HELLO");
  //     scrollDown();
  //   } else {
  //     console.log("PLEASE CHECK SOMETHING");
  //   }
}

function validateSClick() {
  if (document.querySelector('input[name="movie-snack"]').checked) {
    console.log("HELLO");
    scrollDown();
  } else {
    console.log("PLEASE CHECK SOMETHING");
  }
}

function printResults() {}

function showResults(e) {
  e.preventDefault();
  scrollDown();
  printResults();
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
  nextBtn.addEventListener("click", validateClick);
  nextBtn2.addEventListener("click", validateSClick);
  resultsBtn.addEventListener("click", showResults);
  restartBtn.addEventListener("click", restartQuiz);
}

startGame();
