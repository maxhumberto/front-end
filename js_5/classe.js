class Pessoa {
    nome; 
    idade; 
        descrever(){
            console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);

        }
}

const Humberto = new Pessoa();
Humberto.nome = "Humberto S Lucas";
Humberto.idade = 40;


Humberto.descrever();