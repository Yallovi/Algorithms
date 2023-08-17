/**
 * Учитывая массив целых чисел nums и целочисленный целевой показатель, верните индексы двух чисел таким образом, чтобы они в сумме давали целевой показатель.
 * Вы можете предположить, что каждый вход будет иметь ровно одно решение, и вы не можете использовать один и тот же элемент дважды.
 * Вы можете вернуть ответ в любом порядке.
 *
 * Пример 1:
 * Входные данные: nums = [2,7,11,15], target = 9
 * Выход: [0,1]
 * Пояснение: Поскольку nums[0] + nums[1] == 9, мы возвращаем [0, 1].
 *
 * Пример 2:
 * Входные данные: nums = [3,2,4], target = 6
 * Результат: [1,2]
 *
 * Пример 3:
 * Входные данные: nums = [3,3], target = 6
 * Выход: [0,1]
 */

const v1 = [2,7,11,15]
const v2 = [3,2,4]
const v3 = [3,3]

/**
 * Time O(N) | Space O(N)
 */
function twoSum(array, target, map = new Map()) {
    for (let i = 0; i < array.length; i++) { /* Time O(N) */
        let number = array[i]
        let different = target - number
        let desiredIndex = map.get(different)

        if (map.has(different)) {
            return [i, desiredIndex]
        } else {
            map.set(number, i) /* Space O(N) */
        }
    }

    return [-1, -1]
}

console.log('twoSum', twoSum(v2, 6))