const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    year: { type: String, required: true },
    direction: { type: String, required: true },
    duration: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
