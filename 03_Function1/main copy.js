// 箱
window.onload = function () {
    p1n = document.getElementById('p1').textContent
    p2n = document.getElementById('p2').textContent
}

function click1() {
    document.getElementById('p1').textContent = 'ああ！';
}

function click2() {
    document.getElementById('p2').textContent = 'ああ！';
}

// リセットボタン　模範回答
function reset_1() {
    document.getElementById('p1').textContent = '模範回答'
    document.getElementById('p2').textContent = '模範回答'
}

// リセット 変数呼び出し
function reset_2() {
    document.getElementById('p1').textContent = p1n
    document.getElementById('p2').textContent = p2n
}


// AIの回答抜粋
//　AIは何故、末尾に;を付けたのか、何故、letを使ったのか？

//      --- データを保存しておくための「箱（変数）」を2つ用意 ---
//      --- まだ中身は空っぽ ---
//      let backup1 = "";
//      let backup2 = "";

//      --- ページが読み込まれた瞬間に実行 ---
//      window.onload = function() {

//      --- p1にbackup1に入れる ---
//      backup1 = document.getElementById('p1').textContent;

//      --- p2にbackup2に入れる ---
//      backup2 = document.getElementById('p2').textContent;



```

動くなら、なぜ前のコードはあんなに長かったり、記号が多かったりしたの？」と思いますよね。実は、私のコードは
** 将来、このプログラムが大きく複雑になっても壊れないようにするための防具 **をつけていたのです。

セミコロン（;）:
役割: 「ここで命令文はおしまい」という区切り（句読点の「。」）。
理由: 無くてもブラウザが勝手に補ってくれますが、読み間違い（バグ）を防ぐために書くのが「推奨されるマナー」です。

let（変数の宣言）:
役割: 「この名前を使います！」という予約宣言。
理由: let を書かないと「誰でも使える共有物」になってしまい、他のプログラムと名前が被って誤動作する原因になります。

```