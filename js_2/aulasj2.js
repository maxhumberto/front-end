// // operadores relacionais
// let a=2
// let b=3
// let c=5
// let d= "5"

// console.log(a>b) // false
// console.log(a<b) // true
// console.log(a==b) // false
// console.log(a>=5) // false
// console.log(c==d)    // true
// console.log(c===d) // false
// console.log(c!=d) // false



// // Função para calcular a média
// function calcularMedia(nota1, nota2, nota3) {
//     return (nota1 + nota2 + nota3) / 3;
// }

// // Função para verificar o status do aluno
// function verificarStatus(media) {


// Capturando as notas do aluno
let nota1 = parseFloat(prompt("Digite a primeira nota:")); // Converte para número
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

// Calculando a média
let media = (nota1 + nota2 + nota3) / 3;

// Verificando o status do aluno
let status;
if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5 && media < 7) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}


// if (media >= 7) {
//     alert = "Aprovado";
// } else if (media >= 5 && media < 7) {
//     alert = "Recuperação";
// } else {
//     alert = "Reprovado";
// }


// Exibindo o resultado com alert
alert(`Média: ${media.toFixed(2)}\nStatus: ${status}`);