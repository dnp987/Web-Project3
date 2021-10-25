// Initialize App
//const { resolveInclude } = require('ejs');
const express = require('express');
const app = express();
var PORT = 5000;
app.use(express.static('./'));
//app.use(express.urlencoded({ extended: true })); you only need this if you're sending data from an html form
app.use(express.json());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Assign route
app.get('/', (req, res) => {
    var name = 'hello';
    res.render(__dirname + '/test3.html', {name:name});
});

app.get('/test_get', (req, res) => {
  console.log(req.method);
  console.log(req.query);
  console.log(req.query.test);
  console.log(req.query.test2);
  var test = req.query.test;
  var test2 = req.query.test2;
  res.json({title:"get " + test, message:"test " + test2});
  res.end();
});

app.post('/test_post',  (req,res) => {
  console.log(req.method);
  console.log(req.body);
  console.log(req.body.test);
  console.log(req.body.test2);
  var test = req.body.test;
  var test2 = req.body.test2;
  res.json({title:"post "+ test, message:"test2 " + test2});
  res.end();
})

// Start server
app.listen(PORT, () => {
    console.log('App listening on port 5000');
});
