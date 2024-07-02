const findLetterIndex = (enteredLetter, data) => {
  const lowerEnteredLetter = enteredLetter.toLowerCase();

  for (let i = 0; i < data.length; i += 1) {
    if (data[i].toLowerCase() === lowerEnteredLetter) {
      return i;
    }
  }

  return -1;
};

module.exports = findLetterIndex;
