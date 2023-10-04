const { Router } = require('express')
const controllers = require('../controllers/index')
const middleware = require('../middlewares')

const router = Router()

router.get('/', controllers.getFilms)
router.post('/', middleware.filmsValidation, controllers.createFilms)

module.exports = router
