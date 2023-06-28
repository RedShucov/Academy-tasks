// 28.06.23
// Программа на JS 'Сжатие массивов', которая:
// Cобирает из двух массивов объект и возвращает его.

// Входные данные:
// Массив c ключами - keys{Array}
// Массив с значениями - values{Array}

// Выходные данные:
// Объект с данными - customObject{Object}

// Сложность:
// Средняя.

const fields = ['имя', 'фамилия', 'отчество'];
const names = ['Семён', 'Василенко', 'Эльдарович'];

const getZippedArrays = (keys, values) => {
  const obj = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = values[i];

    obj[key] = value;
  }

  return obj;
};

const customObject = getZippedArrays(fields, names);
