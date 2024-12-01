class Pessoa{
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
        } else if (p2.idade > p1.idade) {
            console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
            } else {
                console.log(`${p1.nome} e ${p2.nome} têm a mesma idade.`);
            }
        }
    
const Humberto = new Pessoa('Humberto', 40);
const João = new Pessoa('João', 30);

compararPessoas(Humberto, João);