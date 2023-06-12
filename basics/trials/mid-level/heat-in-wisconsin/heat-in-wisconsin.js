// 11.06.23
// Программа на JS ' Жара в Висконсине', которая:
// 1. Переводить градусы Фаренгейта в температуру по Цельсию.

// Входные данные:
// Температура по фаренгейту - fahrenheitTemperature{number}

// Выходные данные:
// Температура по цельсию - celsiusTemperature{number}

// Сложность:
// Средняя.

const fahrenheitTemperature = 77;

/**
 * Функция, переводит температуру из фаренгейтов в цельсии.
 * @param {number} fahrenheit - температура в фаренгейтах.
 * @returns {number} celsius температура в цельсиях.
 */
const getFahrenheitFromCelsius = (fahrenheit) => 5 / 9 * (fahrenheit - 32);

const celsiusTemperature = getFahrenheitFromCelsius(fahrenheitTemperature);
