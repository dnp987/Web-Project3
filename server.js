// Initialize App
const { resolveInclude } = require('ejs');
const express = require('express');
const app = express();
app.use(express.static('./'));
app.use(express.urlencoded({ extended: true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Assign route
app.get('/', (req, res) => {
    var name = 'hello';
    res.render(__dirname + '/test3.html', {name:name});
  });

  app.get('/test_api', (req, res) => {
    res.json({title:"api", message:"test"});
  });

// Start server
app.listen(5000, () => {
    console.log('App listening on port 5000');
  });
