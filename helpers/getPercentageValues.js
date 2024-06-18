const getPercentageValues = (arr, totalLetterNumber) => {
  return arr.map(({ letter, count }) => {
    const percentageValue = (count * 100) / totalLetterNumber;

    return { letter, count: `${percentageValue.toFixed(2)} %` };
  });
};

module.exports = getPercentageValues;
