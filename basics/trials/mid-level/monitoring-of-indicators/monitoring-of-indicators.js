// 16.06.23
// Программа на JS 'Контроль показателей — ключ к победе!', которая:
// 1. Считает ИМТ и процент жира в организме..

// Входные данные:
// Рост - length{number}
// Общая масса - weight{number}
// Масса жировой ткани - fahrenheitTemperature{number}

// Выходные данные:
// ИМТ - bodyMassIndex{number}
// Процент жира - fatPercent{number}

// Сложность:
// Средняя.

const length = 0.55;
const weight = 5;
const fatMass = 0.8;

/**
 * Функция, высчитывает индекс массы тела.
 * @param {number} weight - Общая масса.
 * @param {number} length - Рост.
 * @returns {number} индекс массы тела.
 */
const getBodyMassIndex = (weight, length) => Math.round(weight / length ** 2);

/**
 * Функция, высчитывает процент жировой массы.
 * @param {number} weight - Общая масса.
 * @param {number} fatMass - Жировая масса. 
 * @returns {number} процент жировой массы.
 */
const getFatPercent = (weight, fatMass) => Math.round((fatMass / weight) * 100);

const bodyMassIndex = getBodyMassIndex(weight, length);
const fatPercent = getFatPercent(weight, fatMass);
