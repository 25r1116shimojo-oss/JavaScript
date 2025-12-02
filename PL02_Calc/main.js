let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let rslt = document.getElementById("result")

function calc(mode){
    switch (mode) {
        case 1:
        rslt.textContent
         = Number(num1.value) + Number(num2.value)
         break
        case 2:
        rslt.textContent
         = Number(num1.value) - Number(num2.value)
        break
        
        default:
        break
    }

}



// function calc3(){
//     // 値の取得
//     let num1 = Number(num1Element.value)
//     let num2 = Number(num2Element.value)
//     console.log(num1)
//     console.log(num2)
//     // 計算
//     let ans = num1 * num2
//     console.log(ans)
//     // 出力
//     resultElement.textContent = ans
// }

// function calc4(){
//     // 値の取得
//     let num1 = Number(num1Element.value)
//     let num2 = Number(num2Element.value)
//     console.log(num1)
//     console.log(num2)
//     // 計算
//     let ans = num1 / num2
//     console.log(ans)
//     // 出力
//     resultElement.textContent = ans
// }

// function calc5(){
//     // 値の取得
//     let num1 = Number(num1Element.value)
//     let num2 = Number(num2Element.value)
//     console.log(num1)
//     console.log(num2)
//     // 計算
//     let ans = num1 % num2
//     console.log(ans)
//     // 出力
//     resultElement.textContent = ans
// }