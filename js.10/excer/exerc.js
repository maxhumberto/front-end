$('#obterDicas').on('click', function () {
    $.ajax({
      url: 'https://api.adviceslip.com/advice',
      type: 'GET',
      success: function (resposta) {
        const dica = JSON.parse(resposta)
        $('#mensagem').text(dica.slip.advice)
      },
      error: function (erro) {
        console.error(`Erro: ${erro}`)
      }
    })
  })