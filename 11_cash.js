/** @format */
function cashFunction(fn) {
  const cash = {}; //* создаем объект, который будет содержать по ключу результаты кэширования. Ключом будем параметр n, который передаем в функцию

  return function (n) {
    // console.log("n: ", n);

    if (cash[n]) {
      // console.log("Взято из кеша", cash[n]);
      return cash[n];
    }

    let result = fn(n);
    // console.log("Посчитала функция = ", result);
    cash[n] = result;
    return result;
  };
}

function Factorial(n) {
  let result = 1;

  while (n != 1) {
    result *= n;
    n -= 1;
  }

  return result;
}

const cashFactorial = cashFunction(Factorial);

cashFactorial(5);
// cashFactorial(4);
// cashFactorial(3);
// cashFactorial(4);
// cashFactorial(5);
// cashFactorial(1);

function cash(fn) {
  let cash = {};

  return function (n) {
    if (cash[n]) {
      console.log("Взято из кеша", cash[n]);
      return cash[n];
    }
    let result = fn(n);
    cash[n] = result;
    console.log("Посчитала функция = ", result);
    return result;
  };
}

function FactorialTest(n) {
  let result = 1;

  while (n != 1) {
    result *= n;

    n -= 1;
  }
  return result;
}

let cashTest = cash(FactorialTest);
// console.log("test =>", cashTest(5));
cashTest(5);
// console.log("test =>", cashTest(2));
cashTest(2);
// console.log("test =>", cashTest(3));
cashTest(3);
// console.log("test =>", cashTest(5));
cashTest(5);
// console.log("test =>", cashTest(3));
cashTest(3);
