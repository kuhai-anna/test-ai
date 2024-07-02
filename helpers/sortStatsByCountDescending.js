const sortStatisticsByCountDescending = (letterCounts) => {
  return Object.entries(letterCounts)
    .sort(([, firstItem], [, secondItem]) => secondItem - firstItem)
    .reduce((sortedObj, [letter, count]) => {
      sortedObj[letter] = count;

      return sortedObj;
    }, {});
};

module.exports = sortStatisticsByCountDescending;
