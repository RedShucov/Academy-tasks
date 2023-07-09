// 08.07.23
// Программа на JS 'Уникальные элементы', которая:
// Создаёт новый массив уникальных значений, взятых из исходного массива.

// Входные данные:
// Исходный массив чисел - numbers{Array}

// Выходные данные:
// Массив уникальных чисел - uniqueNumbers{Array}

// Сложность:
// Продвинутая.

const numbers = [89, 17, 156, 89, 156, 156, 89, 6, 89, 89, 30];

const getUniqueElements = (array) => {
  const uniqueElements = [];

  for (let i = 0; i < array.length; i++) {
    let count = 0;

    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++
      }
    }

    if (count === 1) {
      uniqueElements.push(array[i]);
    }
  }

  return uniqueElements;
}

const uniqueNumbers = getUniqueElements(numbers);
