// 04.05.23
// Программа на JS 'FizzBuzz', которая:
// 1. Анализирует число и выводит на его основе Fizz/Buzz/FizzBuzz

// Условие:
// 1. Если число делится на 3 = Fizz.
// 2. Если число делится на 5 = Buzz.
// 3. Если число делится на 3 и 5 = FizzBuzz.

// Входные данные:
// Число для анализа - number{number}

// Выходные данные:
// Результат анализа - taskResult{string}

// Сложность:
// Лёгкая.

let number = 15;
let taskResult;

if (number % 5 === 0 && number % 3 === 0) {
  taskResult = 'FizzBuzz';
  console.log(taskResult);
}

else if (number % 5 === 0) {
  taskResult = 'Buzz';
  console.log(taskResult);
}

else if (number % 3 === 0) {
  taskResult = 'Fizz';
  console.log(taskResult);
}

else {
  taskResult = number;
  console.log(taskResult);
}
