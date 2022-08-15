const express = require('express');
const cors = require('cors');
const app = express();
const moviesRoutes = require('./routes/movies.route');
const {mongoConnect} = require('./database/mongoDb/mongo');

app.use(cors());
app.use(express.json());
app.use('/movies', moviesRoutes);

mongoConnect();

app.listen(3000, () => {
    console.log('A aplicação está rodando na porta 3000');
    console.log('Acesse em: http://localhost:3000');
});




