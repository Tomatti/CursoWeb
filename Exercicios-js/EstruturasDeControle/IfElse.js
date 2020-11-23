const ImprimirResultado = function(nota) {
    
    if(nota >= 7) {
        console.log('Aprovado ' + nota)
    } else {
        console.log('Reprovado ' + nota)
    }


    

}

ImprimirResultado(8)
ImprimirResultado(6)
ImprimirResultado('Epa')