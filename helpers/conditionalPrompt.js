const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const conditionalPrompt = (question, onYes, onNo) => {
  rl.question(question, (answer) => {
    switch (answer) {
      case "y":
        onYes();
        break;

      case "n":
        onNo();
        break;

      default:
        conditionalPrompt(
          "Invalid input. Please enter 'y' or 'n': ",
          onYes,
          onNo
        );
        break;
    }
  });
};

module.exports = { conditionalPrompt, rl };
