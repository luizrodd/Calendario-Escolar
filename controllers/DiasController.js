const database = require('../models');

class DiasController{
        static async getAll(req, res) {
            try {
                const dias = await database.Dias.findAll();
                res.status(200).json(dias);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal server error' });
            }
        }
        static async getById(req, res) {
            try {
                const { id } = req.params;
                const dia = await database.Dias.findByPk(id);
                if (!dia) {
                    return res.status(404).json({ error: 'Dia not found' });
                }
                res.status(200).json(dia);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal server error' });
            }
        }
        static async create(req, res) {
            const { dia } = req.body;
            try {
                const dias = await database.Dias.create({ dia });
                res.status(201).json(dias);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal server error' });
            }
        }
        static async update(req, res) {
            try {
                const { id } = req.params;
                const { nome } = req.body;
                const dia = await database.Dias.findByPk(id);
                if (!dia) {
                    return res.status(404).json({ error: 'Dia not found' });
                }
                await dia.update({ nome });
                res.status(200).json({ message: `Dia ${id} updated` });
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal server error' });
            }
        }
        static async delete(req, res) {
            try {
                const { id } = req.params;
                const dia = await database.Dias.findByPk(id);
                if (!dia) {
                    return res.status(404).json({ error: 'Dia not found' });
                }
                await dia.destroy();
                res.status(200).json({ message: `Dia ${id} deleted` });
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal server error' });
            }
        }
}
module.exports = DiasController;