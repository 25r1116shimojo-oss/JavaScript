let output = document.getElementById('output')
let select = document.getElementById('select');

select.onchange = function() {
    let game = select.value;
    if (game === "ドラクエ"){

        fetch('http://localhost/data/employees')
        .then(response => response.json())
        .then(json => {
            for (let index = 0; index < json.members.length; index++) {
            const element = json.members[index];
            output.innerHTML +=
            `
            <dl class="prof"><div class="row">
                <dt>名前</dt>
                <dd>${element.name}</dd>
            </div>
            <div class="row">
                <dt>年齢</dt>
                <dd>${element.age}</dd>
            </div></dl>
            `
            }
        })
    } else if (game === "ポケモン"){
        output.innerHTML = ""
        fetch('../data/data.json')
        .then(response => response.json())
        .then(json => {
            for (let index = 0; index < json.members.length; index++) {
            const element = json.members[index];
            output.innerHTML += 
            `
            <dl class="prof"><div class="row">
                <dt>名前</dt>
                <dd>${element.name}</dd>
            </div>
            <div class="row">
                <dt>年齢</dt>
                <dd>${element.age}</dd>
            </div></dl>
            `
        }
        })
    }　else{
        output.innerHTML = ""
    }
}


