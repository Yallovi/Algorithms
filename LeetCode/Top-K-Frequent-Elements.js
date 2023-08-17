/**
 * Top K Frequent Elements
 * Учитывая целочисленный массив nums и целое число k, верните k наиболее часто встречающихся элементов. Вы можете вернуть ответ в любом порядке.
 *
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 *
 * Input: nums = [1], k = 1
 * Output: [1]
 */

const nums = [1,1,1,2,2,3], k = 2

/**
 * Time O(n * log n) | Space O(n)
 */
function frequency(nums, k) {
    if (!nums.length) return 0

    let vocabulary = {}

    for (const v of nums) {
        if (v in vocabulary) {
            vocabulary[v] = vocabulary[v] + 1
        } else {
            vocabulary[v] = 0
        }
    }
    return [...Object.keys(vocabulary).sort((a,b) => vocabulary[b] - vocabulary[a]).slice(0,k)]
}

console.log(frequency(nums, k))