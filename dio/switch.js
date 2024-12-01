let fruta = "acai"

switch(fruta){
    case "laranja":
        console.log("Você escolheu uma laranja");
        break;

    case "banana":
    case "morango":    
        console.log("Você fez uma vitamina");
        break;

    case "maça":
        console.log("Você escolheu uma maça");
        break;
    default:
        console.log("Você escolheu uma fruta desconhecida");
}