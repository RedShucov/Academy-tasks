// 06.07.23
// Программа на JS 'Числа Фибоначчи', которая:
// Cчитает числа Фибоначчи и последовательно записывает эти числа в массив.

// Входные данные:
// Массив с числами Фибоначчи - fibonacciNumbers{Array}
// Количество чисел которые нужно добавить в массив - numbersQuantity{number}

// Выходные данные:
// Обновленный массив чисел Фибоначчи - fibonacciNumbers{Array}

// Сложность:
// Продвинутая.

const fibonacciNumbers = [2, 5];
const numbersQuantity = 4;

const getFibonacciNumbers = (numbers, quantity) => {
  const newFibonacci = [...numbers];

  const start = numbers.length;
  const end = numbers.length + quantity;

  for (let i = start; i < end; i++) {
    const first = newFibonacci[i - 1];
    const second = newFibonacci[i - 2];

    const fibonacci = first + second;

    newFibonacci.push(fibonacci);
  }

  return newFibonacci;
}

const result = getFibonacciNumbers(fibonacciNumbers, numbersQuantity);
