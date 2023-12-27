const {Router} = require('express')
const router = Router()

const aulasController = require('../controllers/aulasController')

router.get('/aulas', aulasController.getAll)
router.get('/aulas/:id', aulasController.getById)
router.post('/aulas', aulasController.create)
router.put('/aulas/:id', aulasController.update)
router.delete('/aulas/:id', aulasController.delete)

module.exports = router
