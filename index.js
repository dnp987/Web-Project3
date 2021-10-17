// Initialize App
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true })); 

// Assign route
app.get('/', (req, res) => {
  var name = "one";
  var number = 123;
  res.render('index.pug', {name, number});
});

app.get('/test', (req, res) => {
  var testname = req.query.testname;
  var done = testname;
  console.log ("GET:", done);
  res.render('index2.pug', {done});
});

app.post('/test2', (req, res) => {
  var testname2 = req.body.testname2;
  var done = testname2;
  console.log ("POST:", done);
  res.render('index2.pug', {done});
});
  
// Start server
app.listen(5000, () => {
  console.log('App listening on port 5000');
});