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

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "dnp",
    password: "Npaapita5",
    database: "carsdb"
  });


// Assign route
app.get('/', (req, res) => {
	//var car_data = ''; // start with no data, that way there's nothing left over from the previous request
	//var low_price = req.body.low;
	//var high_price = req.body.high;
	//console.log(low_price, high_price);
	con.query('select * from dealers',(err, result) => {
  	if (err){
        console.log(err);      
        res.status(404).send("Database problems");
        }
    else{
    	console.log(result.length);
        console.log(result);
  		res.end();
    	}
    });
});

// Start server
app.listen(PORT, () => {
    console.log('App listening on port 5000');
});
