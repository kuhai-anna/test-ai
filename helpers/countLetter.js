let letterCounts = [];

const countLetter = (char) => {
  const isLetter = /[a-zA-Z]/.test(char);

  if (!isLetter) {
    return;
  }

  const lowercaseLetter = char.toLowerCase();

  // check the presence of a letter in the array
  const existingLetter = letterCounts.find(
    ({ letter }) => letter === lowercaseLetter
  );

  if (existingLetter) {
    existingLetter.count += 1;
  } else {
    letterCounts.push({ letter: lowercaseLetter, count: 1 });
  }
};

module.exports = { countLetter, letterCounts };
