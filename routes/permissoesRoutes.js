const { Router } = require('express')

const router = Router()

router
    .post('/permissao')
    .get('/permissao')
    .get('/permissao/:id')
    .delete('/permissao/:id')
    .put('/permissao/:id')

modules.exports = router