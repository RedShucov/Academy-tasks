// 08.05.23
// Программа на JS 'Начинающий дешифровщик', которая:
// 1. Программа выбирает три лучших прыжка.

// Условие:
// 1. Если среднее от лучших трёх прыжков больше квалификационного значения = true.
// 2. Если среднее от лучших трёх прыжков меньше квалификационного значения =  false.

// Входные данные:
// Квалификационное значение - qualificationDistance{number}
// Квалификация - attempts{Array}

// Выходные данные:
// Среднее значение трёх лучших прыжков - averageBest{number}
// Среднее значение трёх лучших прыжков - qualified{boolean}

// Сложность:
// Лёгкая.

let qualificationDistance = 200;
let attempts = [120, 150, 160, 201, 203, 180, 202];
let qualified = false;
let averageBest = 0;

const getSortedArrayAscending = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 1 + i; j < array.length; j++) {
      if (array[i] < array[j]) {
        const swap = array[i];
        array[i] = array[j];
        array[j] = swap;
      }
    }
  }
}

getSortedArrayAscending(attempts);

const getBestAverageValue = (array, jumpCount) => {
  let sumBest = 0;

  for (let i = 0; i < jumpCount; i++) {
    sumBest += array[i];
  }

  const averageBest = sumBest / jumpCount;

  return averageBest;
}

averageBest = getBestAverageValue(attempts, 3)

if (averageBest >= qualificationDistance) {
  qualified = true;
}
