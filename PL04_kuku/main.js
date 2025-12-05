// //  Aが9になるまで　Bを掛け算
// //  Bが9になるまで ↑を繰り返し
// //  結果をHTML出力
// let output1 = document.getElementById('output1')
// let output2 = document.getElementById('output2')
// let output3 = document.getElementById('output3')
// let output4 = document.getElementById('output4')
// let output5 = document.getElementById('output5')

let A1 = 1
while (A1 <= 9) {
    let B1 = 1
    while (B1 <= 9) {
        let C1 = A1 * B1
        output1.innerHTML += C1 + ' '
        B1 = B1 + 1
    }
    output1.innerHTML += '<br>'
   A1 = A1 + 1
}
/////////
let A2 = 1
while (A2 <= 9) {
    let B2 = 1
    while (B2 <= 9) {
        let C2 = A2 + 'x' + B2 + '=' + A2*B2
        output2.innerHTML += C2 + ' | '
        B2 = B2 + 1
    }
    output2.innerHTML += '<br>'
   A2 = A2 + 1
}
///////// 実験 /////////
// let arr01 = []
// let arr02 = []
// let A3 = 1
// while (A3 <= 9) {
//     let B3 = 1
//     arr01.push(A3)
    
//     while (B3 <= 9) {
//         let C3 = A3 * B3
//         output3.innerHTML += C3 + ' '

//         B3 = B3 + 1
//     }
//     output3.innerHTML += '<br>'
//    A3 = A3 + 1
// }
// output3.innerHTML += '<br>' + arr01
// output3.innerHTML += '<br>' + arr02

// 式出力の模範解答 　ここが違う↓ ///
// ansText += `${num1} * ${num2}=${num1 * num2} ','`

ansText = ''
for (let num1 = 1; num1 <= 9; num1++) {
    for (let num2 = 1; num2 <= 9; num2++) {
        // 計算結果の出力
        ansText += `${num1} * ${num2}=${num1 * num2} ','`
    }
}
output5.innerHTML += ansText
//

let box1 = [1,2,3,4]
let box2 = [1,2,3,4]
output4.innerHTML +=  box1 + "<br>"
output4.innerHTML +=  box2
// //  Aが4になるまで　Bを掛け算
// //  Bが4になるまで ↑を繰り返し
// //  結果をHTML出力

while (A4 <= 9) {
    let B4 = 1
    while (B4 <= 9) {
        let C4 = A4 * B4
        output4.innerHTML += C4 + ' '
        B4 = B4 + 1
    }
    output4.innerHTML += '<br>'
   A4 = A4 + 1
}

// 出力部分
output4.innerHTML += ansText

// 計算部分
let htmlText = ''
htmlText += '<table>'
for (let i = 0; i <= 9; i++) {
    htmlText += `<th>${i}</th>`
}
let hnum = 1
for (let num1 = 1; num1 <= 9; num1++) {
    htmlText += '<tr>'
    htmlText += `<th>${hnum++}</th>`
    for (let num2 = 1; num2 <= 9; num2++) {
        let ans = num1 * num2
        // 計算結果の出力
        htmlText += `<td>${ans}</td>`
    }
    htmlText += '</tr>'
}
htmlText += '</table>'
// 出力部分
output5.innerHTML += htmlText