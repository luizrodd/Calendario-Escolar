const database = require('../models/');

class HorariosController{

// GET /horarios
static getAll = async (req, res) => {
    try {
        const horarios = await database.Horarios.findAll({
            include: [
                {
                    model: database.Series,
                },
                {
                    model: database.Turmas,
                },
                {
                    model: database.Dias,
                },
                {
                    model: database.HoraAulas,
                },
                {
                    model: database.Disciplinas,
                },
                {
                    model: database.Usuarios,
                }
            ]
        });
        res.json(horarios);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os horários.' });
    }
};

// GET /horarios/:id
static getById = async (req, res) => {
    const { id } = req.params;
    try {
        const horario = await database.Horarios.findOne(id);
        if (horario) {
            res.json(horario);
        } else {
            res.status(404).json({ error: 'Horário não encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o horário.' });
    }
};

// POST /horarios
static create = async (req, res) => {
    const { disciplinaId, userId, diaId, turmaId, serieId, horaAulaId } = req.body;
    try {
        const horario = await database.Horarios.create({ disciplinaId, userId, diaId, turmaId, serieId, horaAulaId });
        res.status(201).json(horario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o horário.' });
    }
};

// PUT /horarios/:id
static update = async (req, res) => {
    const { id } = req.params;
    const { nome, hora } = req.body;
    try {
        const horario = await database.Horarios.findByPk(id);
        if (horario) {
            await horario.update({ nome, hora });
            res.json(horario);
        } else {
            res.status(404).json({ error: 'Horário não encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar o horário.' });
    }
};

// DELETE /horarios/:id
static delete = async (req, res) => {
    const { id } = req.params;
    try {
        const horario = await database.Horarios.findByPk(id);
        if (horario) {
            await horario.destroy();
            res.json({ message: 'Horário excluído com sucesso.' });
        } else {
            res.status(404).json({ error: 'Horário não encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir o horário.' });
    }
};
}

module.exports = HorariosController