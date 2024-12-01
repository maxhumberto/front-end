// function escrevaMeunome() {
//     let nome = prompt("Qual é o seu nome?");
//     console.log(`Meu nome é ${nome}`);
//         }

// escrevaMeunome();

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function escrevaMeunome() {
//     rl.question("Qual é o seu nome? ", (nome) => {
//         console.log(`Meu nome é ${nome}`);
//         rl.close();
//     });
// }

// escrevaMeunome();



function escrevaMeunome(nome) {
    console.log(`Meu nome é ${nome}`);
        }

escrevaMeunome("Humberto")

function verificarIdade(idade){
    if(idade >= 18){
        console.log("Você é maior de idade");
        } else{
            console.log("Você é menor de idade");
        }
}

verificarIdade(17);