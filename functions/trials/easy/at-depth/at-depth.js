// 11.05.23
// Программа на JS 'На глубине', которая:
// 1. Cчитает давление на глубине и возвращает это значение из функции..

// Условие:
// 1. Формула расчёта:
// давление = плотность жидкости * ускорение свободного падения * глубина.
// 2. Ускорение свободного падения = 9.8.

// Входные данные:
// Плотность жидкости - liquidDensity{number}
// Глубина - depth{number}

// Выходные данные:
// Давление - pressure{number}

// Сложность:
// Лёгкая.

const FREE_FALL_ACCELERATION = 9.8;

/**
 * Функция, считает давление на глубине.
 * @param {number} liquidDensity - плотность жидкости.
 * @param {number} depth - глубина.
 * @returns {number} давление на глубине.
 */
const calculatePressure = (liquidDensity, depth) => {
  const pressure = liquidDensity * FREE_FALL_ACCELERATION * depth;
  return Math.round(pressure);
}

calculatePressure(1000, 5);
