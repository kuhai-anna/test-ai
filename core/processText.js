const fs = require("node:fs");
const findLetterIndex = require("../helpers/findLetterIndex");
const { countLetter, resetLetterCounts } = require("./countLetter");
const displayResults = require("./displayResults");
const createText = require("./createText");

const TEXT_FILE_PATH = "./testText.txt";
// const TEXT_FILE_PATH = "./bigText.txt";
// const TEXT_FILE_PATH = "./smallText.txt";

const processText = (letter) => {
  resetLetterCounts();

  try {
    const data = fs.readFileSync(TEXT_FILE_PATH, "utf8");
    const enteredLetterIndex = findLetterIndex(letter, data);

    if (enteredLetterIndex === -1) {
      console.log(`There is no letter '${letter}' in the text`);
      return;
    }

    if (enteredLetterIndex === data.length - 1) {
      console.log(`Entered letter '${letter}' is the last letter in the text`);
      return;
    }

    for (let i = enteredLetterIndex; i < data.length; i += 1) {
      if (data[i].toLowerCase() === letter) {
        const nextIndex = i + 1;
        const actualNextIndex =
          data[nextIndex] === " " ? nextIndex + 1 : nextIndex;

        countLetter(data[actualNextIndex]);
      }
    }

    displayResults();
    createText(letter);
  } catch (err) {
    console.error(err);
  }
};

module.exports = processText;
