// MEDIDA DAS PAREDES   
let numeroDeParedes = 4
let paredefrente = 12.60// Comprimento Parede Frente
let paredeFundos = 9.00 // Comprimento Parede Fundos
let paredeDireita = 2.00 // Comprimento Parede Direita
let paredeEsquerda = 2.00 // Comprimento Parede Esquerda
const compTotalParedes = (paredeDireita + paredeEsquerda + paredefrente + paredeFundos)

//Espessura Vigas
let alturaViga = 0.20   // Altura Viga
let larguraViga = 0.15   // Largura Viga
let viasDeFerro = 4      // Quantidade de Vias de ferro por Viga e pilar
const compTotalVigas = ( compTotalParedes)


// Espessura Pilares
let larguraPilar1 = 0.0 // Largura 1 do Pilar
let larguraPilar2 = 0.0 // Largura 2 do pilar
let alturaPilar = 0  // Altura Do pilar
 
// Parâmetros ferro
let espesuraFerroVias = (8 ,"mm" )// Bitola Do Ferro das Vias 
let espesuraFerroEstribos = (4.2, "mm" ) // bitola do ferro de estribo
let sobraParaDobraVigas = 0.10
let sobraParaDobraEstribo =0.05
let distanciaEstribos = 0.15
let espacoConcreto = 0.02


// Parâmetros dos Pilares
let fatorPilar = (alturaViga / 0.10)
let quantiPilares = (compTotalVigas / fatorPilar)
const compTotalPilar = (alturaPilar  * quantiPilares)


//Estribos
let compEstribosVigas = (alturaViga * 2 + larguraViga * 2 + sobraParaDobraEstribo)
let compEstribosPilar = ((larguraPilar1 * 2 + larguraPilar2 *2) + sobraParaDobraEstribo)
let quantEstribosvigas = (compTotalVigas / distanciaEstribos)
let quantEstribosPilar = (compTotalPilar / distanciaEstribos)
let totalCompEstribosVigas = ( compEstribosVigas * quantEstribosvigas)
let totalCompEstribosPilar = (compEstribosPilar * quantEstribosPilar)




function calcferro(){
    var totalferroVias = ((compTotalVigas + compTotalPilar )* viasDeFerro)
    var totalferroViasUni = (totalferroVias / 12)
    var totalFerroEstribos =(totalCompEstribosPilar + totalCompEstribosVigas )
    var totalFerroEstribosUni =(totalFerroEstribos /12)
    return console.log('Ferro 8mm:',totalferroVias.toFixed(1), 'metros,',totalferroViasUni.toFixed(1) , 'Barras.',
    "Ferro de estribo 4.2mm:", totalFerroEstribos.toFixed(1),'Metros,',  totalFerroEstribosUni.toFixed(1), 'Barras' )

}

calcferro()

function calcMadeiras(){
    let totaltabuas20 = ((compTotalParedes * 2) + (compTotalPilar * 4))
    let totalbauas20uni = ((totaltabuas20 / 3))
    let totaltabuas15 = (compTotalParedes)
    let totaltabuas15uni =(totaltabuas15/3)
    let totalTacos7 = (((compTotalParedes + compTotalPilar) /0.40) * 1.20 )
    let totalTacos7Uni =( totalTacos7 / 3)
    return console.log( 'Tabuas de 20cm:',totaltabuas20, 'Metros,',totalbauas20uni.toFixed(1) 
    , "Tabuas de 3 metros.",
     'Tabuas de 15cm:', totaltabuas15.toFixed(1), 'Metros.', totaltabuas15uni.toFixed(1), 'Tabuas de 3 Metros.',
     'Tacos de 7cm:',totalTacos7, 'Metros,', totalTacos7Uni.toFixed(1), "Ripas de 3 Metros ")
}

calcMadeiras()

function calcConcreto(){
    let concretoVigasM3 = (4.78)
    let concretoPilarM3 = ( 4.78)
    let totalConbcretoM3 = (4.78)
    let cimento = (totalConbcretoM3 * 7)
    let areia = ( totalConbcretoM3 * 0.45)
    let brita = (totalConbcretoM3 * 0.45)
    let agua = ((totalConbcretoM3 * 0.15) )

    return console.log('M³ de Concreto', totalConbcretoM3.toFixed(1),'.',
    'Cimento:', cimento.toFixed(1),'Sacos,', 'Areia grossa:', areia.toFixed(1), 'M³,', 'Brita', brita.toFixed(1),'M³', 'Água:', agua.toFixed(1),'M³' 
    )
}

calcConcreto()