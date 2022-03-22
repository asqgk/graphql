const { perfis } = require('../data/db')

module.exports = {
    perfil(usuario) {
        const selecionado = perfis
            .filter(p => p.id === usuario.perfil_id)
        return selecionado ? selecionado[0] : null
    }
}