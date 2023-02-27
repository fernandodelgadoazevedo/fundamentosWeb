const nome = document.querySelector('#nome')

function meuNome() {
let txtNome = document.querySelector('#txtNome');

if (nome.value === "") {
    txtNome.textContent = "";
    txtNome.style.color = 'black';
} else if (nome.value.length < 3) {
    console.log('Nome muito curto')
    txtNome.innerHTML = 'Curto'
    txtNome.style.color = 'red'
} else {
    console.log("Nome OK")
    txtNome.innerHTML = 'OK'
    txtNome.style.color = 'green'
}
}