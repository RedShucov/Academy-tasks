// 03.05.23
// Программа на JS 'KeksoFit v0.1', которая:
// 1. Строит программу тренировок в зависимоисти
// От времени проведенного в соцсетях.

// Условие:
// 1. За каждые 10 минут, 3 прыжка.
// Например: за 50 минут я должен сделать 15 прыжков.

// Входные данные:
// Время в соцсетях в минутах - timeInMinutes{number}
// Очки за бросок - scoreThrow{number}

// Выходные данные:
// Количество прыжков - jumps{number}
// Информативное сообщение - message{string}
// 'За ', ' минут в соцсетях полагается ', ' прыжков.' – и двух переменных: timeInMinutes и jumps.

// Сложность:
// Лёгкая.

const timeInMinutes = 360;

const getCountJumpsInMinutes = function (minutes) {
  const jumps = minutes / 10 * 3;

  const message = `За ${minutes} минут в соцсетях полагается ${jumps} прыжков.`

  return message;
}

console.log(getCountJumpsInMinutes(timeInMinutes));
