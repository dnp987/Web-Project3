// Use with cars_test3.html. Created to work with Pandas db files
// Initialize App
//const { resolveInclude } = require('ejs');
const  dataForge = require('data-forge');
require('data-forge-fs');
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
    res.render(__dirname + '/cars_test3.html');
});

// Assign route
app.post('/car_data', (req, res) => {
	var low_price = req.body.low;
	var high_price = req.body.high;
	//console.log(low_price, high_price);
	const df = dataForge.readFileSync('C:/Users/dpenn/Desktop/Cars/prices.csv').parseCSV();
	const columnNames = df.getColumnNames();
	console.log(columnNames);
	console.log(df.count());
	console.log(df.head(5).toString());
	console.log(df.getSeries('ID').toString());
	/*
	con.query('select year, make, model, price, stock_num, Name, Location, Phone, URL from dealers, prices where dealers.ID  = prices.dealer_id and price >' + low_price + ' and price <= ' + high_price + ' order by price asc;',(err, result) => {
  	if (err){
        console.log(err);      
        res.status(404).send("Database problems - unable to connect");
        }
    else{
//    	console.log(result.length);
//      console.log(result);
        res.send(result);
  		res.end();
    	}
    });*/
});

// Start server
app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
});
