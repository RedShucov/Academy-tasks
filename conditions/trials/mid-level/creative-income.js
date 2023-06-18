// 17.06.23
// Программа на JS 'Творческий доход — ключ к победе!', которая:
// Рассчитывает сумму покупки с учётом скидки.

// Входные данные:
// Стоимость покупки - price{number}

// Выходные данные:
// Стоимость с учётом скидки - discountedPrice{number}

// Сложность:
// Средняя.

const price = 500;

/**
 * Функци, высчитывает стоимость покупки с учётом скидки.
 * @param {number} price - стоимость покупки.
 * @returns {number} стоимость с учётом скидки.
 */
const getDiscontPrice = (price) => {
  let discount = 0;

  if (price >= 1000 && price < 3000) {
    discount = 0.05;
  }

  if (price >= 3000 && price < 5000) {
    discount = 0.10;
  }

  if (price >= 5000) {
    discount = 0.15;
  }

  return price - (price * discount);
}

const discountedPrice = getDiscontPrice(price)
