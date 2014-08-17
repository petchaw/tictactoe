// Include the Node HTTP library
var http = require('http');
// Include the Express module
var express = require('express');
// Create an instance of Express
var app = express();

// Set the view engine
app.set('view engine', 'ejs');
// Where to find the view files
app.set('views', './views');

// Mark the public dir as a static dir
app.use(express.static('./public'));


// A route for the home page - will render a view
app.get('/', function(req, res) {
    res.render('index');
});

// Start the app
http.createServer(app).listen(3000, function() {
    console.log('Express app started');
});
