
const imprimirresultado = function (Nota) {
    if (isNaN(Nota) === false) {
        switch (Math.floor(Nota)) {
            case 10:
            case 9:
                console.log('Nota:', Nota, 'quadro de honra')
                break
            case 7: case 8:
                console.log('Nota:', Nota, 'Aprovado')
                break
            case 6: case 5:
                console.log('Nota:', Nota, 'Recuperação')
                break
            case 4: case 3: case 2: case 1: case 0:
                console.log('Nota:', Nota, 'Reprovado')
                break
            default:
                console.log('Nota:', Nota, 'Nota Invalida')


        }
    } else {
        console.log(Nota, typeof(Nota), 'Não e um Numero')
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