// 04.05.23
// Программа на JS 'Бешеная сушка', которая:
// 1. Считает необходимое количество дней для достижения желаемого веса.

// Условие:
// 1. В день -5% от текущего веса.

// Входные данные:
// Исходный вес в граммах - initialWeight{number}
// Желанный вес в граммах - targetWeight{number}

// Выходные данные:
// Количество дней - days{number}

// Сложность:
// Лёгкая.

let initialWeight = 6000; // Исходный вес в граммах
let targetWeight = 5000; // Желанный вес в граммах
let weightLossPerDay = initialWeight / 100 * 5;
let days = 0;

while (initialWeight > targetWeight) {
  initialWeight -= weightLossPerDay;
  weightLossPerDay = initialWeight / 100 * 5;
  days++;
}
