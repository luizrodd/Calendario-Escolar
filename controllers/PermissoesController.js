const PermissaoService = require('../services/PermissoesService')
const permissaoService = new PermissaoService()

class PermissoesController {
    static async create(req, res) {
        const { nome, descricao } = req.body

        try {
            const permissao = await permissaoService.create({ nome, descricao})

            res.status(201).send(permissao)
        } catch (error) {
            res.status(400).send({ message: error.message})
        }
    }
    static async getAll(req, res) {
        try {
            const permissoes = await permissaoService.getAll()

            res.status(200).send(permissoes)
        } catch (error) {
            res.status(400).send({ message: error.message})
        }
    }

    static async getById(req, res) {
        const { id } = req.params

        try {
            const permissao = await permissaoService.getById(id)

            res.status(200).send(permissao)
        } catch (error) {
            res.status(400).send({ message: error.message})
        }
    }

    static async update(req, res) {
        const { id } = req.params
        const { nome, descricao } = req.body

        try {
            const permissao = await permissaoService.update(id, { nome, descricao })

            res.status(200).send(permissao)
        } catch (error) {
            res.status(400).send({ message: error.message})
        }
    }

    static async delete(req, res) {
        const { id } = req.params

        try {
            await permissaoService.delete(id)

            res.status(200).send({ message: 'Permissão deletada com sucesso'})
        } catch (error) {
            res.status(400).send({ message: error.message})
        }
    }
    
}

module.exports = PermissoesController