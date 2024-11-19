// console.log('hello world!')

// var nome = "Humberto";
// console.log(nome); // "Humberto"

// //string



// //number
// let idade = 30;
// idade = 31; // Reatribuível
// console.log(idade); // 31

// //bolean
// let aprovado = true;
// let rejeitado = false;

// //Undefined
// let indefinido; // Não inicializada
// console.log(indefinido); // undefined

// //Null
// let vazio = null; // Valor intencionalmente vazio

// //Objeto
// const pessoa = { nome: "Humberto", idade: 40 };

// //Array
// let frutas = ["maçã", "banana", "laranja"];

// let altura = 1.80; // float decimal

// //Funções
// const saudacao = function(nome) {
//     return `Olá, ${nome}!`;
// };
// console.log(saudacao("Humberto")); // "Olá, Humberto!"
// alert(`ola`)
// confirm(`sao paulo`)
// prompt(`campeao`)

// let numero1 = Number( prompt ("Digite o primeiro número"));
// let numero2 = Number(prompt(`digite outro numero`));

// // Somando os números
// let soma = numero1 + numero2;

// // Exibindo o resultado
// alert(`A soma é: ${soma}`);


let n1 = Number(
    prompt('Escreva um número')
)
let n2 = Number(
    prompt('Escreva outro número')
)
let resultado = n1 + n2
alert(`A soma entre ${n1} e ${n2} é ${resultado}`)

resultado = n1 - n2
alert(`A subtração entre ${n1} e ${n2} é ${resultado}`)

resultado = n1 * n2
alert(`A multiplicação entre ${n1} e ${n2} é ${resultado}`)

resultado = n1 / n2
alert(`A divisão entre ${n1} e ${n2} é ${resultado}`)

resultado = n1 % n2
alert(`O módulo entre ${n1} e ${n2} é ${resultado}`)