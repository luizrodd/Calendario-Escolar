const { Router } = require('express')

const router = Router()
const CargosController = require('../controllers/CargosController')

router
    .post('/cargos', CargosController.create)
    .get('/cargo')
    .get('/cargo/:id')
    .delete('/cargo/:id')
    .put('/cargo/:id')

module.exports = router