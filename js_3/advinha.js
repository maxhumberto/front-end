let numeroSorteado = Math.floor(Math.random() * 100) + 1;


let tentativasRestantes = 10;

alert("Bem-vindo ao Jogo de Adivinhação!");
alert("Tente adivinhar o número que o computador escolheu entre 1 e 100.");
alert(`Você tem ${tentativasRestantes} tentativas.`);

while (tentativasRestantes > 0) {
    
    const tentativa = parseInt(prompt("Digite um número entre 1 e 100:"));

    if (isNaN(tentativa) || tentativa < 1 || tentativa > 100) {
        alert("Por favor, insira um número válido entre 1 e 100.");
        continue;
    }

    
    if (tentativa === numeroSorteado) {
        alert("Acertou! Parabéns, você adivinhou o número.");
        break;
    } else if (tentativa < numeroSorteado) {
        alert("O número sorteado é MAIOR que o número que você escolheu.");
    } else {
        alert("O número sorteado é MENOR que o número que você escolheu.");
    }

   
    tentativasRestantes--;

    if (tentativasRestantes > 0) {
        alert(`Você ainda tem ${tentativasRestantes} tentativas.`);
    } else {
        alert(`Você ficou sem tentativas. O número correto era ${numeroSorteado}.`);
    }
}

alert("Fim do jogo!");