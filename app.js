
var numeroUsuario = 0;
var numeroIntentos = 1;
var maxIntentos = parseInt(prompt('Dame el número máximo de intentos: '));
console.log(`Máximo de intentos: ${maxIntentos}`);
var maxNumeroSecreto = parseInt(prompt('Dame el número máximo para el numero secreto: '));
console.log(`Máximo número secreto: ${maxNumeroSecreto}`);
var numeroSecreto = Math.floor(Math.random() * maxNumeroSecreto) + 1;

console.log(`Número secreto: ${numeroSecreto}`);

while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Dame un número entre 1 y ${maxNumeroSecreto}`));	

    console.log(`Intento ${numeroIntentos}: ${numeroUsuario}`);
    if ( numeroUsuario == numeroSecreto){
        alert(`Acertaste, el número secreto era: ${numeroSecreto}. Lo hiciste en ${numeroIntentos} ${numeroIntentos == 1 ? 'intento' : 'intentos'}`);	
    } else{
        if (numeroUsuario > numeroSecreto){
            alert('No acertaste, el número secreto es MENOR');
        }
        else{
            alert('No acertaste, el número secreto es MAYOR');
        }
        numeroIntentos++;
        if (numeroIntentos > maxIntentos){
            alert(`Llegaste al número máximo de ${maxIntentos} intentos. El numero secreto era: ${numeroSecreto}`);
            break;
        }
    }
}
