const database = require('../models')

class PermissoesService {
    async create(dto) {
        const permissao = await database.permissoes.findOne({
            where: {
                nome: dto.nome
            }
        })

        if (permissao) {
            throw new Error('Permissão já cadastrada')
        }

        try {
            const newPermissao = await database.permissoes.create({
                nome: dto.nome,
                descricao: dto.descricao
            })

            return newPermissao
        } catch (error) {
            throw new Error('Erro cadastrar permissão')
        }
    }

    async getAll() {
        try {
            const permissoes = await database.permissoes.findAll()

            return permissoes
        } catch (error) {
            throw new Error('Erro ao buscar permissões')
        }
    }

    async getById(id) {
        try {
            const permissao = await database.permissoes.findOne({
                where: {
                    id: id
                }
            })

            return permissao
        } catch (error) {
            throw new Error('Erro ao buscar permissão')
        }
    }

    async update(id, dto) {
        try {
            await database.permissoes.update({
                nome: dto.nome,
                descricao: dto.descricao
            }, {
                where: {
                    id: id
                }
            })

            const permissao = await this.getById(id)

            return permissao
        } catch (error) {
            throw new Error('Erro ao atualizar permissão')
        }
    }

    async delete(id) {
        try {
            await database.permissoes.destroy({
                where: {
                    id: id
                }
            })
        } catch (error) {
            throw new Error('Erro ao deletar permissão')
        }
    }

    
}

module.exports = PermissoesService