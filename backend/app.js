//modules
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const logger = require('morgan');

//Routes
const friends = require('./routes/friends')
// const frontend = require('./routes/front')

const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');


const app = express();

app.use(logger('dev'));
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'../frontend', 'build')));

app.use('/api/v1/friend',friends)
app.use('/', indexRouter);
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname,'../frontend', 'build','index.html'));
});


module.exports = app;
