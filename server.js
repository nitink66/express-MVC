const express = require('express');

const app = express();

const PORT = 2020;

const persons = [
    {
        id: 1,
        name: 'ABC',
    },
    {
        id: 2,
        name: 'XYZ',
    },
];

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ~ ${delta}ms `);
});

app.get('/', (req, res) => {
    res.send(' You have hit the main route :) ');
});

app.get('/test', (req, res) => {
    res.send('<ul><li>Hey Test !</li></ul>');
});

app.get('/persons', (req, res) => {
    res.json(persons);
});

app.get('/persons/:personID', (req, res) => {
    const personID = req.params.personID;
    const result = persons[personID];
    if (result) {
        res.json(result);
    } else {
        res.status(400).json({ error: 'NOt FOund ' });
    }
});

app.listen(PORT, () => {
    console.log(`Server started on : ${PORT} `);
});
