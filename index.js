const prompt = require("prompt-sync")();

let opcao;
let num1, num2;
let repetir;

let operacao = () => opcao;

function mensagem(){
    console.log(`Digite 1 para somar dois números
    Digite 2 para diminuir dois números
    Digite 3 para dividir
    Digite 4 para multiplicar
    Digite 5 para porcentagem`);
}

function chamarnumero() {
  while (1) {
    num1 = +prompt("Digite o primeiro número: ");

    if (isNaN(num1)) {
      console.log("Não é um número válido.");
      continue;
    }

    num2 = +prompt("Digite o segundo número: ");

    if (isNaN(num2)) {
      console.log("Não é um número válido.");
    } else {
      break;
    }
  }
}

function leropcao() {
  while (1) {
    opcao = +prompt();
    if (isNaN(opcao)) {
      console.log("Não é um número.");
      continue;
    } else {
      if (opcao == 1 || opcao == 2 || opcao == 3 || opcao == 4) chamarnumero();
      break;
    }
  }
}

function repetirprocesso() {
  repetir = prompt("Você deseja encerrar o programa? (S/N)");
  if (repetir == "S" || repetir == "s") {
    process.exit();
  } else if (repetir == "N" || repetir == "n") {
    mensagem()
    leropcao()
  } else console.log("Inválido");
}

function somar() {
  const resultado = num1 + num2;
  console.log(`Resultado da soma: ${resultado}`);
}

function diminuir() {
  const resultado = num1 - num2;
  console.log(`Resultado da subtração: ${resultado}`);
}

function dividir() {
  const resultado = num1 / num2;
  console.log(`Resultado da divisão: ${resultado}`);
}

function multiplicar() {
  const resultado = num1 * num2;
  console.log(`Resultado da multiplicação: ${resultado}`);
}

function porcentagem() {
  const resultado = (num1 / num2) * 100;
  console.log(`Resultado da porcentagem: ${resultado}%`);
}

module.exports = {
  leropcao,
  somar,
  diminuir,
  dividir,
  porcentagem,
  operacao,
  multiplicar,
  repetirprocesso,
  mensagem,
};
