const database = require('../models');
class AulasController{
    static async getAll(req, res){
        try { 
            const aulas = await database.Aulas.findAll();
            return res.status(200).json(aulas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async getById(req, res){
        const { id } = req.params;
        try {
            const aula = await database.Aulas.findOne({
                where: { id }
            });
            return res.status(200).json(aula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async create(req, res){
        const aula = req.body;
        try {
            const newAula = await database.Aulas.create(aula);
            return res.status(200).json(newAula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async update(req, res){
        const { id } = req.params;
        const newData = req.body;
        try {
            await database.Aulas.update(newData, {
                where: { id }
            });
            const aulaUpdated = await database.Aulas.findOne({
                where: { id }
            });
            return res.status(200).json(aulaUpdated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async delete(req, res){
        const { id } = req.params;
        try {
            await database.Aulas.destroy({
                where: { id }
            });
            return res.status(200).json({ message: `Aula ${id} deletada com sucesso` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = AulasController;