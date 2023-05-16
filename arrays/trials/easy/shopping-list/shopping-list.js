// 16.05.23
// Программа на JS 'Список покупок', которая:
// 1. Cоставляет из элементов массива список покупок.

// Условие:
// 1. Каждый элемент должен быть отделён запятой, точка в конце строки не нужна.

// Входные данные:
// Массив с покупками - groceries{Array}

// Выходные данные:
// Строку со списком покупок - shoppingList{string}

// Сложность:
// Лёгкая.

const groceries = ['чай', 'шпроты', 'печенье', 'сахар', 'чипсы'];

/**
 * Функция, принимает массив и конвертирует его в строку, разделяя запятой.
 * @param {Array} array - список покупок в виде массива.
 * @returns {string} - список покупок в виде строки.
 */
function getShoppingString(array) {
  let shoppingList = '';

  for (let i = 0; i < array.length; i++) {
    shoppingList += (i !== array.length - 1) ? `${array[i]}, ` : `${array[i]}.`;
  }

  return shoppingList;
}

const shoppingList = getShoppingString(groceries);
