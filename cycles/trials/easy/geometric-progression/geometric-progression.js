// 13.05.23
// Программа на JS 'Геометрическая прогрессия', которая:
// 1. Последовательно выводит в консоль числа в геометрической прогрессии.

// Входные данные:
// Стартовое значение вывода чисел - startNumber{number}
// Количество чисел - quantity{number}
// Множитель для чисел - multiplier{number}

// Сложность:
// Лёгкая.

let startNumber = 3;
let multiplier = 3;
let quantity = 6;

for (let i = 1; i <= quantity; i++) {
  console.log(startNumber);
  startNumber *= multiplier;
}
