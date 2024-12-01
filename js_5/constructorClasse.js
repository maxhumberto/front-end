class Pessoa {
    nome; 
    idade; 
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 1984 - idade;
        }
        descrever(){
            console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);

        }
}

const Humberto = new Pessoa(`Humberto`, 40);
const João = new Pessoa(`João`, 30);


Humberto.descrever();
João.descrever();


console.log(Humberto);