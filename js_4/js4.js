let inicio = parseInt(prompt("Digite o número inicial do intervalo:"));
let fim = parseInt(prompt("Digite o número final do intervalo:"));

let suma = 0;

// if (!isNaN(inicio) && !isNaN(fim) && inicio <= fim) {

for (let i = inicio; i <= fim; i++) {   
    suma += i;
    }

    alert(`A soma dos números no intervalo de ${inicio} a ${fim} é: ${suma}`);
//     alert(`A soma de todos os números no intervalo de ${inicio} a ${fim} é: ${suma}`);
// } else {
//     alert("Por favor, insira valores válidos, com o número inicial menor ou igual ao número final.");
// }