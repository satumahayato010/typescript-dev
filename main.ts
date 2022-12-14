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


// { }のスコープは制御構文だけでなく、使用することもできる。

function code() {
    {
        // { }の中のみ有効
        const language = "TypeScript";
    }
}

// switch
const walk: number = 15
switch (walk) {
    case 15:
        console.log("park walk")
        break
    case 14:
        console.log("road walk")
        break
    default:
        console.log("sleep")
}

// while 条件がtrueの限りループする。
let num: number = 3
while (num > 0) {
    console.log(num)
    num -= 1
}

// フォルダ名はケバブケース       binary-search
// ファイル名はキャメルケース     binarySearch
// 変数名　キャメルケース
// 定数名　スネークケース        binary_search
// メソッド　キャメルケース
// クラス パスカルケース        BinarySearch
