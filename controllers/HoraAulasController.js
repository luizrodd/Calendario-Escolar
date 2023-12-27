const database = require('../models');
class HoraAulas{
    static async getAll(req, res) {
        try {
            const horaAulas = await database.HoraAulas.findAll();
            res.status(200).json(horaAulas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    static async getById(req, res) {
        try {
            const { id } = req.params;
            const horaAula = await database.HoraAulas.findByPk(id);
            if (!horaAula) {
                return res.status(404).json({ error: 'HoraAula not found' });
            }
            res.status(200).json(horaAula);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    static async create(req, res) {
        const { hora } = req.body;
        try {
            const horaAula = await database.HoraAulas.create({ hora });
            res.status(201).json(horaAula);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    static async update(req, res) {
        try {
            const { id } = req.params;
            const { nome } = req.body;
            const horaAula = await database.HoraAulas.findByPk(id);
            if (!horaAula) {
                return res.status(404).json({ error: 'HoraAula not found' });
            }
            await horaAula.update({ nome });
            res.status(200).json({ message: `HoraAula ${id} updated` });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    static async delete(req, res) {
        try {
            const { id } = req.params;
            const horaAula = await database.HoraAulas.findByPk(id);
            if (!horaAula) {
                return res.status(404).json({ error: 'HoraAula not found' });
            }
            await horaAula.destroy();
            res.status(200).json({ message: `HoraAula ${id} deleted` });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
module.exports = HoraAulas;