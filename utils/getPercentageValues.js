const getPercentageValues = (letterCounts, totalLetterNumber) => {
  return Object.keys(letterCounts).reduce((sortedObj, letter) => {
    const count = letterCounts[letter];
    const percentageValue = (count * 100) / totalLetterNumber;

    sortedObj[letter] = `${percentageValue.toFixed(2)} %`;

    return sortedObj;
  }, {});
};

module.exports = getPercentageValues;
