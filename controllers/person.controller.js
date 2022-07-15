const path = require('path');
const persons = require('../models/persons.model');

function getAllPersons(req, res) {
    res.json(persons);
}

function getSinglePersonByID(req, res) {
    const personID = req.params.personID;
    const result = persons[personID];
    if (result) {
        res.json(result);
    } else {
        res.status(400).json({ error: 'NOt FOund ' });
    }
}

function updatePerson(req, res) {
    console.log(req.body);
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Invalid Name of the person',
        });
    }

    const newFriend = {
        name: req.body.name,
        id: persons.length + 1,
    };
    persons.push(newFriend);
    res.json(persons);
}

function sendFile(req, res) {
    const resultFile = path.join(__dirname, '..', 'public', 'skimountain.jpg');

    res.sendFile(resultFile);
}

module.exports = { getAllPersons, getSinglePersonByID, updatePerson, sendFile };
