// ページ読み込み時
window.onload = function () {
    // 【問題】letがないため、p1n は「全体共有」として保存される
    p1n = document.getElementById('p1').textContent
    p2n = document.getElementById('p2').textContent
}

// ボタン1の処理
function click1() {
    document.getElementById('p1').textContent = 'ああ！';
}

// ボタン2の処理
function click2() {
    document.getElementById('p2').textContent = 'ああ！';
}

// リセット機能
function reset_2() {
    // ここで共有の p1n を使うが、中身が書き換わっている可能性がある
    document.getElementById('p1').textContent = p1n
    document.getElementById('p2').textContent = p2n
}

// ▼ 後から追加された機能（バグの原因）
function showUserName() {
    // 開発者は「Player 1 Name」の略のつもりで p1n を使ってしまった
    // letがないため、window.onloadで作った p1n を上書きしてしまう
    p1n = "山田太郎"; 
    
    document.getElementById('user-area').textContent = p1n + " としてログイン";
}

// let の安全性を確認しましょう
function test1() {
    let message = "こんにちは";
    document.getElementById('p1').textContent = message
}

function test2() {
let message = "さようなら"; 
document.getElementById('p1').textContent = message
}
