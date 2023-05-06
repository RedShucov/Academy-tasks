// 05.05.23
// Программа на JS 'Стоимость фронтенда', которая:
// 1. Рассчитывает стоимость проекта.

// Условие:
// 1. Если проект срочный, то часы уменьшаются в два раза, а ставка за час повышается в 2.5 раз.
// 2. Eсли время проекта больше 150 часов, ставка в час уменьшается на 250 рублей.

// Входные данные:
// Время выполнения в часах - timeHours{number}
// Срочность выполнения проекта - urgency{boolean}

// Выходные данные:
// Стоимость проекта - projectCost{number}

// Сложность:
// Лёгкая.

/**
 * Функция, определяет, какой проект выгодней: срочный или обычный.
 * @param {number} timeHours - время в часах выполнения.
 * @param {boolean} isQuick - срочность выполнения.
 * @returns {number} - стоимость выполнения проекта.
 */
const getProjectCost = function (timeHours, isQuick) {
  let ratePerHour = 1500;

  if (isQuick) {
    timeHours /= 2;
    ratePerHour *= 2.5;
  }

  if (timeHours > 150) {
    ratePerHour -= 250;
  }

  const projectCost = timeHours * ratePerHour;

  return projectCost;
}
