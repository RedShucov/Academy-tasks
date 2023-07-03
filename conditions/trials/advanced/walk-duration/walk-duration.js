// 02.07.23
// Программа на JS 'Длительность прогулки'
// Считает длительность прогулки.

// Входные данные:
// Температура - temperature{number}
// Идёт ли дождь - itsRaining{boolean}

// Выходные данные:
// Время прошулки в минутах - minutes{number}

// Сложность:
// Продвинутая.

const temperature = 19;
const itsRaining = false;

const getMinutes = (temperature, itsRaining) => {
  let minutes;

  if (itsRaining || (temperature < 0 || temperature > 35)) {
    minutes = 0;

    return minutes;
  }

  if (temperature <= 20) {
    minutes = 20 + (temperature - 20);
  }
  
  if (temperature >= 20) {
    minutes = 20 - (temperature - 20);
  }

  return minutes;
}

const minutes = getMinutes(temperature, itsRaining);
