const quizForm = document.querySelector(".quiz-form");

const submitBtn = document.querySelector("#submit-btn");

const outputEl = document.querySelector(".output");

const correctAnswers = ["90°", "right angled"];

function calculateScore(e) {
  e.preventDefault();
  const formResults = new FormData(quizForm);

  let score = 0;
  let index = 0;

  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score++;
    }
    index++;
  }

  outputEl.innerText = `Your score is ${score}`;
}

submitBtn.addEventListener("click", calculateScore);
