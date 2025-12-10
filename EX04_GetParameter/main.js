// 出力準備
let output = document.getElementById('output')

// GETパラメータの取得する処理
let url = new URL(window.location.href)
let params = url.searchParams
let msg = params.get('msg')
// let msg = params.msg

console.log(params)

output.innerHTML = msg