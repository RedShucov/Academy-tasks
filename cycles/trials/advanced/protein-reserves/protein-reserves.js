// 03.07.23
// Программа на JS 'Запасы протеина'
// Считает количество протеина необходимое на период.

// Входные данные:
// Количество дней - days{number}
// Протеина для буднего дня - workDayAmount{number}
// Протеина для выходного дня - weekendAmount{number}
// Период получения протеина - period{number}

// Выходные данные:
// Количество протеина - total{number}

// Сложность:
// Продвинутая.

const days = 9;
const period = 3;
const workDayAmount = 200;
const weekendAmount = 100;

/**
 * Функция, считает количество потребляемого протеина за переданное количество дней.
 * @param {number} days - Дней в периоде.
 * @param {number} period - Период.
 * @returns Количество протеина за общее количество дней.
 */
const getTotalAmount = (days, period) => {
  let total = 0;

  for (let day = period; day <= days; day += period) {

    const isWeekend = day % 7 === 6 || day % 7 === 0;

    if (isWeekend) {
      total += weekendAmount;
    } else {
      total += workDayAmount;
    }
  }

  return total;
};

const totalProtein = getTotalAmount(days, period);
