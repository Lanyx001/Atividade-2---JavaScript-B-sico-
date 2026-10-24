/* QUESTÃO 1 - Adivinhe o Número */

let secreto = Math.floor(Math.random() * 20) + 1;

function adivinhar() {
    let palpite = Number(document.getElementById("palpite").value);
    let resultado = document.getElementById("resultado1");

    if (palpite < 1 || palpite > 20 || !Number.isInteger(palpite)) {
        resultado.textContent = "Digite um número inteiro de 1 a 20.";
    } else if (palpite < secreto) {
        resultado.textContent = "O número secreto é maior!";
    } else if (palpite > secreto) {
        resultado.textContent = "O número secreto é menor!";
    } else {
        resultado.textContent = "Parabéns! Você acertou!";
    }
}


/* QUESTÃO 2 - Pedra, Papel ou Tesoura */

function jogar() {
    let usuario = prompt("Digite: pedra, papel ou tesoura").toLowerCase().trim();

    let opcoes = ["pedra", "papel", "tesoura"];
    let computador = opcoes[Math.floor(Math.random() * 3)];

    if (!opcoes.includes(usuario)) {
        alert("Opção inválida!");
        return;
    }

    let resultado;

    if (usuario === computador) {
        resultado = "Empate!";
    } else if (
        (usuario === "pedra" && computador === "tesoura") ||
        (usuario === "papel" && computador === "pedra") ||
        (usuario === "tesoura" && computador === "papel")
    ) {
        resultado = "Você venceu!";
    } else {
        resultado = "O computador venceu!";
    }

    console.log("Você escolheu: " + usuario);
    console.log("Computador escolheu: " + computador);
    console.log(resultado);

    document.getElementById("resultado2").textContent =
        "Você: " + usuario + " | Computador: " + computador +
        " | " + resultado;
}


/* QUESTÃO 3 - Tabuada */

function mostrarTabuada() {
    let numero = Number(document.getElementById("numero").value);
    let resultado = "";

    for (let i = 1; i <= 10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }

    document.getElementById("resultado3").textContent = resultado;
}


/* QUESTÃO 4 - Triângulo de Asteriscos */

function desenharTriangulo() {
    let linhas = Number(document.getElementById("linhas").value);
    let resultado = "";

    if (!Number.isInteger(linhas) || linhas < 1) {
        document.getElementById("resultado4").textContent =
            "Digite uma quantidade válida de linhas.";
        return;
    }

    for (let i = 1; i <= linhas; i++) {
        resultado += "*".repeat(i) + "\n";
    }

    document.getElementById("resultado4").textContent = resultado;
}


/* QUESTÃO 5 - Soma da Série */

function somarSerie() {
    let termos = Number(document.getElementById("termos").value);
    let numero = "";
    let soma = 0;
    let serie = [];

    if (!Number.isInteger(termos) || termos < 1) {
        document.getElementById("serie").textContent =
            "Digite uma quantidade válida de termos.";
        document.getElementById("resultado5").textContent = "";
        return;
    }

    for (let i = 1; i <= termos; i++) {
        numero += "1";
        serie.push(numero);
        soma += Number(numero);
    }

    document.getElementById("serie").textContent =
        serie.join(" + ");

    document.getElementById("resultado5").textContent =
        "A soma é: " + soma.toLocaleString("pt-BR");
}