const question = require("readline-sync").question;
const kuler = require("kuler");
let score = 0;
const name = question("Your Name - ");

console.log(kuler(`Hello ${name}, Welcome to Quizify!`, "#a3e635"));

// Creating Database
const database = {
  questions: [
    {
      question:
        "let a = {}, b = {};\n    console.log(a == b);\n    console.log(a === b);",
      options: {
        a: "true, true",
        b: "true, false",
        c: "false, true",
        d: "false, false",
      },
      answer: "d",
    },
    {
      question: "Object.assign(targer, source) creates which type of copy?",
      options: {
        a: "Deep copy",
        b: "Shallow copy",
        c: "Nested copy",
        d: "None of these",
      },
      answer: "b",
    },
    {
      question: "Is method chaining possible with forEach?",
      options: {
        a: "Yes",
        b: "No",
        c: "Yes in certain conditions",
        d: "None of these",
      },
      answer: "b",
    },
  ],
  leaderboard: [
    {
      name: "Kajal",
      score: 3,
    },
    {
      name: "Sandhya",
      score: 1,
    },
    {
      name: "Tanmay",
      score: 2,
    },
  ],
};

/**
 * Simulates the quiz game, asking questions and validating answers.
 *
 * @param {Object} database - The database object containing quiz questions and leaderboard.
 */
function Quiz(database) {
  for (
    let questionIndex = 0;
    questionIndex < database.questions.length;
    questionIndex++
  ) {
    console.log(
      `\nQ${questionIndex + 1}) ${database.questions[questionIndex].question}\n`
    );
    for (let optionKey in database.questions[questionIndex].options) {
      console.log(
        `${optionKey}. ${database.questions[questionIndex].options[optionKey]}`
      );
    }

    let userAnswer = question("Choose an option - ").toLowerCase();

    // Ensures user gives a valid input
    while (!isValidAnswer(userAnswer)) {
      userAnswer = question(
        kuler("No such option. Please choose a valid option - ", "#dc2626")
      ).toLowerCase();
    }

    // Validates the user's answer
    validateAnswer(userAnswer, database.questions[questionIndex].answer);
  }
}

/**
 * Checks if the user's answer is valid (one of 'a', 'b', 'c', 'd').
 *
 * @param {string} userAnswer - The answer provided by the user.
 * @return {boolean} True if the answer is valid, false otherwise.
 */
function isValidAnswer(userAnswer) {
  return ["a", "b", "c", "d"].includes(userAnswer);
}

/**
 * Validates the user's answer and provides feedback on whether the answer was correct or not.
 *
 * @param {string} userAnswer - The answer provided by the user.
 * @param {string} correctAnswer - The correct answer for the current question.
 */
function validateAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log(kuler("Correct Answer", "#65a30d"));
    score++;
  } else {
    console.log(kuler("Incorrect Answer", "#b91c1c"));
    console.log(kuler(`The correct answer is ${correctAnswer}`, "#3f6212"));
  }
}

/**
 * Updates the leaderboard with the new user's score and displays the leaderboard in sorted order.
 */
function updateLeaderBoard() {
  // Adds new user and their score to the leaderboard
  database.leaderboard.push({ name, score });

  // Sorts the leaderboard in descending order based on score
  const sortedLeaderBoard = database.leaderboard.sort(
    (a, b) => b.score - a.score
  );

  // Display leaderboard
  console.log("LeaderBoard 👑\n\nName\tScore");
  for (let leader of sortedLeaderBoard) {
    console.log(`${leader.name}\t ${leader.score}`);
  }
}

// Start the Quiz
Quiz(database);

// Display the user's score
console.log(kuler(`\nYour score is ${score}\n`, "#9333ea"));

// Update and display the leaderboard
updateLeaderBoard();
