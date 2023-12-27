const database = require('../models');
class SeriesController{
    static async getAll(req, res) {
        try {
            const series = await database.Series.findAll();
            res.status(200).json(series);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    static async getById(req, res) {
        try {
            const { id } = req.params;
            const serie = await database.Series.findByPk(id);
            if (!serie) {
                return res.status(404).json({ error: 'Serie not found' });
            }
            res.status(200).json(serie);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async create(req, res) {
        const { serie } = req.body;
        try {
            const series = await database.Series.create({ serie });
            res.status(201).json(series);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    static async update(req, res) {
        try {
            const { id } = req.params;
            const { serie } = req.body;
            const series = await database.Series.findByPk(id);
            if (!serie) {
                return res.status(404).json({ error: 'Serie not found' });
            }
            await serie.update({ series });
            res.status(200).json({ message: `Serie ${id} updated` });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    static async delete(req, res) {
        try {
            const { id } = req.params;
            const serie = await database.Series.findByPk(id);
            if (!serie) {
                return res.status(404).json({ error: 'Serie not found' });
            }
            await serie.destroy();
            res.status(200).json({ message: `Serie ${id} deleted` });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    

}
module.exports = SeriesController;