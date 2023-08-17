/**
 * Group Anagrams
 * Учитывая массив строк strs, сгруппируйте анаграммы вместе. Вы можете вернуть ответ в любом порядке.
 * Анаграмма - это слово или фраза, образованные путем перестановки букв другого слова или фразы, обычно с использованием всех исходных букв ровно один раз.
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * Example 2:
 * Input: strs = [""]
 * Output: [[""]]
 *
 * Example 3:
 * Input: strs = ["a"]
 * Output: [["a"]]
 */

const strs = ["eat","tea","tan","ate","nat","bat"]

function groupAnagrams(strs) {
    let vocabulary = {}

    for (const s of strs) {
        let key = [...s].sort()

        if (key in vocabulary) {
            vocabulary[key].push(s)
        } else {
            vocabulary[key] = [s]
        }
    }

    return  Object.values(vocabulary)
}

console.log(groupAnagrams(strs))