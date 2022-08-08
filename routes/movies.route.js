const router = require("express").Router()

const controller = require("../controllers/movies.controller")

router.get('/', controller.findAllMovies);
router.get('/:id', controller.findMovieById);
router.post('/', controller.createMovie);
router.put('/', controller.updateMovie);
router.delete('/:id', controller.deleteMovie);

module.exports = router;