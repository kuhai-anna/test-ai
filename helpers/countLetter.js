let letterCounts = {};

const countLetter = (char) => {
  const isLetter = /[a-zA-Z]/.test(char);

  if (!isLetter) {
    return;
  }

  const lowercaseLetter = char.toLowerCase();
  const isLetterExist = letterCounts[lowercaseLetter];

  if (isLetterExist) {
    letterCounts[lowercaseLetter] += 1;
  } else {
    letterCounts[lowercaseLetter] = 1;
  }
};

module.exports = { countLetter, letterCounts };
