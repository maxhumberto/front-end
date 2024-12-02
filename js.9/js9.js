document.getElementById("fizzbuzz-btn").addEventListener("click", function () {
    const n = parseInt(document.getElementById("fizzbuzz-input").value);
    const output = document.getElementById("fizzbuzz-output");
  
    // Limpa os resultados anteriores
    output.innerHTML = "";
  
    if (isNaN(n)) {
      alert("Por favor, insira um número válido.");
      return;
    }
  
    for (let i = 1; i <= n; i++) {
      const li = document.createElement("li");
      if (i % 3 === 0 && i % 5 === 0) {
        li.textContent = "FizzBuzz";
      } else if (i % 3 === 0) {
        li.textContent = "Fizz";
      } else if (i % 5 === 0) {
        li.textContent = "Buzz";
      } else {
        li.textContent = i;
      }
      output.appendChild(li);
    }
  });
  
  // Calculadora Functionality
  document.getElementById("calc-btn").addEventListener("click", function () {
    const num1 = parseFloat(document.getElementById("calc-num1").value);
    const num2 = parseFloat(document.getElementById("calc-num2").value);
    const operation = document.getElementById("calc-operation").value;
    const output = document.getElementById("calc-output");
  
    if (isNaN(num1) || isNaN(num2)) {
      output.textContent = "Por favor, insira números válidos.";
      return;
    }
  
    const result = 
      operation === "+" ? num1 + num2 :
      operation === "-" ? num1 - num2 :
      operation === "*" ? num1 * num2 :
      operation === "/" ? num1 / num2 :
      "Operação inválida";
  
    output.textContent = `Resultado: ${result}`;
  });
  