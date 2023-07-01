// 01.07.23
// Программа на JS 'Кубики куются на кухне:
// Рассчитывает КБЖУ.

// Условие:
// Формула увроня метаболизма: 88.362 + (13.397 * вес в кг) + (4.799 * длина в см) - (5.677 * возраст в годах).

// Входные данные:
// Вес - age{number}
// Рост - pulseAtRest{number}
// Возраст - intensity{number}
// Коэффициент двигательной активности - activityRate{number}

// Выходные данные:
// Протеины - proteins{number}
// Жиры - fats{number}
// Углеводы - carbohydrates{number}
// Норма калорий - calorieRate{number}

// Сложность:
// Продвинутая.

const weight = 75;
const length = 183;
const age = 30;
const activityRate = 1.9;

/**
 * Функция, рассчитывает уровень метаболизма.
 * @param {number} weight - Вес.
 * @param {number} length - Рост.
 * @param {number} age - Возраст.
 * @returns Уровень метаболизма.
 */
const getMetabolicRate = (weight, length, age) => {
  const metabolicRate = (88.362 + (13.397 * weight) + (4.799 * length) - (5.677 * age));

  return metabolicRate;
};

/**
 * Функция, рассчитывает норму калорий.
 * @param {number} metabolicRate - Уровень метаболизма.
 * @param {number} activityRate - Коэффициент двигательной активности.
 * @returns Норма калорий.
 */
const getCaloriesRate = (metabolicRate, activityRate) => {
  const calorieRate = metabolicRate * activityRate;

  return Math.round(calorieRate);
};

/**
 * Функция, для получения процента от числа.
 * @param {number} number - Число.
 * @param {number} percent - Процент.
 * @returns Полученный процент от числа.
 */
const getPercent = (number, percent) => Math.round(number * (percent / 100));

const metabolicRate = getMetabolicRate(weight, length, age);

const calorieRate = getCaloriesRate(metabolicRate, activityRate);

const proteins = getPercent(calorieRate, 40);
const fats = getPercent(calorieRate, 25);
const carbohydrates = getPercent(calorieRate, 35);
