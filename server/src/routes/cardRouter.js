const CardController = require('../controllers/card.controller');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const cardRouter = require('express').Router();

cardRouter.get('/', CardController.getAllCards);
cardRouter.post('/', verifyAccessToken, CardController.createCard);

module.exports = cardRouter