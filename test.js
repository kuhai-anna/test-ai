const fs = require("node:fs");
let { countLetter, resetLetterCounts } = require("./helpers/countLetter");
const findLetterIndex = require("./helpers/findLetterIndex");
const displayResults = require("./helpers/displayResults");
const { conditionalPrompt, rl } = require("./helpers/conditionalPrompt");
const isValidLetter = require("./helpers/isValidLetter");

// const TEXT_FILE_PATH = "./testText.txt";
// const TEXT_FILE_PATH = "./bigText.txt";
const TEXT_FILE_PATH = "./smallText.txt";

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

const askForLetter = () => {
  resetLetterCounts();

  rl.question(`Enter a letter: `, (letter) => {
    const isLetter = isValidLetter(letter);

    if (!isLetter) {
      conditionalPrompt(
        `Entered character '${letter}' isn't a letter. Try again? (y/n) `,
        askForLetter,
        () => rl.close()
      );
    } else {
      processText(letter);
      conditionalPrompt(
        "Would you like to enter another letter? (y/n) ",
        askForLetter,
        () => rl.close()
      );
    }
  });
};

askForLetter();
