//  Aが9になるまで　Bを掛け算
//  Bが9になるまで ↑を繰り返し
//  結果をHTML出力
let output1 = document.getElementById('output1')
let output2 = document.getElementById('output2')
let output3 = document.getElementById('output3')
let output4 = document.getElementById('output4')
let output5 = document.getElementById('output5')

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
let arr01 = []
let arr02 = []
let A3 = 1
while (A3 <= 9) {
    let B3 = 1
    arr01.push(A3)
    while (B3 <= 9) {
        let C3 = A3 * B3
        while (arr02 <= 9){
        arr02.push(B3)
        }
        output3.innerHTML += C3 + ' '
        B3 = B3 + 1
    }
    output3.innerHTML += '<br>'
   A3 = A3 + 1
}
output3.innerHTML += '<br>' + arr01
output3.innerHTML += '<br>' + arr02



