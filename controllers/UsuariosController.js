const database = require('../models');
const bcrypt = require('bcryptjs');

class UsuariosController {
    // GET /usuarios
    static async getAll(req, res) {
        try {
            // Logic to fetch all usuarios from the database
            const usuarios = await database.Usuarios.findAll();
            res.status(200).json(usuarios);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    // GET /usuarios/:id
    static async getById(req, res) {
        try {
            const { id } = req.params;
            // Lógica para buscar um único usuário pelo ID no banco de dados
            const usuario = await database.Usuarios.findByPk(id, {
                include: [
                    {
                        model: database.Horarios,
                        include: [
                            {
                                model: database.Disciplinas,
                                attributes: ['nome']
                            },
                            {
                                model: database.Dias,
                                attributes: ['dia']
                            },
                            {
                                model: database.HoraAulas,
                                attributes: ['hora']
                            },
                            {
                                model: database.Series,
                                attributes: ['serie']
                            },
                            {
                                model: database.Turmas,
                                attributes: ['turma']
                            },
                        ],
                    }
                ]
            });
            if (!usuario) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
            res.status(200).json(usuario);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
    
    // POST /usuarios
    static create = async (req, res) => {
        const { usuario, email, senha } = req.body;

        try {
            const salt = await bcrypt.genSalt(10);
            const hashedSenha = await bcrypt.hash(senha, salt);

            const novoUsuario = await database.Usuarios.create({ usuario, email, senha: hashedSenha });
            return res.status(200).json(novoUsuario);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };
    // PUT /usuarios/:id
    static async update(req, res) {
        try {
            const { id } = req.params;
            const { nome, email, senha } = req.body;
            // Logic to update an existing usuario in the database
            const usuario = await database.Usuario.findByPk(id);
            if (!usuario) {
                return res.status(404).json({ error: 'Usuario not found' });
            }
            await usuario.update({ nome, email, senha });
            res.status(200).json(usuario);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    // DELETE /usuarios/:id
    static async delete(req, res) {
        try {
            const { id } = req.params;
            // Logic to delete an existing usuario from the database
            const usuario = await database.Usuario.findByPk(id);
            if (!usuario) {
                return res.status(404).json({ error: 'Usuario not found' });
            }
            await usuario.destroy();
            res.status(204).end();
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = UsuariosController;
