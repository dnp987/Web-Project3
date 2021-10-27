// Use with test2.html
// Initialize App
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true })); 

// Assign route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/test2.html');
});

app.get('/test', (req, res) => {
  var testname = req.query.name;
  console.log ("GET:", testname);
  res.send(testname);
});

/*app.post('/test2', (req, res) => {
  var testname2 = req.body.testname2;
  var done = testname2;
  console.log ("POST:", done);
  res.render('index2.pug', {done});
});*/
  
// Start server
app.listen(5000, () => {
  console.log('App listening on port 5000');
});