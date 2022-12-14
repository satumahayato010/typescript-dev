/*
Average Salary Excluding the Minimum and Maximum Salary
salary[i]がi番目の従業員の給与である一意の整数の配列が与えられている．
最小と最大の給与を除いた従業員の平均給与を返せ。実際の答えから10-5以内の答えが認められる。

Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
*/

function averageSalary(salary: number[]): number {
    let minNum = salary[0]
    let maxNum = salary[0]
    let sumArr = 0

    for (const val of salary) {
        sumArr += val

        if (val > maxNum) {
            maxNum = val
        }
        if (val < minNum) {
            minNum = val
        }
    }
    return (sumArr - minNum - maxNum) / (salary.length - 2)
}

const salary: number[] = [4000, 3000, 1000, 2000]
const output = averageSalary(salary)
console.log(output)

export {}