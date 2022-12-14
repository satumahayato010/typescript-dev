const nums: number[] = [1, 2, 3, 4, 5, 6, 7]

// forループが最速、for ofやforEach()は、ループ１周ごとに関数呼び出しが挟まるため多少遅くなる。
for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    console.log(value)
}


nums.forEach(value => {
    console.log(value);
});

// for of
for (const num of nums) {
    console.log(num)
}

// for ... ofで配列のインデックスを取得する場合
for (const [idx, num] of nums.entries()) {
    console.log(idx, num)
}


// ####################################
// Map
const map = new Map<string, boolean>([
    ["YES", true],
    ["No", false],
]);


const map2 = new Map<string, number>();
map2.set("YES", 1)
console.log(map.get("YES"));    // 1


for (const [key, val] of map) {
    console.log(key, val)
};