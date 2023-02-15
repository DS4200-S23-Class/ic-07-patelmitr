const FRAME_HEIGHT = 200; 
const FRAME_WIDTH = 500; 
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

//add frame 
const FRAME1 = 
d3.select("#vis1")
    .append("svg")
        .attr("height", FRAME_HEIGHT)
        .attr("width", FRAME_WIDTH)
        .attr("class", "frame");

// Put a circle in the frame 
FRAME1.append("circle")
        .attr("cx", 10 + Margins.left)
        .attr("cy", 10 + Margins.right)
        .attr("r", 30)
        .attr("class", "firstCircle");

// Binding data 
const data = [55000, 48000, 27000, 66000, 90000];

// Add points based on data 
FRAME1.selectAll('points')
        .data(data)
        .enter()
        .append("Circle")
        .attr("cx", (d) => {return d;})
        .attr("cy", 0 + Margins.top)
        .attr("r", 20)
        .attr("class", "point"); 

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom; 
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;

// Scaling functions 

const MAX_X = d3.max(data2, (d) => {return d;}); 
console.log("Max X1 " + MAX_X);

// scale function
const X_SCALE = d3.scaleLinear()
                .domain([0, (MAX_X + 10000)])
                .range([0, VIS_WIDTH]);

// adds an axis 
FRAME1.append("g")
        .attr("transform", 
        "translate(" + MARGINS.left + "," + (VIS_HEIGHT + MARGINS.top) + ")")
        .call(d3.axisBottom(X_SCALE).ticks(4))
        .attr("font-size", "20px");