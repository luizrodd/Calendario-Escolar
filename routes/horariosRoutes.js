const {Router} = require('express')
const router = Router()

const HorariosController = require('../controllers/HorariosController')
const TurmasController = require('../controllers/TurmasController')
const SeriesController = require('../controllers/SeriesController')
const HoraAulasController = require('../controllers/HoraAulasController')
const DiasController = require('../controllers/DiasController')

router.get('/horarios', HorariosController.getAll)
router.get('/horarios/:id', HorariosController.getById)
router.post('/horarios', HorariosController.create)
router.put('/horarios/:id', HorariosController.update)
router.delete('/horarios/:id', HorariosController.delete)

router.get('/turmas', TurmasController.getAll)
router.get('/turmas/:id', TurmasController.getById)
router.post('/turmas', TurmasController.create)
router.put('/turmas/:id', TurmasController.update)
router.delete('/turmas/:id', TurmasController.delete)

router.get('/series', SeriesController.getAll)
router.get('/series/:id', SeriesController.getById)
router.post('/series', SeriesController.create)
router.put('/series/:id', SeriesController.update)
router.delete('/series/:id', SeriesController.delete)

router.get('/horaAulas', HoraAulasController.getAll)
router.get('/horaAulas/:id', HoraAulasController.getById)
router.post('/horaAulas', HoraAulasController.create)
router.put('/horaAulas/:id', HoraAulasController.update)
router.delete('/horaAulas/:id', HoraAulasController.delete)

router.get('/dias', DiasController.getAll)
router.get('/dias/:id', DiasController.getById)
router.post('/dias', DiasController.create)
router.put('/dias/:id', DiasController.update)
router.delete('/dias/:id', DiasController.delete)


module.exports = router