var numeroSecreto = GenerarNumeroSecreto();


function verificarIntento() {
    var numeroIngresado = parseInt(document.getElementById('valorUsuario').value);

    console.log(numeroSecreto);
    if(numeroIngresado === numeroSecreto){
        asignarTextoElemento('h1', '¡Felicitaciones! Ganaste');
        asignarTextoElemento('p', 'El número secreto era ' + numeroSecreto);
    }
    else{
        if(numeroIngresado > numeroSecreto){
            asignarTextoElemento('h1', '¡Fallaste! El número secreto es menor');
        }
        else{
            asignarTextoElemento('h1', '¡Fallaste! El número secreto es mayor');
        }
    }
    return;
}

function asignarTextoElemento(elemento, texto) {
    var elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
    
}

function GenerarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Adivina el número secreto que está entre 1 y 10');