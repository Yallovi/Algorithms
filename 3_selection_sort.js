/**
 * *Сортировки алгоритмом выбора
 * * смысл этого алгоритма в том, что у нас два цикла. Берем первый элемент проходимся по-всему массиву и если есть меньше элемент меняем их местами.
 * @format
 */
const arr = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
];
let count = 0;

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let atm = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = atm;
  }
  return arr;
}

console.log(selectionSort(arr));
console.log("arr.length =>", arr.length); // O(n*n)
console.log("count = ", count);
