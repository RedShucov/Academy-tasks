// 27.06.23
// Программа на JS 'Повторы слов', которая:
// Вычисляет повторы каждого слова.

// Входные данные:
// Массив слов - words{Array}

// Выходные данные:
// Объект с повторами слов - repeatWords{Object}

// Сложность:
// Средняя.

/**
 * Функция, принимает массив слов и возвращает объект содержащий информацию о количестве повторов каждого слова.
 * @param {Array} words - Массив слов.
 * @returns Объект содержащий слова и количество их повторов.
 */
const getRepeats = (words) => words.reduce((target, word) => (target[word] = (target[word] || 0) + 1, target), {});

const repeatWords = getRepeats(["привет", "пока", "прощай", "пока", "здравствуйте", "прощай"]);
