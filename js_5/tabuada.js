const num = 7;
let tabela = "";
for (let i = 0; i < 10; i++) {
    let resultado = num * i;
   tabela += `${num} x ${i} = ${resultado}\n`
}
    
console.log(`Tabuada do ${num}:\n${tabela}`);