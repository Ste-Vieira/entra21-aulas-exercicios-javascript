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






// Crie uma variável para cada tipo existente com let ou var
// string
// number
// boolean
// array
// object json
// function
// Exiba em log o valor de cada variável e o tipo da variável com typeof(variável)
// Para cada variável faça um IF que tome uma decisão e também no ELSE
// Para uma variável string e number, faça um switch que tome uma decisão
// Para uma variável do tipo array, faça as repetições possíveis
// for com índice
// foreach
// Se cada exercício anterior foi feito de forma unica no arquivo JS, separe-os em funções especificas

// let numero = 
