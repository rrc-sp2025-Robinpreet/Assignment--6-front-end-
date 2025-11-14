/*
Name - Robinpreet Kaur
Date - 13-11-2025
*/


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("trivia-form");
  const questionContainer = document.getElementById("question-container");
  const newPlayerButton = document.getElementById("new-player");
  const scoreTableBody = document.querySelector("#score-table tbody");
  const usernameInput = document.getElementById("username");

  // Initialize the game
  displayQuestions();

  // Fetch questions from API
  async function fetchQuestions() {
    showLoading(true);
    try {
      const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      const data = await response.json();
      showLoading(false);
      return data.results;
    } catch (error) {
      console.error("Failed to fetch data:", error.message);
      showLoading(false);
    }
  }

  // Show or hide loading skeleton
  function showLoading(isLoading) {
    document.getElementById("loading-container").classList = isLoading ? "" : "hidden";
    document.getElementById("question-container").classList = isLoading ? "hidden" : "";
  }

  // Display fetched trivia questions
  async function displayQuestions() {
    const questions = await fetchQuestions();
    questionContainer.innerHTML = "";
    questions.forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");
      questionDiv.innerHTML = `
        <p>${q.question}</p>
        ${createAnswerOptions(q.correct_answer, q.incorrect_answers, index)}
      `;
      questionContainer.appendChild(questionDiv);
    });
  }

  // Create radio options for each question
  function createAnswerOptions(correct, incorrects, index) {
    const allAnswers = [correct, ...incorrects].sort(() => Math.random() - 0.5);
    return allAnswers
      .map(
        (a) => `
        <label>
          <input type="radio" name="answer${index}" value="${a}" ${
          a === correct ? 'data-correct="true"' : ""
        }>
          ${a}
        </label><br>`
      )
      .join("");
  }

  // Calculate and display score
  function calculateScore() {
    let score = 0;
    const answers = document.querySelectorAll("input[type='radio']:checked");
    answers.forEach((ans) => {
      if (ans.dataset.correct === "true") score++;
    });
    return score;
  }

  // Display saved scores
  function displayScores() {
    const scores = JSON.parse(localStorage.getItem("triviaScores")) || [];
    scoreTableBody.innerHTML = "";
    scores.forEach((entry) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${entry.name}</td><td>${entry.score}</td>`;
      scoreTableBody.appendChild(row);
    });
  }

  // Handle form submit (end game)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = usernameInput.value.trim();
    if (!name) return alert("Please enter your name before submitting!");
    const score = calculateScore();
    saveScore(name, score);
    alert(`Well done, ${name}! Your score is ${score}/10`);
    newPlayerButton.classList.remove("hidden");
  });
