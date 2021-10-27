// Use with index.pug, index2.pug
// Initialize App
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');  // if you don't use this, then you use specify the .pug file extension.
app.set('views', './views'); // views is the default if app.set('views', './views') is not used. Use this if you use a different directory.

// Assign route
app.get('/', (req, res) => {
  var name = "one";
  var number = 123;
  res.render('index', {name, number});
});

app.get('/test', (req, res) => {
  var done = req.query.testname;
  console.log ("GET:", done);
  res.render('index2', {done});
});

app.post('/test2', (req, res) => {
  var done = req.body.testname2;
  console.log ("POST:", done);
  res.render('index2', {done});
});
  
// Start server
app.listen(5000, () => {
  console.log('App listening on port 5000');
});