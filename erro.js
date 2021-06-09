// Try / Cath/ Throw
function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGirtado(obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar (3)
    } finally {
        console.log('final')
    }

}

const obj = {
    name: 'Roberto'
}
imprimirNomeGirtado(obj)