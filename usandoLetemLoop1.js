//for (let i =0; i < 10; i++) {
//    console.log(i)
//}
//console.log('i =', i) // nesse caso, não vai encontrar
//o I pq ele está fora do bloco. A variável let não deixa ele sair do  bloco

let funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs [2]()
funcs[8]()