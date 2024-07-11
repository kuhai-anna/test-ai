const { resetLetterCounts } = require("./core/countLetter");
const processText = require("./core/processText");
const { conditionalPrompt, rl } = require("./helpers/conditionalPrompt");
const isValidLetter = require("./helpers/isValidLetter");

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
