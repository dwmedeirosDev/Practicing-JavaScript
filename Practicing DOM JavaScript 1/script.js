// Ligar e Desligar a Luz

function onLight(){
    document.body.style.backgroundColor = "white";
}

function offLight(){
    document.body.style.backgroundColor = "black";
}

// #######################################################

const list = document.querySelectorAll(".test");
const btn = document.querySelectorAll(".conteiner-button button");

function openInformation(){
    list[0].innerText = "Funcionou";
    list[1].innerText = "Funcionou";
    list[2].innerText = "Funcionou";
    btn[0].innerText = "Funcionou";    
}
