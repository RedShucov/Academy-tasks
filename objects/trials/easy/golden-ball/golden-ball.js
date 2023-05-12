// 12.05.23
// Программа на JS 'Золотой мяч', которая:
// 1. Подсчитает полезность и результативность игроков на основе их статистики.

// Условие:
// Каждому игроку должно быть добавлено два поля:
// 1. Коэффициент полезности - свойство coefficient
// Формула = голы игрока * 2 + голевые пасы
// 2. Результативность - свойство percent
// Формула = процент голов игрока от сумму голов всей команды.

// Входные данные:
// Массив игроков - players{Array}

// Выходные данные:
// Обновленный массив игроков - players{Array}

// Сложность:
// Лёгкая.

/**
 * Функция, добавляет каждому объекту два новых поля:
 * 1 - коэффициент полезности.
 * 2 - результативность.
 * @param {Array} players - массив с игроками.
 * @returns {Array} обновленный массив с игроками.
 */
const getStatistics = (players) => {
  const totalGoals = players.reduce((allGoals, player) => allGoals + player.goals, 0);

  players.forEach(player => {
    player.coefficient = player.goals * 2 + player.passes;
    player.percent = Math.round((player.goals / totalGoals) * 100);
  });

  return players;
};

let players = [
  { 'name': 'Васька', 'goals': 5, 'passes': 5 },
  { 'name': 'Байт', 'goals': 12, 'passes': 2 },
  { 'name': 'Снежок', 'goals': 2, 'passes': 7 }
]

players = getStatistics(players);
