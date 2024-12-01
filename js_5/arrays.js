let frutas = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Pera', 'Manga'];

frutas.push('abacate');
frutas[3]="morango";
frutas.pop()
delete frutas[2]
frutas.unshift ['Laranja'];


let frutasSemBanana = frutas.filter(function(fruta) {
    return fruta !== 'Banana';
});


let frutasDeliciosas = frutas.map(function(fruta) {
    return fruta + ' é deliciosa';
    });
   

    let frutasMaiusculas = frutas.map(function(fruta) {
        return fruta.toUpperCase();
    });


console.log(frutas);
console.log(frutas[0])
console.log(frutas[frutas.length -1])
console.log(frutasMaiusculas); 
console.log(frutasDeliciosas); 
console.log(frutasSemBanana);