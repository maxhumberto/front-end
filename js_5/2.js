function verificarNome(nome) {
    let mensagem;

    switch (nome) {
        case 'Humberto':
            mensagem = "Bonito";
            break;
        case 'Ana Maria':
            mensagem = "Namorada";
            break;
        case 'Terezinha':
            mensagem = "Elvira";
            break;
        default:
            mensagem = "Nome não reconhecido";
    }

    return mensagem;
}

console.log(verificarNome("Humberto")); // Saída: Bonito
console.log(verificarNome("João"));