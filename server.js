const express = require('express');
const personsRouter = require('./routes/persons.routes');

const app = express();

const PORT = 2020;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ~ ${delta}ms `);
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send(' You have hit the main route :) ');
});

app.get('/test', (req, res) => {
    res.send('<ul><li>Hey Test !</li></ul>');
});

app.use('/persons', personsRouter);

app.listen(PORT, () => {
    console.log(`Server started on : ${PORT} `);
});
