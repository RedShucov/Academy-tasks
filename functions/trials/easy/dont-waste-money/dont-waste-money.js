// 06.05.23
// Программа на JS 'Не трать деньги понапрасну', которая:
// 1. Определяет какой проект более выгодный, срочный или нет.

// Входные данные:
// Время выполнения в часах - timeHours{number}
// Прибыль сайта сделанного в срочном режиме - profit{number}

// Выходные данные:
// Строка с результатом анализа, какой проект выгоднее  - string{number}

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

/**
 * Функция, определяет, какой проект выгодней: срочный или обычный.
 * @param {number} timeHours - время на проект в часах.
 * @param {string} profit - прибыль сайта, сделанного в срочном режиме.
 * @returns возвращает строку с информацией о более выгодном проекте.
 */
const getProfitableProject = function (timeHours, profit) {
  const priceQuickProject = getProjectCost(timeHours, true)
  const priceRegularProject = getProjectCost(timeHours, false)

  const profitDifference = priceQuickProject - profit;

  if (profitDifference > priceRegularProject) {
    return `Выгодней обычный проект. Потратишь на него ${priceRegularProject}`;
  }

  return `Выгодней срочный проект. Потратишь на него ${profitDifference}`;
}
