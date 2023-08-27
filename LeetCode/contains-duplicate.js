/**
 * Учитывая целочисленный массив nums, верните true, если какое-либо значение появляется в массиве по крайней мере дважды, и верните false, если каждый элемент различен.
 * Input: nums = [1,2,3,1]
 * Output: true
 *
 */

const nums = [1,2,3,1]

/**
 * First variant
 * Time O(N) | Space O(N)
 */
function containsDuplicate(nums, setArray= new Set()) {

    for (let i = 0; i < nums.length; i++) {
        if (setArray.has(nums[i])) {
            return true
        } else {
            setArray.add(nums[i])
        }
    }
    return false
}

console.log('first variant', containsDuplicate(nums))


/**
 * Second variant
 * Time O(N) | Space O(N)
 */
function containsDuplicateSecondVariant(nums) {
    let setArray = new Set(nums)

    if (setArray.size !== nums.length) return true

    return false
}

console.log('second variant', containsDuplicateSecondVariant(nums))

    