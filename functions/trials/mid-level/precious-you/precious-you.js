// 26.06.23
// Программа на JS 'Как ты мне дорог', которая:
// Вычисляет ежемесячные затраты компании на сотрудника из «чистой» зарплаты работника..

// Входные данные:
// Чистая зарплата сотрудника - netSalary{number}
// НДФЛ в процентах - incomeTax{number}
// Общий размер взносов в процентах - contributions{number}

// Выходные данные:
// Общие затраты компании на сотрудника - costs{number}

// Сложность:
// Средняя.

const incomeTax = 13;
const contributions = 30;

/**
 * Функция, считает ежемесячные затраты на сотрудника учитвая НДФЛ и другие налоговые сборы.
 * @param {number} netSalary - Чистая зарплата сотрудника.
 * @returns Затраты на сотрудника.
 */
const calculateExpenses = (netSalary) => {
  const grossSalary = netSalary / (1 - incomeTax / 100);

  const taxContributions = grossSalary / 100 * contributions;

  const costs = grossSalary + taxContributions;

  return Math.round(costs);
}

const monthlyCosts = calculateExpenses(87000);
