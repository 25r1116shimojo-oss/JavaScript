// 関数
// プログラム(処理)の塊のことです。

// click1という名前の関数を用意する
function click1(){
    // idがp1のtextContentに文字を代入
    document.getElementById('p1').textContent = '実行ボタンが押されました。'
}

function click2(){
    // idがp2のtextContentに文字を代入
    document.getElementById('p2').textContent = '実行ボタンが押されました。'
}

// リセットボタン　練習

let 初期P1 = document.getElementById('p1').textContent;
let 初期P2 = document.getElementById('p2').textContent;

  function reset() {
  document.getElementById('p1').textContent = 初期P1;
  document.getElementById('p2').textContent = 初期P2;
}

// リセットボタン　回答
function reset1(){
    document.getElementById('p1').textContent = '1つ目の内容'
    document.getElementById('p2').textContent = '2つ目の内容'
}

