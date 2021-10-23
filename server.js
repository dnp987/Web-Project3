// Initialize App
//const { resolveInclude } = require('ejs');
const express = require('express');
const app = express();
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
  res.json({title:"get", message:"test"});
});

app.post('/test_post',  (req,res) => {
  console.log(req.method);
  console.log(req.body);
  console.log(req.body.test);
  console.log(req.body.test2);
  res.json({title:"post", message:"test2"});
})

// Start server
app.listen(5000, () => {
    console.log('App listening on port 5000');
});
