const AuthController = require('../controllers/authController');

const authRouter = require('express').Router();

authRouter.post('/signup', AuthController.signup);

authRouter.post('/refresh', AuthController.refresh);
authRouter.post('/signin', AuthController.signin);

authRouter.delete('/signout', AuthController.signout);

module.exports = authRouter;
