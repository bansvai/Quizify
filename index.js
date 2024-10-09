const question = require("readline-sync").question;
let score = 0;
const name = question("Your Name - ");

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
};

const leaderboard = {
  data: [
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
    while (!isValidAnswer(userAnswer)) {
      userAnswer = question(
        "No such option. Please choose a valid option - "
      ).toLowerCase();
    }
    validateAnswer(userAnswer, database.questions[questionIndex].answer);
  }
}

function isValidAnswer(userAnswer) {
  return ["a", "b", "c", "d"].includes(userAnswer);
}

function validateAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log("Correct Answer");
    score++;
  } else {
    console.log(`Incorrect Answer. The correct answer is ${correctAnswer}`);
  }
}

function updateLeaderBoard() {
  leaderboard.data.push({ name, score });
  const sortedLeaderBoard = leaderboard.data.sort((a, b) => b.score - a.score);
  console.log("LeaderBoard\n\nName\tScore");
  for (let leader of sortedLeaderBoard) {
    console.log(`${leader.name}\t ${leader.score}`);
  }
}

Quiz(database);
console.log(`\nYour score is ${score}\n`);
updateLeaderBoard();
