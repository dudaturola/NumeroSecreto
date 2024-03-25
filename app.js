alert('Bem-vindo ao advinhe o número');
let numeroSecreto = 54;

let numeroErradomenor = 'O número é maior que ';
let numeroErradomaior = 'O número é menor que ';
let acertou = false;

while (!acertou) {
    let numeroDigitado; 
    do {
        numeroDigitado = prompt('Digite um número entre 0 e 100:');
    } while (isNaN(numeroDigitado));
    
    numeroDigitado = Number(numeroDigitado);

    if(numeroDigitado == numeroSecreto){
        acertou = true;
        break;
    }   else if( numeroDigitado < numeroSecreto) {
        alert(numeroErradomenor + numeroDigitado);
    }   else {
        alert(numeroErradomaior + numeroDigitado);
    }
} 