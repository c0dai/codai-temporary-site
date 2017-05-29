var triang = function (x1, y1, x2, y2, x3, y3) {
  return "M"+x1+","+y1+"L"+x2+","+y2+"L"+x3+","+y3+"Z";
};

var width = 160,
    height = 300,
    n = 20,
    padding = 20,
    color = "#fff",
    duration = 2000,
    littleDelay = 200;

var svg = d3.select("#logo").append("svg")
  .attr("title", "cod.ai")
  .attr("version", 1.1)
  .attr("xmlns", "http://www.w3.org/2000/svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "container")
  .append("g");

var data = d3.range(n).map(function(d, i) {
  return { x: 0, y: 0 };
});

var triangles = svg
  .selectAll(".triangles")
  .data(data)
  .enter()
  .append("path")
  .attr("class", "triangles")
  .attr("fill", function (d,i) {
    // return "none";
    return color;
  })
  .attr("stroke", function (d,i) {
    // return color;
    return "none";
  })
  .attr("fill-opacity", 0.1);
  //.attr("stroke-opacity", 1)
  //.attr("stroke-width", 0.5);

var generateTriangle = function() {
  return triang(
     0, height/2,
     width, height/2,
     Math.random()*(width-padding) + padding, Math.random()*(height-padding)
  );
};

var repeat = function () {
  triangles
  .transition()
  .duration(function(d, i) { return duration; })
  .attr("d", generateTriangle)
  .delay(littleDelay)
  .each("end", repeat);
}

// Draw first triangles
triangles.attr("d", generateTriangle);
// Keep drawing triangles
repeat();
