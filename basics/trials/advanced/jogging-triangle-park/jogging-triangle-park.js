// 29.06.23
// Программа на JS 'Пробежки по треугольному парку', которая:
// Находит периметр треугольника через катеты.

// Входные данные:
// Первый катет - keys{Array}
// Второй катет - values{Array}

// Выходные данные:
// Гипотенуза треугольника - hypotenuse{number}

// Сложность:
// Продвинутая.

const firstСathetus = 300;
const secondСathetus = 400;

const getHypotenuse = (sideA, sideB) => {
  sideA = Math.pow(sideA, 2);
  sideB = Math.pow(sideB, 2);

  const hypotenuse = Math.sqrt(sideA + sideB);

  return Math.round(hypotenuse);
};

const getPerimeter = (sideA, sideB, hypotenuse) => {
  const perimeter = sideA + sideB + hypotenuse;

  return Math.round(perimeter);
};

const hypotenuse = getHypotenuse(firstСathetus, secondСathetus);

const perimeter = getPerimeter(firstСathetus, secondСathetus, hypotenuse);
