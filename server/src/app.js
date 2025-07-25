const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const authRouter = require('./routes/authRouter')
const searchRouter = require('./routes/searchRouter')
const cors = require('cors');

const app = express();
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const cardRouter = require('./routes/cardRouter');

app.use('/api/cards', cardRouter);

app.use('/api/auth', authRouter);

app.use('/api/search', searchRouter);


module.exports = app;
