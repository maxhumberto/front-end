function calculadora(numero1, numero2, operador) {
    switch (operador) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            if (numero2 !== 0) {
                return numero1 / numero2;
            } else {
                return "Erro: divisão por zero!";
            }
        default:
            return "Operador inválido! Use +, -, *, ou /.";
    }
}

console.log(calculadora(10, 5, '+')); // Soma: 15
console.log(calculadora(10, 5, '-')); // Subtração: 5
console.log(calculadora(10, 5, '*')); // Multiplicação: 50
console.log(calculadora(10, 5, '/')); // Divisão: 2
console.log(calculadora(10, 0, '/')); // Divisão por zero: Erro
console.log(calculadora(10, 5, '^')); // Operador inválido


// function calculadora(num1, num2, operacao){
//     let result;
//     if(operacao === '+'){
//       result = num1 + num2
//     }else if(operacao === '-'){
//       result = num1 - num2
//     }else if(operacao === '*'){
//       result = num1 * num2
//     }else if(operacao === '/'){
//       result = num1 / num2
//     }
  
//     return result
//   }