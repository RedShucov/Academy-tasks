// 03.05.23
// Программа на JS 'Быстрее всех', которая:
// 1. Считает сколько времени займет полёт.

// Входные данные:
// Расстояние полёта в километрах - flightDistance{number}
// Средняя скорость самолёта в км/ч - averageSpeed{number}

// Выходные данные:
// Время полёта в часах - flightTime{number}

// Сложность:
// Лёгкая.

let flightDistance = 7260;
let averageSpeed = 600;

/**
 * Функция, высчитывает время полёта.
 * @param {number} distance - дистанция полёта.
 * @param {number} speed - время полёта.
 * @returns {number} - время полёта.
 */
const getFlightTime = (distance, speed) => Math.round(distance / speed);

const flightTime = getFlightTime(flightDistance, averageSpeed);
