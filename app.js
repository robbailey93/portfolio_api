var createError = require('http-errors');

require('dotenv').config();

const express = require('express');
const config = require('./config/config');
const mongoose = require('mongoose');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

let knowledgeBaseRouter = require('./routes/knowledge');
let educationRouter = require('./routes/education');
let profilesRouter = require('./routes/profiles');
let projectsRouter = require('./routes/projects');
let skillsRouter = require('./routes/skills');
let workExperienceRouter = require('./routes/work-experience');

// Database setup

mongoose
	.connect(connection_string)
	.then(() => {
		console.log('Database connection successful.');
	})
	.catch(error => {
		console.log('An error occurred connecting to the database. ', error);
	});

// Server Setup
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/education', educationRouter);
app.use('/knowledge', knowledgeBaseRouter);
app.use('/profiles', profilesRouter);
app.use('/projects', projectsRouter);
app.use('/skills', skillsRouter);
app.use('/work-experience', workExperienceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
