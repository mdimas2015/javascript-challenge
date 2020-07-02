// from data.js
var tableData = data;

//Import all the rows from data
var ttable = d3.select("tbody");

tableData.forEach((report) => {
    var row = ttable.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});


//When select from dropdown menu, the display text change accordingly 
var selectdropdown = d3.select("#selDataset");

selectdropdown.on("change", function() {
  var value = selectdropdown.property("value");
  console.log(value)

  if(value === "date") {
    d3.select("#textlabel").text(t => "Enter a Date");
    d3.select(".form-control").attr("placeholder", "1/1/2010");
  }

  else if(value === "city") {
    d3.select("#textlabel").text(t => "Enter a City");
    d3.select(".form-control").attr("placeholder", "ackerman, windham, etc.");
  }

  else if(value === "state") {
    d3.select("#textlabel").text(t => "Enter a State");
    d3.select(".form-control").attr("placeholder", "ar, wa, etc.");
  }

  else if(value === "country") {
    d3.select("#textlabel").text(t => "Enter a Country");
    d3.select(".form-control").attr("placeholder", "us / ca");
  }

  else if(value === "shape") {
    d3.select("#textlabel").text(t => "Enter a Shape");
    d3.select(".form-control").attr("placeholder", "circle, fireball, etc.");
  };

});

//Create a function to search the match data by Date, City and etc.
function search() {

  //Remove the current table
  d3.select("tbody").selectAll("tr").remove();

  //Read the input value 
  var inputvalue = d3.select("#datetime").node().value.toLowerCase();

  //Read the selection from dropdown menu 
  var value = selectdropdown.property("value");

  //Find the match from data.js
  if (value === 'date') {
    var filteredData = tableData.filter(input => input.datetime === inputvalue);
    console.log(filteredData);}
    
  else if (value === 'city') {
    var filteredData = tableData.filter(input => input.city === inputvalue);
    console.log(filteredData);}
    
  else if (value === 'state') {
    var filteredData = tableData.filter(input => input.state === inputvalue);
    console.log(filteredData);}

  else if (value === 'country') {
    var filteredData = tableData.filter(input => input.country === inputvalue);
    console.log(filteredData);}

  else if (value === 'shape') {
    var filteredData = tableData.filter(input => input.shape === inputvalue);
    console.log(filteredData);};
  
  //Rewrite the table row for filtered data only
  var ttable = d3.select("tbody");
  filteredData.forEach((report) => {
    var row = ttable.append("tr");
    Object.entries(report).forEach(([key,value]) => {
    var cell = row.append("td");
    cell.text(value);
    });

  });

    
};

//Apply the search function when click the "Filter Table" button
var selectbutton = d3.select("#filter-btn");
selectbutton.on("click", search);
