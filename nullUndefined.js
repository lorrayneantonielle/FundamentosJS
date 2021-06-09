let valor // não inicializada
console.log(valor)
// vai retornar undefined

valor = null
// variável não aponta pra nenhum endereço de memória
// ausência de valor
console.log(valor)

//console.log(valor.toString())
// não pode ler propriedades de valores nulos

const produto = {}
console.log(produto.preco)
// retorna undefined
// o produto está definido mas o preço nao
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // evite atribuir undefined à variável
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)


