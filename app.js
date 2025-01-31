var numeroSecreto = 0;
var intetos = 0;


function verificarIntento() {
    var numeroIngresado = parseInt(document.getElementById('valorUsuario').value);

    console.log(numeroSecreto);
    if(numeroIngresado === numeroSecreto){
        asignarTextoElemento('p', `¡Felicitaciones! Ganaste en ${intetos} ${intetos === 1 ? 'intento' : 'intentos'}`);	
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        // El usuario no acertó.
        if(numeroIngresado > numeroSecreto){
            asignarTextoElemento('p', '¡Fallaste! El número secreto es MENOR');
        }
        else{
            asignarTextoElemento('p', '¡Fallaste! El número secreto es MAYOR');
        }
        intetos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function asignarTextoElemento(elemento, texto) {
    var elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
    
}

function GenerarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Adivina el número secreto que está entre 1 y 10');
    //Generar el numero secreto
    numeroSecreto = GenerarNumeroSecreto();
    //Inicializar el contador de intentos
    intetos = 1;
}
function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //Deshabilitat el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');  
    
}

condicionesIniciales();