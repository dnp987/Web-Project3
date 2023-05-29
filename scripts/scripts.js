// Use with cars_test3.html and cars2.css
function get_data(PORT) {
    	let url = "http://localhost:" + PORT + "/car_data";
        console.log("POST: ", url);
        let low = parseInt(document.getElementById("low").value);
        let high = parseInt(document.getElementById("high").value);
        let data = {"low":low, "high":high}; //setup some test JSON data
        console.log(data);
        let status = document.getElementById('status');
        let table_test = document.getElementsByClassName("tbody")[0]; // get the table body and clear it if needed
        if ( low >= high){
        	status.innerHTML = "-- High price must be greater than the low price  --";
        	status.style.fontSize = "18px";
        	status.style.fontWeight = "bold";
        	check_table(table_test);
            return; 
        }
        if (isNaN(low)|| isNaN(high)) {
          status.innerHTML = "Enter numeric values only"; 
      	  status.style.fontWeight = "bold";
      	  check_table(table_test);
          return;          
        }

        fetch(url, {method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)}).then(response =>response.json())
        .then( (result) => {
            console.log('success: ', result);
            let res_length = result.length;

            if (result.length > 0){
              status.innerHTML = res_length + " cars " + " priced between $" + low + " and $" + high + " found (scrollable) ";
            }
            else {
            	status.innerHTML = "There are no cars found between " + low + " and " + high + " ,try again! ";
            	return;
            }
            display_header();
            display_car_data(res_length, result, table_test);
            display_footer();
         })
        .catch(error => console.log('error:', error));        
      }       
      
   function display_header(){
      	let header = document.getElementsByClassName("thead")[0];
	    let header_list = ["Year","Make", "Model", "Price", "Stock #", "Dealer", "Location", "Phone #", "Car Details"];
	       if (header.children.length > 0) {
	        return;  // load the headers once the search data has been verified and only if they've never loaded before
	    	}
		header_list.forEach(load_header);
		function load_header(value) {
	  	let cell = document.createElement("th");
	  	cell.innerHTML = value;
	  	header.append(cell);
	 	}
}
     
    function display_car_data (res_length, result, table) {
           // let table_test = document.getElementsByClassName("tbody")[0]; 
			check_table(table); // check and clear the main table if it has data
            for (let i = 0; i < res_length; i++){
              let year = result[i].year, 
                make = result[i].make, 
                model = result[i].model, 
                price = result[i].price, 
                stock = result[i].stock_num,
                name = result[i].Name,
                location = result[i].Location,
                phone = result[i].Phone,
                url = result[i].URL;

              	let row = document.createElement("tr");
              	let cell = document.createElement("td");
              	cell.innerHTML = year;
              	row.appendChild(cell);
              	
              	cell = document.createElement("td");
              	cell.innerHTML = make;
              	row.appendChild(cell);
              	
              	cell = document.createElement("td");
              	cell.innerHTML = model;
              	row.appendChild(cell);

              	cell = document.createElement("td");
              	cell.innerHTML = price;
              	row.appendChild(cell);
              	
              	cell = document.createElement("td");
              	cell.innerHTML = stock;
              	row.appendChild(cell);
              	
              	cell = document.createElement("td");
              	cell.innerHTML = name;
              	row.appendChild(cell);
              	
              	cell = document.createElement("td");
              	cell.innerHTML = location;
              	row.appendChild(cell);
              	
              	cell = document.createElement("td");
              	cell.innerHTML = phone;
              	row.appendChild(cell);
              	
              	cell = document.createElement("td");
              	let link = document.createElement("a");
              	let img = document.createElement("img")
              	link.href = url;
              	link.target = "_blank";
              	img.src = "../images/small_car.jpg"; // click on the image to view the link
              	link.appendChild(img);
               	cell.appendChild(link);
              	row.appendChild(cell);
              	table.appendChild(row);
            }
          }
          
	function display_footer(){
		let cur_date = new Date();
        let footer = document.getElementsByClassName('tfoot')[0]
        const disclaimer = " @ DNP Enterprises Inc."
        footer.innerHTML=("Data is accurate as of " + cur_date + disclaimer);
    }
    
    function check_table(table){
        let tbody_length = table.rows.length;
        if (tbody_length > 0){  //clean up the table, remove prior data before refreshing
         	for (let i= 0; i< tbody_length; i++) {
        		table.deleteRow(-1); // -1 removes the last row
        	}
         }
	}