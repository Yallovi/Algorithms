/**
 * Учитывая две строки s и t, верните true, если t является анаграммой s, и false в противном случае.
 * Анаграмма - это слово или фраза, образованные путем перестановки букв другого слова или фразы,
 * обычно с использованием всех исходных букв ровно один раз.
 * 
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 */

const s = "anagram", t = "nagaram"
const a = "rat", b = "car"

/**
 * Time O(N * logN) | Space O(N)
 */
function validAnagram(s, t) {
    if (s.length !== t.length) return

    function sorted(string) {
        return string.split('')     /* Time O(N) | Space O(N) */
            .sort((a,b) => a.localeCompare(b)) /* Time O(N * log(N)) | Space O(1 || log(N)) */
            .join('') /* Time O(N) | Space O(N) */
    }

    return sorted(s) === sorted(t) /* Time O(N * logN) | Space O(N) */
}

console.log('variant 1', validAnagram(s,t))

/**
 * Second variant valid anagram
 * Time O(n) | Space O(1)
 */

function validAnagramSecondVariant(s, t, map = new Map()) {
    const isEqual = s.length === t.length

    if (!isEqual) return false

    addFrequency(s, map)    /* Time O(N) | Space O(1) */
    subtractFrequency(t, map)   /* Time O(N) | Space O(1) */

    return checkFrequency(map)  /* Time O(N)  */
}

    function addFrequency(s, map) {
    for (const char of s) { /* Time O(N)  */
        const count = (map.get(char) | 0) + 1

        map.set(char, count) /* Space O(1) */
    }
}

function subtractFrequency(t, map) {
    for (const char of t) { /* Time O(N)  */
        if (!map.has(char)) continue

        const count = map.get(char) - 1
        map.set(char, count) /* Space O(1) */
    }
}

function checkFrequency(map) {
    for (const [char, count] of map) { /* Time O(N)  */
        const isEqual = count === 0

        if (!isEqual) return false
    }
    return true
}

console.log('variant 2', validAnagramSecondVariant(a, b))