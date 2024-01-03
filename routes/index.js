const bodyparser = require('body-parser');
const aulas = require('./aulasRoutes');
const usuarios = require('./usuariosRoutes');
const horarios = require('./horariosRoutes');
const disciplinas = require('./disciplinasRoutes');
const auth = require('./authRoutes');
const cargo = require('./cargosRoutes');
const permissao = require('./permissoesRoutes');
module.exports = app => {
    app.use(bodyparser.json());
    app.use(auth);
    app.use(aulas);
    app.use(horarios);
    app.use(disciplinas);
    app.use(usuarios);
    app.use(cargo);
    app.use(permissao);

}