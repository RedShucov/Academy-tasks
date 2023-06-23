// 22.06.23
// Программа на JS 'Собираемся в отпуск', которая:
// На основе одного массива c багажом создаст другой.

// Входные данные:
// Исходный массив - luggage{Array}

// Выходные данные:
// Новый массив - chosenLuggage{Array}

// Сложность:
// Средняя.

const luggage = ['пакет', 'мяч', 'тапки', 'когтеточка', 'коробка', 'миска', 'мята'];

/**
 * Функция, принимает на вход массив и на основание его формирует новый массив.
 * @param {Array} array - Исходный массив.
 * @param {number} startIndex - Стартовый индекс для добавления элементов в новый массив.
 * @param {number} quantity - Количесвто элементов нового массива.
 * @returns {Array} Новый массив на основание исходного массива.
 */
const getNewArray = (array, startIndex, quantity) => {
  const newArray = [];
  const lastIndex = startIndex + quantity;

  for (let i = startIndex; i < lastIndex; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

const chosenLuggage = getNewArray(luggage, 2, 3);
