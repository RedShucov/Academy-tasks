// 19.06.23
// Программа на JS 'Путь к молоку', которая:
// Определяет ближайшее работающее место с молоком.

// Входные данные:
// Время - time{number}

// Выходные данные:
// Ближайшее работающие место - {boolean}

// Сложность:
// Средняя.

const time = 12;

let goToDairy = false;
let goToStore = false;
let goToMarket = false;

const getNearPlace = (time) => {
  if (time >= 8 && time < 13 || time >= 14 && time < 19) {
    goToDairy = true;
  } else if (time >= 9 && time < 14 || time >= 15 && time < 17) {
    goToStore = true;
  } else if (time >= 7 && time < 20) {
    goToMarket = true;
  }
};

getNearPlace(time);
