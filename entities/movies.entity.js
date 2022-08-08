const crypto = require('crypto');
const { monitorEventLoopDelay } = require('perf_hooks');

class MovieEntity {
    constructor(movie) {
        this.id = movie.id ?? crypto.randomUUID();
        this.title = movie.title;
        this.year = movie.year;
        this.direction = movie.direction;
        this.duration = movie.duration;
    }

    validate() {
        if (!this.title) {
            throw new Error('Titulo precisa ser preenchido');
        }
        if (!this.year) {
            throw new Error('O ano precisa ser informado');
        }
        if (!this.direction) {
            throw new Error('A direção precisa ser preenchida');
        }
        if (!this.duration) {
            throw new Error('O duration precisa ser informado');
        }
    }

    getMovie() {
        return {
            id: this.id,
            title: this.title,
            year: this.year,
            direction: this.direction,
            duration: this.duration,
        };
    }
}

module.exports = MovieEntity;
