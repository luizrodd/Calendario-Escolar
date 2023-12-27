const database = require('../models');
class DisciplinasController {
    // Método para listar todas as disciplinas
    static async getAll(req, res) {
        try {
            // Lógica para buscar as disciplinas no banco de dados
            const disciplinas = await database.Disciplinas.findAll();

            // Retornar as disciplinas encontradas
            return res.json(disciplinas);
        } catch (error) {
            // Tratar erros
            console.error(error);
            return res.status(500).json({ error: 'Erro ao listar as disciplinas' });
        }
    }

    // Método para criar uma nova disciplina
    static async create(req, res) {
        try {
            // Lógica para criar uma nova disciplina no banco de dados
            const novaDisciplina = await database.Disciplinas.create(req.body);

            // Retornar a disciplina criada
            return res.json(novaDisciplina);
        } catch (error) {
            // Tratar erros
            console.error(error);
            return res.status(500).json({ error: 'Erro ao criar a disciplina' });
        }
    }

    // Outros métodos do controller...
}

module.exports = DisciplinasController;
