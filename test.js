const fs = require("node:fs");
const readline = require("node:readline");
let { countLetter, resetLetterCounts } = require("./helpers/countLetter");
const findLetterIndex = require("./helpers/findLetterIndex");
const displayResults = require("./helpers/displayResults");
const createText = require("./helpers/createText");

// const TEXT_FILE_PATH = "./testText.txt";
// const TEXT_FILE_PATH = "./bigText.txt"
const TEXT_FILE_PATH = "./smallText.txt";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const processText = (letter) => {
  resetLetterCounts();

  try {
    const data = fs.readFileSync(TEXT_FILE_PATH, "utf8");
    const enteredLetterIndex = findLetterIndex(letter, data);
    const nextLetterIndex = enteredLetterIndex + 1;

    if (enteredLetterIndex === -1) {
      console.log(`There is no letter '${letter}' in the text`);
      return;
    }

    if (nextLetterIndex === data.length) {
      console.log(`Entered letter '${letter}' is the last letter in the text`);
      return;
    }

    for (let i = nextLetterIndex; i < data.length; i += 1) {
      countLetter(data[i]);
    }

    displayResults();
    createText(letter);
  } catch (err) {
    console.error(err);
  }
};

const askForLetter = () => {
  resetLetterCounts();

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
