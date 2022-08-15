const moviesService = require('../services/movies.service');

async function findAllMovies(req, res) {
    const allMovies = await moviesService.findAllMovies();
    res.send(allMovies);
}

async function findMovieById(req, res) {
    const id = req.params.id;
    const uniqueMovie = await moviesService.findMovieById(id);
    res.send(uniqueMovie);
}

async function createMovie(req, res) {
    const movie = req.body;
    const movieCreated = await moviesService.createMovie(movie);
    res.send(movieCreated);
}

async function updateMovie(req, res) {
    const movie = req.body;
    const movieUpdated = await moviesService.updateMovie(movie);
    res.send(movieUpdated);
}

async function deleteMovie(req, res) {
    const id = req.params.id;
    const deletedMovie = await moviesService.deleteMovie(id);
    res.send(deletedMovie);
}

module.exports = {
    findAllMovies,
    findMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
}; 
