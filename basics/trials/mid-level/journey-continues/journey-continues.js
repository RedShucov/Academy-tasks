// 10.05.23
// Программа на JS 'Путешествие продолжается', которая:
// 1. Переводит мили в километры и рассчитывает время дороги в часах.

// Входные данные:
// Расстояние в милях - routeDistance{number}
// Средняя скорость транспорта в км/ч - averageSpeed{number}

// Выходные данные:
// Времени поездки в часах - routeTime{number}

// Сложность:
// Лёгкая.

const routeDistance = 78;
const averageSpeed = 80;

/**
 * Функция, переводит мили в мили в километры.
 * 1 миля равна = 1.6км.
 * @param {number} miles - количество миль.
 * @returns {number} километры.
 */
const getKilometersFromMiles = (miles) => Math.round(miles * 1.6);

const kilometers = getKilometersFromMiles(routeDistance);

/**
 * Функция, находит время в пути по формуле t = s / d;
 * @param {number} distance - расстояние в км.
 * @param {number} speed - скорость в км.
 * @returns {number} время в часах.
 */
const getTravelTime = (distance, speed) => Math.round(distance / speed);

const routeTime = getTravelTime(kilometers, averageSpeed);
