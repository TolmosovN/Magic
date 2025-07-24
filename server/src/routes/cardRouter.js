const CardController = require('../controllers/card.controller');

const cardRouter = require('express').Router();

cardRouter.get('/', CardController.getAllCards);

module.exports = cardRouter