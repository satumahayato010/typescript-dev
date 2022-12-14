/*
Contains Duplicate(重複を含む)
整数の配列 nums が与えられたとき、いずれかの値が配列中に少なくとも2回出現すれば真を、
すべての要素が異なる場合は偽を返す。

Input: nums = [1,2,3,1]
Output: true
*/

function containsDuplicate(nums: number[]): boolean {
    let map = new Map<number, boolean>();

    for (const num of nums) {
        if (map.has(num)) {
            return true
        }
        map.set(num, true)
    }
    return false
}

const nums: number[] = [1, 3, 4, 2, 1]
const output = containsDuplicate(nums)
console.log(output)

export {}