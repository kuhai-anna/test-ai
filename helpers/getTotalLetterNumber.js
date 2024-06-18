const getTotalLetterNumber = (arr) => {
  return arr.reduce((acc, { count }) => {
    return acc + count;
  }, 0);
};

module.exports = getTotalLetterNumber;
