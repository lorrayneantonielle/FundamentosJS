//função e passar dois atributos dentro de um operador destruction

function rand({min = 0, max = 1000}) {
    const valor = Math.random() *  (max - min) + min
    return Math.floor(valor)
}

const obj = {max :50, min: 40}
console.log(rand(obj))
// vai gerar valores randômicos entre 40 e 50

console.log(rand({ min: 955})) // vai gerar valores entre 955 e 1000

console.log(rand({}))
// vai sortear entre 0 e 1000
