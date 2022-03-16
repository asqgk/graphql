const usuarios = [
    {
        id: 1,
        nome: 'Francisco',
        email: 'francisco@gmail.com',
        idade: 23,
        perfil_id: 2,
        status: 'ATIVO'
    },
    {
        id: 2,
        nome: 'Luiz',
        email: 'luiz@gmail.com',
        idade: 20,
        perfil_id: 1,
        status: 'INATIVO'
    },
    {
        id: 3,
        nome: 'Pietra',
        email: 'pietra@gmail.com',
        idade: 19,
        perfil_id: 1,
        status: 'BLOQUEADO'
    },
]

const perfis = [
    { id: 1, nome: 'Comum' },
    { id: 2, nome: 'Administrador' }
]

module.exports = { usuarios, perfis }