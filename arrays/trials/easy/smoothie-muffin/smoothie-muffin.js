// 15.05.23
// Программа на JS 'Смузи, маффин, гироскутер', которая:
// 1. Формирует заказ в виде строки.

// Условие:
// 1. Посетители выбирают пункты в электронном меню, где нумерация начинается с единицы, а не с нуля.

// Входные данные:
// Массив с вариантами основы - liquids{Array}
// Массив с фруктами - fruits{Array}
// Массив с зеленью - greens{Array}

// Выбор посетителя записан в виде чисел в переменные:
// Выбранная основа - chosenLiquid{number}
// Выбранный фрукт - chosenFruit{number}
// Выбранная зелень - chosenGreen{number}

// Выходные данные:
// Строка с заказом посетителя - order{string}

// Сложность:
// Лёгкая.

const LIQUIDS = ['вода', 'молоко', 'сок', 'чай', 'йогурт'];
const FRUITS = ['киви', 'банан', 'персик', 'манго', 'груша', 'ананас'];
const GREENS = ['мята', 'шпинат', 'руккола', 'петрушка', 'базилик'];

const chosenLiquid = 2;
const chosenFruit = 2;
const chosenGreen = 1;

const createOrder = (liquid, fruit, green) => {
  return `Основа — ${LIQUIDS[liquid - 1]}, фрукт — ${FRUITS[fruit - 1]}, зелень — ${GREENS[green - 1]}`
}

const order = createOrder(chosenLiquid, chosenFruit, chosenGreen);
