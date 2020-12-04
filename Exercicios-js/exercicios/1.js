function cumprimentar(nome) {
    return console.log('Olá', nome, '!')
}

cumprimentar(1)

function AnoEmDias(idade) {
    let dias = idade * 365
    return console.log(dias)
}

AnoEmDias(25)

function salario(horas, remu) {
    let valorSalario = horas * remu
    return console.log('Salario igual a R$ ', valorSalario)
}
salario(150, 40.5)

function nomeDoMes(digito) {
    let mes = digito
    switch (mes) {
        case 1:
            mes = 'Janeiro'
            break;
            case 2:
            mes = 'Fevereiro'
            break;
    
        default:
            break;
    }

console.log(mes)
}

nomeDoMes(2)

function maiorOuIgual(a, b){
return console.log( a > b )


}

maiorOuIgual(1, '1')