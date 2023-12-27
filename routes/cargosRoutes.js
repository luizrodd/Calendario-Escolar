const { Router } = require('express')

const router = Router()

router
    .post('/cargos')
    .get('/cargos')
    .get('/cargos/:id')
    .delete('/cargos/:id')
    .put('/cargos/:id')

module.exports = router