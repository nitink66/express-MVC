const express = require('express');
const personController = require('../controllers/person.controller');

const personRouter = express.Router();

personRouter.use((req, res, next) => {
    console.log('ip address ---', req.ip);
    next();
});

personRouter.get('/', personController.getAllPersons);

personRouter.get('/:personID', personController.getSinglePersonByID);

personRouter.post('/', personController.updatPerson);

module.exports = personRouter;
