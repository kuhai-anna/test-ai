const sortStatisticsAlphabetically = (letterCounts) => {
  return Object.keys(letterCounts)
    .sort((firstItem, secondItem) => firstItem.localeCompare(secondItem))
    .reduce((sortedObj, letter) => {
      sortedObj[letter] = letterCounts[letter];

      return sortedObj;
    }, {});
};

module.exports = sortStatisticsAlphabetically;
