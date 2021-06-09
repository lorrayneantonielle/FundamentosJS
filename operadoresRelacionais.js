// quando eu faço uma comparação usando um operador relacional, o resultado sempre será true or false

console.log('01)', '1' == 1)
console.log('02)', '1' === 1) // o segundo teste vai olhar o valor e o tipo
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // vai comparar a referência de memória
console.log('10)', d1 == d2) // vai comparar a referência de memória
console.log('11)', d1.getTime() === d2.getTime())//nesse caso vai comparar os valores de refeência com a data de hoje, por isso é // poderia usar só o ==
console.log('12)', undefined == null)
console.log('13)', undefined === null)

