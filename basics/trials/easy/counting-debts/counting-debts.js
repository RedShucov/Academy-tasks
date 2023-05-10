// 03.05.23
// Программа на JS 'Конвертер валют', которая:
// 1. Считает количество долга.

// Условие:
// Нужно вернуть в два раза больше от занимаемой суммы.

// Входные данные:
// Необходимая сумма - travelCost{number}
// Доступная сумма - balance{number}

// Выходные данные:
// Сумма долга - debtAmount{number}

// Сложность:
// Лёгкая.

let travelCost = 150000;
let balance = 100000;

/**
 * Функция, подсчитывает недостающую сумму.
 * @param {number} requiredAmount - необходимая сумма.
 * @param {number} availableAmount - текующая сумма.
 * @returns {number} возвращает недостающую сумму.
 */
const getMissingAmount = (requiredAmount, availableAmount) => requiredAmount - availableAmount;

const missingAmount = getMissingAmount(travelCost, balance);

/**
 * Функция, подсчитывает сумма долга.
 * @param {number} missingAmount - недостающая сумма.
 * @param {number} debtMultiplier - множитель долга.
 * @returns {number} возвращает сумму долга.
 */
const getDebtAmount = (missingAmount, debtMultiplier) => missingAmount * debtMultiplier;

const debtAmount = getDebtAmount(missingAmount, 2);
