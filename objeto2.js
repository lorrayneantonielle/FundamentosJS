console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto) // convertido pra função
console.log(typeof new Produto()) // convertido pra objeto

// new vai reservar a função