// 05.07.23
// Программа на JS 'Аналитика пользователей', которая:
// Собирает статистику из пользовательских данных.

// Входные данные:
// Массив с данными - usersData{Array}
// Искомая строка - query{string}

// Выходные данные:
// Количество подходящих элементов - matchingUsers{number}

// Сложность:
// Продвинутая.

const usersData = ["Людмила Сергеевна", "Мария Петровна", "Валерия Брониславовна", "Елена Васильевна", "Людмила Львовна", "Елена Сергеевна", "Екатерина Максимовна"]
const query = 'Елена';

const getCountElements = (array, query) => {
  const elements = array.reduce((count, user) => {
    if (user.indexOf(query) >= 0) {
      count++;
    }
    return count;
  }, 0);

  return elements;
};

const matchingUsers = getCountElements(usersData, query);
