const { letterCounts } = require("./countLetter");
const getTotalLetterNumber = require("./getTotalLetterNumber");
const sortStatisticsAlphabetically = require("./sortStatsAlphabetically");
const sortStatisticsByCountDescending = require("./sortStatsByCountDescending");
const getPercentageValues = require("./getPercentageValues");

const displayResults = () => {
  const totalLetterNumber = getTotalLetterNumber(letterCounts);
  const statisticsInDescendingOrder =
    sortStatisticsByCountDescending(letterCounts);

  console.log(
    "Total letter count after the first occurrence of the entered letter:",
    totalLetterNumber
  );
  console.log(
    "In alphabetical order",
    sortStatisticsAlphabetically(letterCounts)
  );
  console.log("In descending order", statisticsInDescendingOrder);
  console.log(
    "In percentage value",
    getPercentageValues(statisticsInDescendingOrder, totalLetterNumber)
  );
};

module.exports = displayResults;
