// 09.07.23
// Программа на JS 'Задом наперёд', которая:
// Меняет массив так, чтобы его элементы шли в обратном порядке.

// Входные данные:
// Исходный массив - numbers{Array}

// Выходные данные:
// Перевернутый исходный массив - numbers{Array}

// Сложность:
// Продвинутая.

const numbers = [1, 3, 5, 7, 9, 11];

for (let i = 0; i < numbers.length / 2; i++) {
  const startIndex = i;
  const backIndex = numbers.length - (1 + i);

  const swap = numbers[startIndex];

  numbers[startIndex] = numbers[backIndex];

  numbers[backIndex] = swap;
}
