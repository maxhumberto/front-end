class pessoas{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
    if (peso <= 0) {
        throw new Error("O gasto médio por km deve ser maior que zero.");
    }
    if (altura <= 0) {
        throw new Error("A altura deve ser maior que zero.");
    }
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
    }
    calcularImc(){
        let imc = this.peso / (this.altura * this.altura);
        return imc.toFixed(2); 
        }
        classificarImc() {
            const imc = this.calcularImc();
            if (imc < 18.5) {
                return "Abaixo do peso";
            } else if (imc >= 18.5 && imc < 24.9) {
                return "Peso normal";
            } else if (imc >= 25 && imc < 29.9) {
                return "Sobrepeso";
            } else if (imc >= 30 && imc < 34.9) {
                return "Obesidade grau 1";
            } else if (imc >= 35 && imc < 39.9) {
                return "Obesidade grau 2";
            } else {
                return "Obesidade grau 3";
            }
        }    
}

const humberto = new pessoas("Humberto", 122, 1.82);
console.log(humberto.calcularImc());

console.log(`IMC de ${humberto.nome}: ${humberto.calcularImc()}`);
console.log(`Classificação: ${humberto.classificarImc()}`);