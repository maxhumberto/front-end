const pessoa ={
    nome: 'Humberto S Lucas',
    idade: 40,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }

};

pessoa.descrever();
pessoa.nome = "Bruno";
pessoa.idade = 30;
pessoa.descrever();