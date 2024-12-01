// let palavra = prompt("Digite uma string:");


// let reverte = palavra.split('').reverse().join('');

// // Exibe o resultado
// alert(`A string invertida é: ${reverte}`);


// let nome = "Palavra"
// let invertida = ''
// let i = nome.length - 1
// while(i >= 0){
//     invertida += nome[i]
//     i--;
// }
// console.log(`A String ${nome} invertida é ${invertida}`)



let palavra = prompt("Digite uma string:");


let reverte = "";


for (let i = palavra.length - 1; i >= 0; i--) {
    reverte += palavra[i];
}

// Exibe o resultado
alert(`Palavra original: ${palavra}`);
alert(`Palavra invertida: ${reverte}`);