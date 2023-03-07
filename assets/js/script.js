let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false
//let nome = window.document.getElementById('nome')
//let email = document.querySelector('#email')
//let assunto = document.querySelector('#assunto')

function meuNome() {
let txtNome = document.querySelector('#txtNome');

if (nome.value === "") {
    txtNome.textContent = "";
    txtNome.style.color = 'black';
} else if (nome.value.length < 3 || nome.value.indexOf(" ") === -1) {
        txtNome.innerHTML = 'Curto'
    txtNome.style.color = 'red'
} else {
        txtNome.innerHTML = 'OK'
    txtNome.style.color = 'green'
    nomeOK=true
}

}

function validaEmail() {
    let txtEmail =  document.querySelector('#txtEmail');

    if (email.value === "") {
        txtEmail.textContent = "";
        txtEmail.style.color = 'black';
    }
    else if (email.value.indexOf('@')==-1 || email.value.indexOf('.')==-1) {
    txtEmail.innerHTML = 'E-mail Inválido';
    txtEmail.style.color = 'red';
    } else  {
        txtEmail.innerHTML = 'E-mail válido';
        txtEmail.style.color = 'green';
        emailOK = true
    }
}

function validaAssunto (){
    let txtAssunto = document.querySelector('#txtAssunto');

    if(assunto.value ===""){
        txtAssunto.textContent = "";
        txtAssunto.style.color = "black";
    }

    else if (assunto.value.length >=100) {
        txtAssunto.innerHTML = 'Texto é Muito Grande, Digite no máximo 100 carateres';
        txtAssunto.style.color = 'red';
        txtAssunto.style.display = 'block';
    }
    else {
        txtAssunto.style.display = 'Texto OK';
        txtAssunto.style.color = 'green'; 
        assuntoOK = true
    
    }
}
    function enviar (){
        if (nomeOK == true && emailOK == true && assuntoOK == true) {
            alert("Formulário enviado com sucesso!")
    }  
    else { alert("Preencha o Formulario")
    }
}

function mapaZoom () {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
    }

function mapaNormal () {
        mapa.style.width = '400px'
        mapa.style.height = '250px'
        }    