// 23.06.23
// Программа на JS 'Список для чтения', которая:
// На основе одного массива с книгами создаст другой.

// Входные данные:
// Исходный массив - books{Array}

// Выходные данные:
// Новый массив - filteredBooks{Array}

// Сложность:
// Средняя.

const books = ['Улисс', 'Маугли', 'Сияние', 'Ревизор', 'Гамлет', 'Обломов', 'Дюймовочка', 'Шантарам', 'Вий', 'Сильмариллион', 'Оно'];

/**
 * Функция, принимает на вход массив и на основание его формирует новый массив.
 * @param {Array} array - Исходный массив.
 * @param {number} minNumber - Минимальное количество символов в элементе.
 * @param {number} maxNumber - Максимальное количесвто символов в элементе.
 * @returns {Array} Новый массив на основание исходного массива.
 */
const getNewArray = (array, minNumber, maxNumber) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element.length >= minNumber && element.length <= maxNumber) {
      newArray.push(element)
    }
  }

  return newArray;
}

const filteredBooks = getNewArray(books, 5, 7);
