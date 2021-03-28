//modules
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//Routes
const friends = require('./routes/friends')

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/home', indexRouter);
// app.use('/users', usersRouter);
app.use('/api/v1/friend',friends)

module.exports = app;
