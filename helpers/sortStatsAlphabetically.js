const sortStatisticsAlphabetically = (arr) => {
  return arr.sort((firstItem, secondItem) => {
    return firstItem.letter.localeCompare(secondItem.letter);
  });
};

module.exports = sortStatisticsAlphabetically;
