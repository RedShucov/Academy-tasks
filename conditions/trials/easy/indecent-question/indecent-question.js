// 04.05.23
// Программа на JS 'Неприличный вопрос', которая:
// 1. Определяет возрастную группу по возрасту.

// Условие:
// 1. До года = Котята.
// 2. От 1 до 3 лет включительно = Молодые коты.
// 3. От 3 лет до 7 лет включитель = Коты средних лет.
// 4. От 7 и больше - Почтенные коты.

// Входные данные:
// Возраст - age{number}

// Выходные данные:
// Возрастная группа - ageGroup{string}

// Сложность:
// Лёгкая.

let age = 5;
let ageGroup;

if (age <= 1) {
  ageGroup = 'Котята';
  console.log('Котята');
}

if (age > 1 && age <= 3) {
  ageGroup = 'Молодые коты';
  console.log('Молодые коты');
}

if (age > 3 && age <= 7) {
  ageGroup = 'Коты средних лет';
  console.log('Коты средних лет');
}

if (age > 7) {
  ageGroup = 'Почтенные коты';
  console.log('Почтенные коты');
}
