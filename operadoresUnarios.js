let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1
console.log(num1)

console.log(++num1 === num2--) // o resultado dá verdadeiro pq o ++ foi executado antes da compração e o -- só foi executado depois da comparação

console.log(num1 === num2)