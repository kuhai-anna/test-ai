const sortStatisticsByCountDescending = (arr) => {
  return arr.sort((firstItem, secondItem) => {
    return secondItem.count - firstItem.count;
  });
};

module.exports = sortStatisticsByCountDescending;
