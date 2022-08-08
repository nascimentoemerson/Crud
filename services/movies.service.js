const movies = require('../mocks/movies');
const MovieEntity = require('../entities/movies.entity');
const ActorEntity = require('../entities/actors.entity');

function findAllMovies() {
    return movies;
}

function findMovieById(id) {
    let movieFinded;

    movies.map((movie) => {
        if (movie.id === id) {
            movieFinded = movie;
        }
    });
    return movieFinded;
}

function createMovie(movie) {
    const newMovie = new MovieEntity(movie);

    newMovie.validate();
    if (!movie.actors) {
        throw new Error('Atores precisam ser informado');
    }
    const newActors = [];
    movie.actors.map((actor) => {
        const newActor = new ActorEntity(actor);
        newActor.validate();
        newActors.push(newActor.getActor());
    });

    const newMovieValidated = {
        ...newMovie.getMovie(),
        actors: newActors,
    };
    movies.push(newMovieValidated);
    return newMovieValidated;
}

function updateMovie(movie) {
    const updateMovie = new MovieEntity(movie);
    updateMovie.validate();
    if (!movie.actors) {
        throw new Error('Atores precisam ser informado');
    }
    const updatedActors = [];
    movie.actors.map((actor) => {
        const updatedActor = new ActorEntity(actor);
        updatedActor.validate();
        updatedActors.push(updatedActor.getActor());
    });

    const updatedMovie = {
        ...updateMovie.getMovie(),
        actors: updatedActors,
    };

    movies.map((eachMovie, index) => {
        if (eachMovie.id === updateMovie.id) {
            movies.splice(index, 1, updatedMovie);
        }
    });
    return updatedMovie;
}

function deleteMovie(id) {
    let movieFinded;
    movies.map((movie, index) => {
        if (movie.id === id) {
            movieFinded = movie;
            movies.splice(index, 1);
        }
    });

    return movieFinded;
}

module.exports = {
    findAllMovies,
    findMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
};

