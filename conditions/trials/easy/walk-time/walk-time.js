// 03.05.23
// Программа на JS 'Время прогулки', которая:
// 1. Рассчитывает длительность прогулки.

// Условие:
// 1. Если идёт дождь, прогулка = 0 минут.
// 2. 10°C > 15°C = 30 минут.
// 3. 15°C > 25°C = 40 минут.
// 4. 25°C >= 35°C = 20 минут.
// 5. В остальных случаях = 0 минут.

// Входные данные:
// Проверка на дождь - isRaining{boolean}
// Температура °C - temperature{number}

// Выходные данные:
// Время проглки - minutes{number}

// Сложность:
// Лёгкая.

let temperature = 15;
let isRaining = false;
let minutes = 0;

if (!isRaining) {
  if (temperature >= 10 && temperature < 15) {
    minutes = 30;
  }

  else if (temperature >= 15 && temperature < 25) {
    minutes = 40;
  }

  else if (temperature >= 25 && temperature <= 35) {
    minutes = 20;
  }

  else {
    minutes = 0;
  }
} else {
  console.log('Идёт дождь, не гуляем!')
  minutes = 0;
}

console.log(minutes)
