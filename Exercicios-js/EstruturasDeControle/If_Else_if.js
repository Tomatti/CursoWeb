Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)){
        console.log('Nota: ', nota, 'Quadro de Honra')
    } else if(nota.entre(7, 8.99)){
        console.log('Nota: ', nota, 'Aprovado')
    } else if(nota.entre(4, 6.99)){
        console.log('Nota: ', nota, 'Recuperação')
    }  else if(nota.entre(0, 3.99)){
        console.log('Nota: ', nota, 'Reprovado')
    } else {
        console.log(nota, 'Nota Invalida')
    }
console.log('fim')
}
imprimirResultado(1)
imprimirResultado(5)
imprimirResultado(7)
imprimirResultado(8)
imprimirResultado(9)
imprimirResultado(-1)
imprimirResultado()
//imprimirResultado('tex')