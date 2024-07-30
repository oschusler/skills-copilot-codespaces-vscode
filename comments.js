// Create web server
// 1. Load the express module
// 2. Create an instance of express
// 3. Create a route for the home page
// 4. Create a route for the comments page
// 5. Start the server
// 6. Log a message to the console

// 1. Load the express module
import express from 'express';

// 2. Create an instance of express
var app = express();

// 3. Create a route for the home page
app.get('/', function (req, res) {
  res.send('Welcome to the home page!');
});

// 4. Create a route for the comments page
app.get('/comments', function (req, res) {
  res.send('Welcome to the comments page!');
});

// 5. Start the server
app.listen(3000, function () {
  console.log('Server is listening on port 3000');
});

// 6. Log a message to the console
console.log('Server is running at http://');