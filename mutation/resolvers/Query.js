const { usuarios, perfis } = require('../data/db')

module.exports = {
    usuarios() {
        return usuarios
    },
    usuario(_, { id }) {
        const selecionado = usuarios
            .filter(u => u.id === id)
        return selecionado ? selecionado[0] : null
    },
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        const selecionado = perfis
            .filter(p => p.id === id)
        return selecionado ? selecionado[0] : null
    }
}