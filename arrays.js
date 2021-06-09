const valores = [7.7, 8.9, 6.3, 9.2]
//array no python é lista
console.log(valores[0], valores[3])
//se escolher um elemento que não existe, o resultado dá undefined
//arrays são mutáveis, podendo adicionar valores
//exemplo
valores[4] = 10
console.log(valores)

console.log(valores.length)
// length lê a quantidade de ítens do array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)
//função push adiciona valores

console.log(valores.pop())
//retorna o ultimo elemento do array

delete valores[0]
console.log(valores)
//retira o elemento selecionado entre []

console.log(typeof valores)