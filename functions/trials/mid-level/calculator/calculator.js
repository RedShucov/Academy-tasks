// 24.06.23
// Программа на JS 'Калькулятор', которая:
// Распознает пользовательский ввод, совершает математические операции и возвращает результат.

// Условия:
// 1. Все параметры приходят в виде строк.
// 2. В третьем параметре содержится один из операторов: сложение ('+'), вычитание ('-'), умножение ('*'), деление ('/').

// Входные данные:
// Первый операнд - firstNumber{string}
// Второй операнд - secondNumber{string}
// Оператор - operator{string}

// Выходные данные:
// Результат выполнения функции - result{number}

// Сложность:
// Средняя.

/**
 * Функция, принимает на вход два операнда и операнд в виде строк, приводит к нужному типу данных и совершает математическую операцию.
 * @param {string} firstOperand - Первый операнд.
 * @param {string} secondOperand - Второй операнд.
 * @param {string} operator - Математический оператор.
 * @returns 
 */
const getResult = (firstOperand, secondOperand, operator) => {
  firstOperand = Number(firstOperand);
  secondOperand = Number(secondOperand);

  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      return firstOperand / secondOperand;
  }
};

const result = getResult('4', '3', '*');
