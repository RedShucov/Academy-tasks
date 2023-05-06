// 05.05.23
// Программа на JS 'От зарплаты до зарплаты', которая:
// 1. Вычитывает налог из зарплаты и возвращает её без налога.

// Условие:
// 1. Если зарплата больше 100000, налог =  45%.
// 2. Если зарплата меньше 100000, налог =  35%.

// Входные данные:
// Зарплата до вычета - grossSalary{number}

// Выходные данные:
// Зарплата после вычета  - netSalary{number}

// Сложность:
// Лёгкая.

/**
 * Функция, высчитывает из «грязной» зарплаты налоги возвращает «чистую» зарплату.
 * @param {number} grossSalary - зарплата до вычета налогов.
 * @returns {number} зарплата после вычета налогов.
 */
const getSalaryWithoutTax = function (grossSalary) {
  const taxPercent = (grossSalary >= 100000) ? 0.45 : 0.35;
  const tax = grossSalary * taxPercent;
  const netSalary = grossSalary - tax;
  return netSalary;
}
