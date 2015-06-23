'use strict';

var express = require('express');
var app = express();

// var playersRoutes = express.Router();

// mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/notes_development');

app.use(express.static(__dirname + '/build'));

// require('./routes/players-routes')(playersRoutes);

// app.use('/api', playersRoutes);

app.listen(process.env.PORT || 3000, function() {
  console.log('server running on port ' + (process.env.PORT || 3000));
});