// 04.05.23
// Программа на JS 'Умные весы', которая:
// 1. Даёт рекомендации в зависимости от веса.

// Условие:
// 1. Вес до 4 кг не включая это значение = Пора перекусить.
// 2. Вес от 4 кг включительно до 5.5 включительно = Вес в норме.
// 3. Вес от 5.5 кг = Пора на тренировку.

// Входные данные:
// Вес - weight{number}

// Выходные данные:
// Рекомендация - recommendation{string}

// Сложность:
// Лёгкая.

let weight = 5;
let recommendation;

if (weight < 4) {
  recommendation = 'Пора перекусить';
}

if (weight >= 4 && weight <= 5.5) {
  recommendation = 'Вес в норме';
}

if (weight > 5.5) {
  recommendation = 'Пора на тренировку';
}
