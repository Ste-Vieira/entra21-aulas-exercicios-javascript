
let escolha = prompt("Escolha a variável para executar:")
console.log("1 - String");
console.log("2 - Number");
console.log("3 - Boolean");
console.log("4 - Array");

switch (escolha) {
    case 1:
        string();
        break;
    case 2:
        number();
        break;
    case 3:
        boolean();
        break;
    case 4:
        array();
        break;
    default:
        console.log("Opção inválida")
        break;
}



function string() {

    let tempo = "Verão"
    console.log(tempo);
    console.log("O tipo da variável tempo é " + typeof (tempo));

    if (tempo == "Inverno") {
        console.log("Vamos virar sapo de tanta chuva");
    } else {
        console.log("Saudades verão");

    }
}

function number() {

    let idade = 28;
    console.log("O tipo da variável tempo é " + typeof (idade));

    if (idade <= 18) {
        console.log("Menor de idade");
    } else {
        console.log("Ta ficando velhinha");
    }
}

function boolean() {
    tempo = true;
    console.log("Agora a variável tempo é " + (tempo));

    if (tempo = true) {
        console.log("Estamos no inverno");
    } else {
        console.log("Estamos na primavera");
    }

}

function array() {
    let estacoes = ["Inverno", "Primavera", "Verão", "Outono"]
    console.log(estacoes);
    console.log("A variável estacoes é do tipo " + typeof (estacoes));
    for (let contador = 0; contador < estacoes.length; contador++) {
        console.log("Repetindo com for o índice " + contador + "=" + estacoes[contador]);

    }


    estacoes.forEach(item => {
        console.log("Utilizando forEach para listar " + item);
    });
}