let nome = "Humberto";

function verificarNome(nome) {
    switch (nome) {
        case 'Humberto':
            return "Bonito";
        case 'Ana Maria':
            return "Namorada";
        case 'Terezinha':
            return "Elvira";
        default:
            return "Nome não reconhecido";
    }
}

console.log(verificarNome("Ana Maria")); // Saída: Namorada
console.log(verificarNome("Carlos")); // Saída: Nome não reconhecido