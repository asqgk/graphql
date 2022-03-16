const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola() {
        return 'Bom dia!'
    },
    horaAtual() {
        return new Date
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Francisco',
            email: 'francisco@hotmail.com',
            idade: 23,
            salario_real: 5500.00,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'Notebook Gamer',
            preco: 4890.89,
            desconto: 0.5
        }
    },
    numerosMegaSena() {
        // return [4, 8, 13, 27, 33, 54]
        const crescente = (a, b) => a - b
        const generateRandomNumber = () => parseInt(Math.random() * 100)

        return Array(6).fill(0)
            .map(() => generateRandomNumber())
            .map((number, _, arr) => arr.indexOf(number) === -1 ? n = generateRandomNumber : number)
            .sort(crescente)
    },
    usuarios() {
        return usuarios
    },
    usuario(_, { id }) {
        const selecionados = usuarios.filter(usuario => usuario.id === id)

        return selecionados ? selecionados[0] : null
    },
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        const selecionados = perfis.filter(perfil => perfil.id === id)

        return selecionados ? selecionados[0] : null
    }
}