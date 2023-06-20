// 20.06.23
// Программа на JS 'Сколько цифр?', которая:
// Определяет сколько цифр в одном целом числе.

// Входные данные:
// Исходное число - number{number}

// Выходные данные:
// Количество цифр в числе - quantity{number}

// Сложность:
// Средняя.

/**
 * Функция, принимает на вход число и возращает количество цифр которое оно содержет.
 * @param {number} number - Число для подсчета цифр.
 * @returns Количесвто цифр в числе.
 */
const getQuantityNumber = (number) => {
  let quantity = 0;

  while (number >= 1) {
    quantity++
    number /= 10;
  }

  return quantity;
};

const quantity = getQuantityNumber(1234567);
