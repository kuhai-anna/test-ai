const getTotalLetterNumber = (letterCounts) => {
  return Object.values(letterCounts).reduce((acc, count) => {
    return acc + count;
  }, 0);
};

module.exports = getTotalLetterNumber;
