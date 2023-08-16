/**
 * * подойдет только если отсортированное по порядку, например [1,2,3,4,5]. Работает ла логорифмическое время, что в разы быстрее.
 * * Бинарный поиск работает так. Нужно взять середину и если искомое слово начинается с буквы которая идет раньше той которую мы открыли то мы поделим левую часть словаря еще на две части, и будем искать уже там, но если буква идет после, то будет смотреть правую часть. Таким образом мы разом отсеиваем ровно половину слов в словаре
 * * O(log2n)
 * @format
 */
// const array = [1, 4, 5, 8, 9, 11, 22, 26, 35, 42, 51];
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 0;

/**
 * * C помощью цикла
 */
function binarySearch(array, item) {
  /**
   * * 1. Нужно получить середину массива
   */

  let start = 0; //* начало массива
  let end = array.length; //* конец массива
  let middle; //* середина
  let found = false; //* флаг, который отображает нашли элемент или нет
  let position = -1; //* Позиция элемента, которую мы будем возвращать из функции

  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);

    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }

    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return position;
}

console.log("binarySearch =>", binarySearch(array, 10));
console.log("count =>", count);

//** с помощью рекурсии */
let recursionCount = 0;

function RecursionBinarySearch(array, item, start, end) {
  let middle = Math.floor((start + end) / 2);
  recursionCount++;

  if (array[middle] === item) {
    return middle;
  }

  if (item < array[middle]) {
    return RecursionBinarySearch(array, item, 0, middle - 1);
  } else {
    return RecursionBinarySearch(array, item, middle + 1, end);
  }
}

console.log(
  "RecursionBinarySearch =>",
  RecursionBinarySearch(array, 51, 0, array.length)
);
console.log("Recursion count =>", recursionCount);
