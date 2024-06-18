// 1. великий та маленький регістр літер - як однакова літера
// 2. не враховувати пробіли
// 3. не враховувати  розділові знаки
// 4. перебрати весь текст і порахувати кількість кожної літери, яка зустрічається в тексті

// створити масив, в який будемо записувати підрахунок
// перебираємо текст, якщо в масиві немає літери, яка дорівнює літері з тексту, додаємо літеру і записуємо у значення 1 (перший раз зустрілася літера)
// якщо літера вже є в масиві, то додаємо до значення +1

const fs = require("node:fs");

try {
  const data = fs.readFileSync(
    "/Users/annakuhai/Documents/test-ai/bigText.txt",
    "utf8"
  );

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

  for (let char of data) {
    countLetter(char);
  }

  const sortStatisticsAlphabetically = (arr) => {
    return arr.sort((firstItem, secondItem) => {
      return firstItem.letter.localeCompare(secondItem.letter);
    });
  };

  const sortStatisticsByCountDescending = (arr) => {
    return arr.sort((firstItem, secondItem) => {
      return secondItem.count - firstItem.count;
    });
  };

  const getTotalLetterNumber = (arr) => {
    return arr.reduce((acc, { count }) => {
      return acc + count;
    }, 0);
  };

  const totalLetterNumber = getTotalLetterNumber(letterCounts);

  const getPercentageValues = (arr) => {
    return arr.map(({ letter, count }) => {
      const percentageValue = (count * 100) / totalLetterNumber;

      return { letter, count: `${percentageValue.toFixed(2)} %` };
    });
  };

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
    getPercentageValues(statisticsInDescendingOrder)
  );
} catch (err) {
  console.error(err);
}
