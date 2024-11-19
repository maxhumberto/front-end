alert("Olá! Seja bem-vindo ao nosso programa de interação!");


let nome = prompt("Qual é o seu nome?");
let idade = prompt("Quantos anos você tem?");
let cidade = prompt("Em que cidade você mora?");


alert(`Prazer em conhecê-lo, ${nome}! Com ${idade} anos, morando em ${cidade}, você parece ser uma pessoa incrível!`);


alert("Agora, vamos fazer alguns cálculos.");
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));


let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let modulo = num1 % num2;


alert(`Aqui estão os resultados dos cálculos: 
Soma: ${soma}
Subtração: ${subtracao}
Multiplicação: ${multiplicacao}
Divisão: ${divisao}
Módulo: ${modulo}`);


alert(`Obrigado pelo seu tempo, ${nome}! Esperamos que você volte a usar nosso programa em breve!`);