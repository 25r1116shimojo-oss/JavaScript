// let output = document.getElementById('output')

const arr01 = []
function push(){
    output.innerHTML = ""
    fetch('../data/data.json')
        .then(response => response.json())
        .then(json => {
            for (let index = 0; index < json.members.length; index++) {
            const element = json.members[index];
            output.innerHTML += '名前：' + element.name + '<br>年齢：' + element.age + '<br>'}

        })
        
}

// const arr02 = []
// function push(){
//     output.innerHTML = ""
//     fetch('http://localhost/data/employees')
//         .then(response => response.json())
//         .then(json => {
//             console.log(json.members)
//             arr01.push(json.members[1])
//             console.log(arr02)
//             for (let index = 0; index < json.members.length; index++) {
//             const element = json.members[index];
//             output.innerHTML += '名前：' + element.name + '<br>年齢：' + element.age + '<br>'}

//         })    
// }
