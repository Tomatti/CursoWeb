
const imprimirresultado = function (nota) {
    if (isNaN(nota) === false) {
        switch (Math.floor(nota)) {
            case 10:
            case 9:
                console.log('nota:', nota, 'quadro de honra')
                break
            case 7: case 8:
                console.log('nota:', nota, 'Aprovado')
                break
            case 6: case 5:
                console.log('nota:', nota, 'Recuperação')
                break
            case 4: case 3: case 2: case 1: case 0:
                console.log('nota:', nota, 'Reprovado')
                break
            default:
                console.log('nota:', nota, 'Nota Invalida')


        }
    } else {
        console.log(nota, 'Não e um Numero')
    }

}

imprimirresultado(9)
imprimirresultado(7)
imprimirresultado(5)
imprimirresultado(2)
imprimirresultado(11)
imprimirresultado(-1)
imprimirresultado('W')
imprimirresultado(8.9)
imprimirresultado(5.5)
imprimirresultado(0)