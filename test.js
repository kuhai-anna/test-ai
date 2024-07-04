// ввести літеру
// знайти найпопулярнішу літеру, після введененої
// скласти текст до 200 символів з введеної літери та найбільш популярної
// якщо є декілька однаково популярних літер, вибрати будь-яку з них
// якщо після введеної літери немає більше літер - закінчити програму
// згенерований текст не повинен перевищувати 200 символів

const fs = require("node:fs");
const readline = require("node:readline");
let { countLetter, resetLetterCounts } = require("./helpers/countLetter");
const findLetterIndex = require("./helpers/findLetterIndex");
const displayResults = require("./helpers/displayResults");
const createText = require("./helpers/createText");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const processText = (letter) => {
  resetLetterCounts();

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
      createText(letter);
    } else {
      console.log(`There is no letter '${letter}' in the text`);
    }
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
