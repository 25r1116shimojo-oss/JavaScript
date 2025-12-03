// let num1 = document.getElementById("num1")
// let num2 = document.getElementById("num2")
// let num3 = document.getElementById("num3")
// let num4 = document.getElementById("num4")
// let num5 = document.getElementById("num5")
// let rslt = document.getElementById("result")

// function calc(mode){
// switch (mode) {
//     case 1:
//     rslt.textContent = Number(num1.value) + Number(num2.value)
//         break
//     case 2:
//     rslt.textContent = Number(num1.value) - Number(num2.value)
//     break
//     case 3:
//     rslt.textContent = Number(num1.value) * Number(num2.value)
//     break
//     case 4:
//     rslt.textContent = Number(num1.value) / Number(num2.value)
//     break
//     case 5:
//     rslt.textContent = Number(num1.value) % Number(num2.value)
//     break
    
//     default:
//     break
// }


// 以下、模範解答

let num1Element = document.getElementById("num1")
let num2Element = document.getElementById("num2")
let resultElement = document.getElementById("result")

// 演算子を指定するための定数
const ADD = 1
const SUB = 2
const MUTI = 3
const DIV = 4
const MOD = 5

// 計算関数
// 引数:operator 演算子を数値で指定（今回は定数を利用する。）
function calc(operator){
    // 値の取得
    let num1 = Number(num1Element.value)
    let num2 = Number(num2Element.value)
    console.log(num1)
    console.log(num2)
    
    // 計算
    let ans = 0
    switch (operator) {
        case ADD:
            ans = num1 + num2
            break;
        case SUB:
            ans = num1 - num2
            break;
        case MUTI:
            ans = num1 * num2
            break;
        case DIV:
            ans = num1 / num2
            break;
        case MOD:
            ans = num1 % num2
            break;
        default:
            ans = '予期せぬエラーが発生しました。'
            break;
    }
    console.log(ans)
    
    // 出力
    resultElement.textContent = ans
}
