let a = 3
global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(this.a)
console.log(global.b) // global equivale a window no browser
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel maluca : sem var e let
// isso vai colocar a variavel diretamente no objeto global
abc = 3
console.log(global.abc)

// module.exports = {e : 456, f: false, g = 'teste'}