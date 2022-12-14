function linearSearch(nums: number[], target: number): number {
    for (const [idx] of nums.entries()) {
        if (nums[idx] === target) {
            return idx
        }
    }
    return -1
}

const nums: number[] = [-1, 0, 3, 5, 9, 12]
const target = 9
const output = linearSearch(nums, target)
console.log(output)

export {}