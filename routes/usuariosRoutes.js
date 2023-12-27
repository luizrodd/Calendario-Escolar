const {Router} = require('express')
const UsuariosController = require('../controllers/UsuariosController')
const autenticado = require('../middlewares/autenticado')


const routes = Router()

routes.use(autenticado)


routes.get('/usuarios', UsuariosController.getAll)
routes.get('/usuarios/:id', UsuariosController.getById)
routes.post('/usuarios', UsuariosController.create)
routes.put('/usuarios/:id', UsuariosController.update)
routes.delete('/usuarios/:id', UsuariosController.delete)

module.exports = routes

