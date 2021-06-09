// serve para extrair algo de algum objeto
//desestrutura
//tira da estrutura

const pessoa = {
    nome : 'Ana',
    idade : 5,
    endereco : {
        logradouro : 'Rua ABC',
        numero: 1000
    }
}


const {nome, idade } = pessoa
// tire do objeto nome e pessoa. Qual objeto? Pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

//e se tentar tirar do objeto algum atributo que não existe? Ex:
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)
// vai retornar undefined e true q foi definido

// e para acessar camadas mais profundas do objeto? 
const { endereco: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)

