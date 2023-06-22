// 22.06.23
// Программа на JS 'Собираемся в отпуск', которая:
// На основе одного массива c багажом создаст другой.

// Входные данные:
// Исходный массив - luggage{Array}
// Стартовый индекс - startIndex{number}
// Количесвто элементов - quantity{number}

// Выходные данные:
// Количество цифр в числе - chosenLuggage{Array}

// Сложность:
// Средняя.

const luggage = ['пакет', 'мяч', 'тапки', 'когтеточка', 'коробка', 'миска', 'мята'];

const getNewArray = (array, startIndex, quantity) => {
  const newArray = [];
  const lastIndex = startIndex + quantity;

  for (let i = startIndex; i < lastIndex; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

const chosenLuggage = getNewArray(luggage, 2, 3);
