const { getLetterCounts } = require("./countLetter");

const duplicateLetters = (firstLetter, secondLetter, maxLength = 200) => {
  let text = firstLetter + secondLetter;

  while (text.length < maxLength) {
    text += firstLetter + secondLetter;
  }

  return text;
};

const createText = (enteredLetter) => {
  const letterCounts = getLetterCounts();

  const maxVal = Math.max(...Object.values(letterCounts));

  let frequentLetterArr = Object.keys(letterCounts).filter(
    (key) => letterCounts[key] === maxVal
  );

  const randomIndex = Math.floor(Math.random() * frequentLetterArr.length);
  const randomFrequentLetter = frequentLetterArr[randomIndex];

  const text = duplicateLetters(enteredLetter, randomFrequentLetter, 20);

  console.log(
    "Generated text from the input letter and the most count letter: ",
    text
  );
};

module.exports = createText;
