/*
Count Odd Numbers in an Interval Range
二つの負でない整数lowとhighが与えられる。lowとhighの間の奇数の数を返せ（この値を含む）

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7]
*/

function countOdds(low: number, high: number): number {
    return Math.floor((high + 1) / 2) - Math.floor(low / 2)
}

const low = 3
const high = 7
const output = countOdds(low, high)
console.log(output)

export {}