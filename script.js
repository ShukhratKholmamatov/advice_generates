let id = document.getElementById('id');
let advice = document.getElementById('advice');
let generate = document.getElementById('generate');

const url = 'https://api.adviceslip.com/advice';

let generateAdvice = () => {
    fetch(url)
    .then( data => data.json())
    .then ( item => {
            id.innerText = item.slip.id,
            advice.innerText = item.slip.advice,
            console.log(item)
    });
}

generate.addEventListener("click", generateAdvice);