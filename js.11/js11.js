$('#buscar').on('click', ()=> {
    $.ajax({
    url: 'https://reqres.in/api/users',
    type: 'GET',
    success: function (resposta) {
        $("#usuarios-lista").empty()

    
    resposta.data.forEach(function (usuario) {
        $("#usuarios-lista").append("<li> " + usuario.first_name + " " + usuario.last_name +  "</li>");
    });
},
error: function (erro) {
    // Exibe mensagem de erro caso a requisição falhe
    $("#usuarios-lista").append(`<li>ERRO: ${erro.statusText}</li>`);
}
});
});


// $("#buscar").on('click', ()=>{
//     $.ajax({
//       url: "https://reqres.in/api/users",
//       type: "GET",
//       success: function(resposta){
//         $("#usuarios-lista").empty()
  
//         resposta.data.forEach(usuario => {
//           $("#usuarios-lista").append(`<li>${usuario.first_name} ${usuario.last_name}</li>`)
//         });
//       },
//       error: function(erro){
//         $("#usuarios-lista").append(`<li>ERRO: ${erro}</li>`)
//       }
//     })
//   })