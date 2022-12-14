/*
Squares of a Sorted Array
降順でソートされた整数の配列 nums が与えられたとき、降順でソートされた各数値の二乗の配列を返す。

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
*/

function sortedSquares(nums: number[]): number[] {
    for (const [idx, num] of nums.entries()) {
        nums[idx] = num * num
    }

    let outArr: number[] = []
    let left = 0
    let right = nums.length - 1

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[left] > nums[right]) {
            outArr[i] = nums[left]
            left += 1
        } else {
            outArr[i] = nums[right]
            right -= 1
        }
    }
    return outArr
}

const nums: number[] = [-4,-1,0,3,10]
const output = sortedSquares(nums)
console.log(output)

export {}