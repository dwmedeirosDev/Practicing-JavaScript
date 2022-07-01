// ### DESESTRUTURAÇÃO ###
const [input1, input2] = document.querySelectorAll("input");
const image = document.querySelector("img");
const click = document.querySelector("button");

function change(){

    if(input1.value && input2.value.length >= 8){
        // Remove um atributo
        click.removeAttribute("disabled");
        // Adiciona um atributo
        image.classList.add("active");

    }else{
        // Cria um novo atributo(nome, valor)
        click.setAttribute("disabled", "disabled");
        image.classList.remove("active");
    }

}
// Método - Adicionar um evento
input1.addEventListener("input", change);
input2.addEventListener("input", change);