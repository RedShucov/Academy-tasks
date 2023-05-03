// 03.05.23
// Программа на JS 'Конвертер валют', которая:
// 1. Конвертирует доллары и евро в рубли.

// Входные данные:
// Курс евро - euroRate{number}
// Курс доллара - dollarRate{number}
// Количество евро - euroAmount{number}
// Количество долларов - dollarAmount{number}

// Выходные данные:
// Конвертированное количество рублей - rublesAmount{number}

// Сложность:
// Лёгкая.

const euroRate = 50;
const dollarRate = 30;

let euroAmount = 250;
let dollarAmount = 500;

/**
 * Функция, конвертирует евро в рубли.
 * @param {number} euros - количество евро для конвертации.
 * @returns
 */
const getRublesFromEuros = function (euros) {
  const rublesForEuro = euros * euroRate;

  return rublesForEuro;
}

/**
 * Функция, конвертирует доллары в рубли.
 * @param {number} dollars - количество долларов для конвертации.
 * @returns
 */
const getRublesFromDollars = function (dollars) {
  const rublesForDollars = dollars * dollarRate;

  return rublesForDollars;
}

const rublesPerEuro = getRublesFromEuros(euroAmount);
const rublesPerDollar = getRublesFromDollars(dollarAmount);

const rublesAmount = rublesPerEuro + rublesPerDollar;
