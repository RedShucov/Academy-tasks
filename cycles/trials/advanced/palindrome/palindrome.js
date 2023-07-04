// 04.07.23
// Программа на JS 'Палиндром'
// Проверяет, является ли число палиндромом.

// Входные данные:
// Число для проверки - poly{number}
// Перевернутое число - ylop{number}

// Выходные данные:
// Результат проверки - isPalindrome{boolean}

// Сложность:
// Продвинутая.

/**
 * Функция, принимает на вход число и проверяет является ли оно палиндромом.
 * @param {number} poly - Число для проверки на палиндром.
 * @returns Результат проверки в виде булевого значения.
 */
const palindrome = (poly) => {
  let ylop = 0;
  let temp = poly;

  while (temp > 0) {
    const remainder = temp % 10;
    ylop = ylop * 10 + remainder;
    temp = Math.floor(temp / 10);
  }

  return poly === ylop;
};
