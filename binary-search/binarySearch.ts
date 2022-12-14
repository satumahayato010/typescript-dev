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
    let low = 0
    let high = nums.length - 1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
}

function binarySearchRecursive(
    nums: number[], target: number, low: number, high: number): number {
    if (low > high) {
        return -1
    }

    let mid = Math.floor((low + high) / 2)
    if (nums[mid] === target) {
        return mid
    } else if (nums[mid] < target) {
        return binarySearchRecursive(nums, target, mid + 1, high)
    } else {
        return binarySearchRecursive(nums, target, low, mid - 1)
    }

}

const nums: number[] = [-1, 0, 3, 5, 9, 12]
const target = 9
const low = 0
const high = nums.length - 1
const output = binarySearchRecursive(nums, target, low, high)
console.log(output)

export {}
