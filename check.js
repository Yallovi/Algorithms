/** @format */

function cashFunction(fn) {
  const cash = {};

  return function (n) {
    if (cash[n]) {
      console.log("Cash", cash[n]);
      return cash[n];
    }

    let result = fn(n);
    console.log("No cash", result);
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
cashFactorial(4);
cashFactorial(3);
cashFactorial(4);
