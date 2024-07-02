const fs = require("node:fs");
const readline = require("node:readline");
let { countLetter, letterCounts } = require("./helpers/countLetter");
const findLetterIndex = require("./helpers/findLetterIndex");
const displayResults = require("./helpers/displayResults");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const processText = (letter) => {
  try {
    const data = fs.readFileSync("./bigText.txt", "utf8");
    // const data = fs.readFileSync("./smallText.txt", "utf8");

    const enteredLetterIndex = findLetterIndex(letter, data);

    if (enteredLetterIndex !== -1) {
      const nextLetterIndex = enteredLetterIndex + 1;

      for (let i = nextLetterIndex; i < data.length; i += 1) {
        countLetter(data[i]);
      }

      displayResults();
    } else {
      console.log(`There is no letter '${enteredLetter}' in the text`);
    }
  } catch (err) {
    console.error(err);
  }
};

const askForLetter = () => {
  letterCounts = {};

  rl.question(`Enter a letter: `, (letter) => {
    processText(letter);

    rl.question("Would you like to enter another letter? (y/n) ", (answer) => {
      if (answer === "y") {
        askForLetter();
      } else {
        rl.close();
      }
    });
  });
};

askForLetter();
