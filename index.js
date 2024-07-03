const prompt = require("prompt-sync")();
module.exports = {chamarnumero, leropcao, somar, multiplicar, diminuir, dividir, porcentagem}
function chamarnumero() {
  while (1) {
    let num1 = +prompt("Digite o primeiro número");

    if (isNaN(num1)) {
      console.log("Não é um número válido.");
    }

    if(num1){
        let num2 = +prompt("Digite o segundo número")
    }if (isNaN(num2)) {
      console.log("Não é um número válido.");
    }
  }
}

function leropcao() {
    while (1) {
        let opcao = +prompt("Digite uma opção: ");
        if (isNaN(opcao)) {
            console.log("Não é um número");
        } else {
            break;
        }
    }
}


leropcao()


function somar(num, num2) {
  return num + num2;
}

function diminuir(num, num2) {
  return num + num2;
}

function dividir(num, num2) {
  return num / num2;
}

function multiplicar(num, num2) {
  return num * num2;
}

function porcentagem(num, num2) {
  return (num / num2) * 100;
}
