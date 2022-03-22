const { perfis, proximoId } = require('../../data/db')

function indicePerfil(filtro) {
    if (!filtro) return -1

    const { id, nome } = filtro

    if (id) {
        return perfis.findIndex(perfil => perfil.id === id)
    }

    if (nome) {
        return perfis.findIndex(perfil => perfil.nome === nome)
    }
    return -1
}

module.exports = {
    novoPerfil(_, { dados }) {
        const nomeExistente = perfis.some(perfil =>
            perfil.nome === dados.nome
        )

        if (nomeExistente) {
            throw new Error('Perfil já está cadastrado')
        }

        const novoPerfil = {
            id: proximoId(),
            ...dados,
        }

        perfis.push(novoPerfil)
        return novoPerfil
    },

    excluirPerfil(_, { filtro }) {
        const i = indicePerfil(filtro)

        if (i < 0) {
            throw new Error('Perfil não encontrado')
        }

        const excluido = perfis.splice(i, 1)
        return excluido ? excluido[0] : null
    },

    alterarPerfil(_, { filtro, dados }) {
        const i = indicePerfil(filtro)

        if (i < 0) {
            throw new Error('Perfil não encontrado')
        }

        const perfil = {
            ...perfis[i],
            ...dados
        }

        perfis.splice(i, 1, perfil)
        return perfil
    }
}