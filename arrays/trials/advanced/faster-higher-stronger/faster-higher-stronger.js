// 07.07.23
// Программа на JS 'Быстрее, выше, сильнее', которая:
// Анализирует спортивные показатели.

// Входные данные:
// Массив с спортивными характеристиками - indicators{Array}
// Массив уровней каждого показателя - levels{Array}

// Выходные данные:
// Обновленный массив чисел Фибоначчи - fibonacciNumbers{Array}

// Сложность:
// Продвинутая.

const indicators = ['ловкость', 'скорость', 'гибкость', 'выносливость', 'сила'];
const levels = [3, 5, 7, 8, 5];
const trainingTime = 25;

if (trainingTime > 60) {
  levels[indicators.indexOf('сила')] += 2;
  levels[indicators.indexOf('выносливость')] += 2;
}

if (trainingTime >= 30 && trainingTime <= 60) {
  levels[indicators.indexOf('гибкость')] += 3;
}

if (trainingTime <= 30) {
  levels[indicators.indexOf('скорость')] += 3;
  levels[indicators.indexOf('ловкость')] += 3;
}
