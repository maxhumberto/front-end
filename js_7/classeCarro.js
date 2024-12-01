class Carro {
    cor;
    marca;
    gastoMedioPorKM;

    constructor(cor, marca, gastoMedioPorKM){
        if (gastoMedioPorKM <= 0) {
            throw new Error("O gasto médio por km deve ser maior que zero.");
        }
        this.cor = cor;
        this.marca = marca;
        this.gastoMedioPorKM = gastoMedioPorKM;
        
    }
    descrever(){
        return (`Este carro é ${this.cor} e é uma ${this.marca} com um gasto medio por km de ${this.gastoMedioPorKM.toFixed(2)}`);
    }

    calcularGastoDePerscurso( distancia, precoCombustivel ){
        if (distancia <= 0) {
            throw new Error("A distancia deve ser maior que zero.");
            }
            if(precoCombustivel <=0){
                throw new Error("O preco do combustivel deve ser maior que zero.");
            }
            return(distancia * this.gastoMedioPorKM) * precoCombustivel;
            }
}

const renegate = new Carro('prata', 'Jeep', 1/5);

console.log(renegate.descrever());

const gasto = renegate.calcularGastoDePerscurso(70.5, 5.79);
console.log(`O gasto total para a viagem será de R$ ${gasto.toFixed(2)}`);