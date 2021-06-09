//Funçao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //aqui ele vai juntar 2 com undefined
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // vai somar os dois parâmetros e ignorar o resto


//Função com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2 , 3))
console.log(soma(2))