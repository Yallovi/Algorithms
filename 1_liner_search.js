/** @format */
/**
 * * Массив - неотсортированных чисел
 * * Линейный метод означает, что мы последовательной будем брать элемент и проверять его
 * *  Сложность здесь O(n) - так как в худшем случае нам придется обойти весь массив
 */
const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 11));
console.log("count =>", count);
