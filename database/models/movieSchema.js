const {Schema, model} = require('mongoose');

const actorSchema = new Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    birth: {type: String, required: true},
    age: {type: String, required: true}
})


const movieSchema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    year: { type: String, required: true },
    direction: { type: String, required: true },
    duration: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
    actors: { type: [actorSchema], required: true},
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;
