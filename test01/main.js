let num1Element = document.getElementById("num1")
let num2Element = document.getElementById("num2")
let resultElement = document.getElementById("result")

function calc1(){
    // 値の取得
    let num1 = Number(num1Element.value)
    let num2 = Number(num2Element.value)
    console.log(num1)
    console.log(num2)

    // 計算
    let ans = num1 + num2
    console.log(ans)

    // 出力
    resultElement.textContent = ans
}

function calc2(){
    // 値の取得
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    console.log(num1)
    console.log(num2)
    // 計算
    let ans = num1 - num2
    console.log(ans)
    // 出力
    document.getElementById("result").textContent = ans
}
function calc3(){
    // 値の取得
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    console.log(num1)
    console.log(num2)
    // 計算
    let ans = num1 * num2
    console.log(ans)
    // 出力
    document.getElementById("result").textContent = ans
}
function calc4(){
    // 値の取得
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    console.log(num1)
    console.log(num2)
    // 計算
    let ans = num1 / num2
    console.log(ans)
    // 出力
    document.getElementById("result").textContent = ans
}
function calc5(){
    // 値の取得
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    console.log(num1)
    console.log(num2)
    // 計算
    let ans = num1 % num2
    console.log(ans)
    // 出力
    document.getElementById("result").textContent = ans
}