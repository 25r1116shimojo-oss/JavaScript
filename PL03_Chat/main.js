
let nm= document.getElementById('name')
let ch = document.getElementById('chat')
let win = document.getElementById("window")
let nam =  ''
function push(){
    nam = nm.value
    if (nam == 'A'){
       nam = '<span style="color:red;">' + nam
    } else if (nam == 'B'){
        nam = '<span style="color:blue;">' + nam
    } else　if(nam == 'C'){
        nam = '<span style="color:green;">' + nam
    } else{
        nam = '<span style="color:#666;">' + nam
    }
    win.innerHTML += nam + 'さん：' + ch.value + '</span><br>'
}
function reset(){
    win.innerHTML = ''
}