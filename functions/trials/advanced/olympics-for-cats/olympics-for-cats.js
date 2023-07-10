// 10.07.23
// Программа на JS 'Олимпиада для котов', которая:
// Возвращает массив с подходящими датами для Олимпиады.

// Входные данные:
// Год, с которого нужно начать вести отсчёт - initialYear{number}
// Год, которым этот отсчёт надо закончить - finalYear{number}
// Число, которое обозначает сумму цифр в номере года - number{number}

// Выходные данные:
// массив с подходящими датами для Олимпиады - yearsOlympics{Array}

// Сложность:
// Продвинутая.

const getYears = (initialYear, finalYear, number) => {
  const newArray = [];

  for (let year = initialYear; year <= finalYear; year++) {
    const yearSum = [...String(year)].map(Number).reduce((acc, number) => acc + number);

    if (yearSum === number) {
      newArray.push(year);
    }
  }

  return newArray;
}

const yearsOlympics = getYears(2018, 2045, 11);
