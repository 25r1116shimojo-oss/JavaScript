// チャットの入力欄
const input = document.getElementById('message')
// チャットログ(出力先)
const output = document.getElementById('output')

const ASAN = 'A'
const BSAN = 'B'

function sendMessage(name) {
    output.innerHTML += `<span class="color-${name}">${input.value}</span><br>`
    input.value = ''
}
function resetMessage() {
    input.value = ''
    output.innerHTML = ''
}