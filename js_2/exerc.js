let idade = parseInt(prompt("Digite a idade do competidor:"));

    
    if (idade < 6) {
        alert("Idade não permitida para competir.");
    } else if (idade >= 6 && idade <= 12) {
        alert("Categoria: Infantil");
    } else if (idade >= 13 && idade <= 17) {
        alert("Categoria: Juvenil");
    } else if (idade >= 18) {
        alert("Categoria: Adulto");
    } else {
        alert("Idade inválida. Por favor, insira um número válido.");
    }
