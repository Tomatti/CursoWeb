const peso1 = 1.0
const peso2 = Number ('2.0')
console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliaçao1 = 9.871
const avaliaçao2 = 6.871
const total = avaliaçao1 * peso1 + avaliaçao2 * peso2
const media = total /(peso1 + peso2)
console.log(media.toFixed(3))
console.log(media.toString(2))
console.log (typeof media)