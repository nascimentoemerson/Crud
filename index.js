const express = require('express');
const cors = require('cors');

const app = express();

const controller = require('./controllers/movies.controller');

app.use(cors());
app.use(express.json());

app.get('/', controller.findAllMovies);
app.get('/movies/:id', controller.findMovieById);
app.post('/movies', controller.createMovie);
app.put('/movies', controller.updateMovie);
app.delete('/movies/:id', controller.deleteMovie);

app.listen(3000, () => {
    console.log('A aplicação está rodando na porta 3000');
    console.log('Acesse em: http://localhost:3000');
});
