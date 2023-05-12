// 12.05.23
// Программа на JS 'Дом, который построил Кекс', которая:
// 1. Конфигуратор для расчёта площади и стоимости строительства.

// Условие:
// Необходимо добавить два метода объекту:
// 1. Метод возвращающий площадь дома - calculateSquare()
// Формула = количество комнат * количество этажей * коэффициент.
// 2. Метод возвращающий стоимость строительства - calculatePrice()
// Формула = произведение площади и стоимости материала дома.

// Сложность:
// Лёгкая.

/**
 * Cтоимость материалов для строительства.
 */
const materialPrice = {
  'wood': 1000,
  'stone': 1500,
  'brick': 2000
};

const house = {
  rooms: 6,
  floors: 8,
  material: 'wood',
  coefficient: 10,
  calculateSquare: function () {
    return this.rooms * this.coefficient * this.floors;
  },
  calculatePrice: function () {
    const square = this.calculateSquare()

    return square * materialPrice[this.material]
  }
};
