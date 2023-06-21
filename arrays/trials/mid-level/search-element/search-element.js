// 21.06.23
// Программа на JS 'В поисках элемента', которая:
// Находит последний индекс элемента в массиве.

// Входные данные:
// Массив чисел - numbers{number}
// Число, последний индекс которого нужно найти - number{number}

// Выходные данные:
// Последний индекс числа в массиве - lastIndex{number}

// Сложность:
// Средняя.

const numbers = [2, 4, 7, 4, 7, 2];
const number = 4;

/**
 * Функция, принимает массив и находит последний индекс переданного элемента в массиве.
 * @param {Array} array - Массив для поиска последнего индекса переданного элемента. 
 * @param {any} searchElement - Элемент для поиска послденего индекса.
 * @returns {number} номер последнего индекса переданного элемента.
 */
const getLastIndex = (array, searchElement) => {
  let lastIndex = -1;

  array.forEach((arrayElement, index) => {
    if (arrayElement === searchElement) {
      lastIndex = index;
    }
  });

  return lastIndex;
}

const lastIndex = getLastIndex(numbers, number);
