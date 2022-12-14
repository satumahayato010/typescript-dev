/*
Binary Search
昇順でソートされた整数の配列numsと整数のtargetが与えられたとき，
numsからtargetを検索する関数を作成せよ．targetが存在する場合、そのインデックスを返す。
そうでなければ -1 を返す。
あなたは，実行時計算量がO(log n)であるアルゴリズムを書かなければならない．

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
*/

function binarySearch(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

function binarySearchRecursive(
    nums: number[], target: number, left: number, right: number): number {
    if (left > right) {
        return -1
    }

    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
        return mid
    } else if (nums[mid] < target) {
        return binarySearchRecursive(nums, target, mid + 1, right)
    } else {
        return binarySearchRecursive(nums, target, left, mid - 1)
    }

}

const nums: number[] = [-1, 0, 3, 5, 9, 12]
const target = 9
const left = 0
const right = nums.length - 1
const output = binarySearchRecursive(nums, target, left, right)
console.log(output)

export {}
