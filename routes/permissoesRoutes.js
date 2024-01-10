const { Router } = require('express')

const router = Router()
const PermissoesController = require('../controllers/PermissoesController')

router
    .post('/permissoes', PermissoesController.create)
    .get('/permissao', PermissoesController.getAll)
    .get('/permissao/:id')
    .delete('/permissao/:id')
    .put('/permissao/:id')

module.exports = router