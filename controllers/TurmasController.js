const database = require('../models');

class TurmasController{
    static async getAll(req, res) {
        try {
            const turmas = await database.Turmas.findAll();
            res.status(200).json(turmas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    static async getById(req, res) {
        try {
            const { id } = req.params;
            const turma = await database.Turmas.findByPk(id);
            if (!turma) {
                return res.status(404).json({ error: 'Turma not found' });
            }
            res.status(200).json(turma);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    static async create(req, res) {
        const { turma } = req.body;
        try {
            const turmas = await database.Turmas.create({ turma });
            res.status(201).json(turma);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    static async update(req, res) {
        try {
            const { id } = req.params;
            const { turma } = req.body;
            const turmas = await database.Turmas.findByPk(id);
            if (!turma) {
                return res.status(404).json({ error: 'Turma not found' });
            }
            await turma.update({ turmas });
            res.status(200).json({ message: `Turma ${id} updated` });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    static async delete(req, res) {
        try {
            const { id } = req.params;
            const turma = await database.Turmas.findByPk(id);
            if (!turma) {
                return res.status(404).json({ error: 'Turma not found' });
            }
            await turma.destroy();
            res.status(200).json({ message: `Turma ${id} deleted` });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    

}

module.exports = TurmasController;