// 関数
// プログラム(処理)の塊のことです。

// click1という名前の関数を用意する
function click1(){
    // idがp1のtextContentに文字を代入
    document.getElementById('p1').textContent = '実行ボタンが押されました。'
}

function click2(){
    document.getElementById('p2').textContent = '実行しました'
}

function reset(){
    document.getElementById('p1').textContent = 'あ。'
    document.getElementById('p2').textContent = 'あ。'
}

let p1 = document.getElementById('p1').textContent;
let p2 = document.getElementById('p2').textContent;

function reset1(){
    document.getElementById('p1').textContent = p1
    document.getElementById('p2').textContent = p2
    document.getElementById('reset').textContent = 'リセットっぽいもの'
}
