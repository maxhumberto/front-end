$(document).ready(function  () {
    
    $('#buscar-clima').on('click', function () {
        const cidade = $('#cidade').val().trim();

        if (cidade === '') {
            alert('Por favor, digite o nome de uma cidade.');
            return;
        }

        
        const apiKey = "a8dc9ee19fc432c4c66931138a8797f2"; 
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`,
            type: 'GET',
            success: function (resposta) {
                $('#resultado').removeClass('oculto');
                $('#erro').addClass('oculto');

                $('#cidade-nome').text(resposta.name);
                $('#temperatura').text(resposta.main.temp);
                $('#condicoes').text(resposta.weather[0].description);
                $('#umidade').text(resposta.main.humidity);
                $('#vento').text((resposta.wind.speed * 3.6).toFixed(2)); // Converte de m/s para km/h
            },
            error: function () {
                $('#erro').removeClass('oculto');
                $('#resultado').addClass('oculto');
            }
        });
    });
});