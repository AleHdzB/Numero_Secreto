var numeroSecreto = GenerarNumeroSecreto();
var intetos = 1;


function verificarIntento() {
    var numeroIngresado = parseInt(document.getElementById('valorUsuario').value);

    console.log(numeroSecreto);
    if(numeroIngresado === numeroSecreto){
        asignarTextoElemento('p', `¡Felicitaciones! Ganaste en ${intetos} ${intetos === 1 ? 'intento' : 'intentos'}`);	
        
    }
    else{
        if(numeroIngresado > numeroSecreto){
            asignarTextoElemento('p', '¡Fallaste! El número secreto es MENOR');
        }
        else{
            asignarTextoElemento('p', '¡Fallaste! El número secreto es MAYOR');
        }
        intetos++;
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