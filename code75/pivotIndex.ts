/*
Find Pivot Index
整数numsの配列が与えられたとき、この配列のピボットインデックスを計算しなさい。
ピボットインデックスとは、そのインデックスの左側にあるすべての数値の和が、
そのインデックスの右側にあるすべての数値の和と等しくなるインデックスのことである。
インデックスが配列の左端にある場合、左側には要素がないため、左側の和は0になります。
これは配列の右端にも当てはまります。
左端のピボットインデックスを返します。そのようなインデックスが存在しない場合は、-1 を返します。

Input: nums = [1,2,3]
Output: -1
*/

function pivotIndex(nums: number[]): number {
    let rSum = 0
    for (let i = 0; i < nums.length; i++) {
        rSum += nums[i]
    }

    let lSum = 0
    for (let i = 0; i < nums.length; i++) {
        if (lSum === rSum - nums[i] - lSum) {
            return i
        }
        lSum += nums[i]
    }
    return -1
}

const nums: number[] = [1, 7, 3, 6, 5, 6]
const output = pivotIndex(nums)
console.log(output)

export {}