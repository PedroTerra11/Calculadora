console.log(`1 para somar dois números
2 para diminuir dois números
3 para dividir
4 para porcentagem `)

const calculadora = require('./index')

if(!opcao){
   calculadora.leropcao() 
}else{
    switch (opcao) {
        case 1:
            calculadora.somar()
            break;
        case 2:
            calculadora.diminuir()
            break;
        case 3:
            calculadora.dividir()
            break;
        case 4:
            calculadora.multiplicar()
            break;
        case 5:
            calculadora.porcentagem()
            break;

        default:
            console.log("Opção inválida")
            break;
    }
}
