const fs = require("node:fs");
const sortStatisticsAlphabetically = require("./helpers/sortStatsAlphabetically");
const sortStatisticsByCountDescending = require("./helpers/sortStatsByCountDescending");
const getTotalLetterNumber = require("./helpers/getTotalLetterNumber");
const getPercentageValues = require("./helpers/getPercentageValues");

const letterCounts = [];

const countLetter = (char) => {
  const isLetter = /[a-zA-Z]/.test(char);

  if (!isLetter) {
    return;
  }

  const lowercaseLetter = char.toLowerCase();

  // check the presence of a letter in the array
  const existingLetter = letterCounts.find(
    ({ letter }) => letter === lowercaseLetter
  );

  if (existingLetter) {
    existingLetter.count += 1;
  } else {
    letterCounts.push({ letter: lowercaseLetter, count: 1 });
  }
};

try {
  const data = fs.readFileSync(
    "/Users/annakuhai/Documents/test-ai/bigText.txt",
    "utf8"
  );

  for (let char of data) {
    countLetter(char);
  }
} catch (err) {
  console.error(err);
}

const totalLetterNumber = getTotalLetterNumber(letterCounts);
const statisticsInDescendingOrder =
  sortStatisticsByCountDescending(letterCounts);

console.log("Total number of letters", getTotalLetterNumber(letterCounts));
console.log(
  "In alphabetical order",
  sortStatisticsAlphabetically(letterCounts)
);
console.log(
  "In descending order",
  sortStatisticsByCountDescending(letterCounts)
);
console.log(
  "In percentage value",
  getPercentageValues(statisticsInDescendingOrder, totalLetterNumber)
);
