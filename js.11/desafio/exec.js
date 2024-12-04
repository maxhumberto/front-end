$(document).ready(function () {
    $('#enviar').on('click', function () {
        // Capturar os dados do formulário
        const titulo = $('#titulo').val();
        const conteudo = $('#conteudo').val();

        // Validação básica
        if (!titulo || !conteudo) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Enviar os dados para a API
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                title: titulo,
                body: conteudo,
                userId: 1 // Simula um usuário autenticado
            }),
            success: function (resposta) {
                // Exibir o feedback
                $('#feedback').html(`
                    <p><strong>ID do Post:</strong> ${resposta.id}</p>
                    <p><strong>Título:</strong> ${resposta.title}</p>
                    <p><strong>Conteúdo:</strong> ${resposta.body}</p>
                `);
            },
            error: function (erro) {
                $('#feedback').text(`ERRO: ${erro}`);
            }
        });
    });
});
