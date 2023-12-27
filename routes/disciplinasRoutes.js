const {Router} = require('express')
const routes = Router()

const DisciplinasController = require('../controllers/DisciplinasController')

routes.get('/disciplinas', DisciplinasController.getAll)
routes.post('/disciplinas', DisciplinasController.create)

module.exports = routes
