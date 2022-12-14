/*
Rotate Array
配列が与えられたとき，配列を右にkステップ回転させる（kは非負）

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
*/

function rotate(nums: number[], k: number): void {
    let n = nums.length
    k %= n

    reverse(nums, 0, n - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, n - 1)
}

function reverse(nums: number[], start: number, end: number): void {
    while (start < end) {
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start += 1
        end -= 1
    }
}

const nums: number[] = [1, 2, 3, 4, 5, 6, 7]
const k = 3
rotate(nums, k)
console.log(nums)

export {}