const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

console.log(concatenacao)

const template = `
    Olá
    ${nome}!` //interpolação 
console.log(concatenacao, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log (`Ei... ${up('cuidado')}!`)