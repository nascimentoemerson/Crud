const movies = require('../mocks/movies');
const Movie = require("../database/models/movieSchema")
const MovieEntity = require('../entities/movies.entity');
const ActorEntity = require('../entities/actors.entity');

async function findAllMovies() {
    return await Movie.find();
}

async function findMovieById(id) {
    const movieFinded = await Movie.findOne({id: id})
    return movieFinded;
}

async function createMovie(movie) {
    const newMovie = new MovieEntity(movie);
    newMovie.validate();

    if (!movie.actors) {
        throw new Error('Atores precisam ser informados');
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

    const movieCreated = await Movie.create(newMovieValidated);
    return movieCreated
}

async function updateMovie(movie) {
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
    const movieUpdatedInDataBase = await Movie.findOneAndUpdate(
        {id: movie.id},
        updatedMovie,
        {new:true}
    )
    return movieUpdatedInDataBase;
}

async function deleteMovie(id) {
    const movieFinded = await Movie.findOneAndDelete({id: id})

    return movieFinded;
}

module.exports = {
    findAllMovies,
    findMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
};

