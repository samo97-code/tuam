const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 8080; // Step 1

// Step 2
mongoose.connect(process.env.MONGODB_URI || 'mongodb://root:1997samo1997@ds041758.mlab.com:41758/heroku_v3jqkpj6', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!!!');
});

//Step 3
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/user', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// if(process.env.NODE_ENV === 'production') {
// app.use(express.static('client/build'));
// app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  })
// }
//


app.listen(PORT, console.log(`Server is starting at ${PORT}`));

