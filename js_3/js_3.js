// let password = "";

// const askPassword = () => {
//     rl.question("Digite a senha: ", (input) => {
//         password = input; // Armazena o valor digitado
//         while (password !== "1234") {
//             console.log("Senha incorreta. Tente novamente.");
//             return askPassword(); // Solicita novamente
//         }
//         console.log("Acesso permitido!");
//         });
//         };



// let i = 1;

// while (true) { // "true" é sempre verdadeiro
//     console.log(`Loop infinito: ${i}`);
//     i++;
//     if (i > 5) break; // Encerra o loop quando `i > 5`
// }



// let i = 1;

// while (true) { 
//     console.log(`Loop infinito: ${i}`);
//     i++;
//     if (i > 5) break; 
// }



let num = Number(prompt('digite um numero:'))
let tabela = "";
for(let i = 1; i <= 10; i++){
    let resultado = num * i;
    tabela += `${num} x ${i} = ${resultado}\n`
   
}

alert(`Tabuada do ${num}:\n${tabela}`);




