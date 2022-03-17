const { usuarios, proximoId } = require('../data/db')

function indiceUsuario(filtro) {
    if (!filtro) return -1

    const { id, email } = filtro

    if (id) {
        return usuarios.findIndex(usuario => usuario.id === id)
    }

    if (email) {
        return usuarios.findIndex(usuario => usuario.email === email)
    }
    return -1

}

module.exports = {
    // { nome, email, idade }
    novoUsuario(_, { dados }) {
        const emailExists = usuarios.some(usuario =>
            usuario.email === dados.email
        )

        if (emailExists) {
            throw new Error('E-mail já está cadastrado')
        }

        const novoUsuario = {
            id: proximoId(),
            ...dados,
            perfil_id: 1,
            status: 'ATIVO'
        }

        usuarios.push(novoUsuario)
        return novoUsuario
    },

    excluirUsuario(_, { filtro }) {
        const i = indiceUsuario(filtro)

        if (i < 0) {
            throw new Error('Usuário não encontrado')
        }

        const excluidos = usuarios.splice(i, 1)
        return excluidos ? excluidos[0] : null
    },

    alterarUsuario(_, { filtro, dados }) {
        const i = indiceUsuario(filtro)

        if (i < 0) {
            throw new Error('Usuário não encontrado')
        }

        const usuario = {
            ...usuarios[i],
            ...dados
        }

        usuarios.splice(i, 1, usuario)
        return usuario
    }
}