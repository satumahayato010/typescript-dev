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

