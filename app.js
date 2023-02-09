// Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json
function init() {
    // Reference for the dropdown select menu
    var selector = d3.select("#selDataset");
    
    // Read sample data
    d3.json("../data/samples.json").then(function (data) {
      console.log(data);
        // All names
        var names = data.samples
        // New options for dropdown
        names.forEach((name) => {
            selector
                .append('option')
                .text(name)
                .property('value', name);
            })

    // Name variables for bar chart
    var sample_values = data.samples.map(x=> x.sample_values);
    var otu_ids = data.samples.map(x=> x.otu_ids);
    var otu_label = data.samples.map(x=> x.otu_labels);

    // Find top 10 OTUs
    
   
 // Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
// Make demographic chart 


//Build bar plot
function buildBarPlot(sample){
    d3.json("../data/samples.json").then((barData) => {
        var data = barData.samples;
        console.log(barData);
        var results = data.filter(x=>x.id==sample)

        var trace1 = {
            x: results[0].sample_values.slice(0,10).reverse(),
            y: results[0].otu_ids.slice(0,10).reverse().map(x=>x.toString()+" OTU"),
            text: results[0].otu_labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h",
            yaxis_autorange: false,
          };
         
          var chartData = [trace1];
      
          var layout = {
            margin: {
              l: 150,
              t: 30,
            }
          };
        
          Plotly.newPlot("bar", chartData, layout);
        }); 

// Build bubble chart

        

