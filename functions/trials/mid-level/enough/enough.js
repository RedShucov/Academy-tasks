// 24.06.23
// Программа на JS 'Калькулятор', которая:
// Анализирует суточный рацион.

// Входные данные:
// Калорийность блюд - caloricValues{Array}
// Лимит калорий - maxСalories{number}

// Выходные данные:
// Количество блюд - dishСount{number}

// Сложность:
// Средняя.

/**
 * 
 * @param {Array} caloricValues - Массив с калорийностью блюд.
 * @param {number} maxСalories - Максимум калорий.
 */
const getDiet = (caloricValues, сaloriesLimit) => {
  let currentCalories = 0;
  let dishСount = 0;

  for (let i = 0; i < caloricValues.length; i++) {
    currentCalories += caloricValues[i];

    if (currentCalories > сaloriesLimit) {
      break;
    }

    dishСount++;
  }

  return dishСount;
};

const dishСount = getDiet([12, 27, 9, 20, 12, 13, 35], 90);
