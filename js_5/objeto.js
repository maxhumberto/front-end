const Humberto ={
    nome: 'Humberto S Lucas',
    idade: 40,

};
console.log(Humberto.nome);
console.log(Humberto.idade);
console.log(Humberto);

Humberto.altura = 1.82;
console.log(Humberto);

delete Humberto.idade;
console.log(Humberto);
