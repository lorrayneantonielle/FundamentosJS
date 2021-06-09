// hiçar, hiçamento, jogar pra cima
// quando declara uma variável com VAR, o código vai jogar ela pra cima com o hoisting

console.log('a =', a) // undefined mas existe
var a = 2 // jogou pra cimas
console.log('a =', a)

function teste() {
    console.log('a =', a)
    var a = 2
    console.log('a =',a)
}
teste()
//dentro da função também ocorre hiçamento

console.log('b =', b)
let b = 3
console.log('a =', b)
//let não ocorre hiçamento