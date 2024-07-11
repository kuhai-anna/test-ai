const fs = require("node:fs");
const { countLetter, resetLetterCounts } = require("./countLetter");
const findLetterIndex = require("../helpers/findLetterIndex");
const displayResults = require("./displayResults");

const TEXT_FILE_PATH = "./testText.txt";
// const TEXT_FILE_PATH = "./bigText.txt";
// const TEXT_FILE_PATH = "./smallText.txt";

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
  } catch (err) {
    console.error(err);
  }
};

module.exports = processText;
