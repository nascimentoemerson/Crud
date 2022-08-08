const moviesService = require('../services/movies.service');

function findAllMovies(req, res) {
    const allMovies = moviesService.findAllMovies();
    res.send(allMovies);
}

function findMovieById(req, res) {
    const id = req.params.id;
    const uniqueMovie = moviesService.findMovieById(id);
    res.send(uniqueMovie);
}

function createMovie(req, res) {
    const movie = req.body;
    const movieCreated = moviesService.createMovie(movie);
    res.send(movieCreated);
}

function updateMovie(req, res) {
    const movie = req.body;
    const movieUpdated = moviesService.updateMovie(movie);
    res.send(movieUpdated);
}

function deleteMovie(req, res) {
    const id = req.params.id;
    const deletedMovie = moviesService.deleteMovie(id);
    res.send(deletedMovie);
}

module.exports = {
    findAllMovies,
    findMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
};
