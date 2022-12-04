let person: {
    name: string;
    age: number;
}
person = {name: "aaa", age: 20};

console.log(person)

type Car = {
    readonly price: number;
    manufacturer: string;
    modelName: string
}

let car: Car = {
    price: 1800000,
    manufacturer: "TOYOTA",
    modelName: "RandCruiser70",
}
/*
const {price, manufacturer} = car;
console.log(price, manufacturer)

const nums: number[] = [1, 2, 3, 4, 5]
const [one, two, three, four, five, six] = nums;
console.log(one, two, three, four, five, six)

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

for (const num of nums) {
    console.log(num)
}
 */


const arr: number[] = [1, 2, 3]
const arr2: number[] = [...arr, 4, 5]
console.log(arr2)








