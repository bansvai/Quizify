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
  }
}

Quiz(database);
