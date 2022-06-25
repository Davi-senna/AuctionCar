var flagPotenciaHidden = false;
document.querySelectorAll(".hidden-ativo").forEach(
    tag => {
        tag.hidden = true;
    }
)
flagPotenciaHidden = true;



const paginaAtiva = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(
    link => {
        if (link.href.includes(`${paginaAtiva}`)) {
            link.classList.add('ativo');
        }
    }
)

//Função para inverter a visibilidade
const trocarPotencia = () => {
    document.querySelectorAll(".troca").forEach(
        element => {
            if (element.hidden == true) {
                element.hidden = false;
            } else if (element.hidden == false) {
                element.hidden = true;
            }
        }
    )
}

var indiceImage = 1;


function nextImage() {
    if (indiceImage != 4) {
        indiceImage += 1;
        var elemento = document.querySelector(`.s${indiceImage}`)
        elemento.classList.add("next-element")
    } else {
        var elemento = document.querySelectorAll(".slide").forEach(
            img => img.classList.remove("next-element")// Ao remover todas as classes volta para a primeira imagem
        )
        indiceImage = 1
    }
    var dots = document.querySelectorAll(".ball-link").forEach(
        dot => dot.classList.remove("img-atual")
    )
    var dotAtual = document.querySelector(`.b${indiceImage}`)
    dotAtual.classList.add("img-atual")
}

function backImage() {
    if (indiceImage != 1) {
        var elementoAtual = document.querySelector(`.s${indiceImage}`)
        var elementoAnterior = document.querySelector(`.s${indiceImage - 1}`)
        if (elementoAtual.classList.contains('next-element') == true) {
             //Função de verificar se há classe dessa forma, voltando uma imagem
            elementoAtual.classList.remove("next-element")
        } else if(elementoAnterior.classList.contains('next-element') == true) {
            elementoAnterior.classList.remove("next-element")
            //Caso o elemento anterior já tenha uma margem, ela será removida
        }else{
            elementoAtual.classList.add("back-element")
        }
        indiceImage -= 1
    } else if (indiceImage == 1) { // se o indice for o da primeira imagem ele vai para a ultima
        var numElemento = 0
        var elementoAtual = document.querySelectorAll(".slide").forEach(
            element => numElemento++
        )
        for (i = 1; i != numElemento; i++) {
            var elementoAtual = document.querySelector(`.s${i}`)
            elementoAtual.classList.add("next-element")
        }
        indiceImage = 4
    }
    var dots = document.querySelectorAll(".ball-link").forEach(
        dot => dot.classList.remove("img-atual")
    )
    var dotAtual = document.querySelector(`.b${indiceImage}`)
    dotAtual.classList.add("img-atual")
}

// const msg = () => {
//     var inputs = document.querySelectorAll(".input-dados")
//     console.log
//     // if(){


//     // }
//     alert("aa")
// }