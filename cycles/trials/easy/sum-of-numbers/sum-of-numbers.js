// 04.05.23
// Программа на JS 'Сумма чисел', которая:
// 1. Вычисляет сумму чисел от 1 до n.

// Входные данные:
// Число, от которого нужно складывать числа - initialNumber{number}
// Число, до которого нужно складывать числа - finiteNumber{number}

// Выходные данные:
// Сумма всех чисел  - sum{number}

// Сложность:
// Лёгкая.

/**
 * Функция, вычисляет сумму чисел от x до n.
 * @param {number} initialNumber - начальное число.
 * @param {number} finiteNumber - конечное число.
 * @returns {number} сумма чисел.
 */
const getSumNumbers = function (initialNumber, finiteNumber) {
  let sum = 0;

  for (let i = initialNumber; i <= finiteNumber; i++) {
    sum += i;
  }

  return sum;
}

const sum = getSumNumbers(0, 10);
