const express = require('express');

const app = express();

const PORT = 2020;

app.get('/', (req, res) => {
    res.send(' You have hit the main route :) ');
});

app.get('/test', (req, res) => {
    res.send('<ul><li>Hey Test !</li></ul>');
});

app.listen(PORT, () => {
    console.log(`Server started on : ${PORT} `);
});
