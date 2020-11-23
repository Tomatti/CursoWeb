function SoBoaNoticia ( nota) {
    if (nota >= 7){
        console.log('Aprovado'+ nota)
    }
}

SoBoaNoticia(8.1)
SoBoaNoticia(6.1)

function SeForVerdadeEuFalo(valor){
    if(valor){
        console.log('É Verdade...' + valor)
    }
}

SeForVerdadeEuFalo()
SeForVerdadeEuFalo(null)
SeForVerdadeEuFalo(undefined)
SeForVerdadeEuFalo(NaN)
SeForVerdadeEuFalo('')
SeForVerdadeEuFalo(0)
SeForVerdadeEuFalo(-1)
SeForVerdadeEuFalo('a')
SeForVerdadeEuFalo(1)