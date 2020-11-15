let valor // nao inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) // erro!

const produto ={}
console.log(produto.preço)
console.log(produto)


produto.preço = 3.5

produto.preço = undefined // evitar atribuir undefined
console.log(!!produto.preço)
// delete produto.preço
console.log(produto)

produto.preço = null // sem preço
console.log(produto)