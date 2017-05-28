var triang = function (x1, y1, x2, y2, x3, y3) {
  return "M"+x1+","+y1+"L"+x2+","+y2+"L"+x3+","+y3+"Z";
};

var width = 345,
    height = 400,
    n = 20;

var svg = d3.select("section").append("svg")
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
var color = "#fff";
var colors = [color];

var j = 0;
var triangles = svg
  .selectAll(".triangles")
  .data(data)
  .enter()
  .append("path")
  .attr("class", "triangles")
  .attr("fill", function (d,i) {
    // return "none";
    return colors[0];
  })
  .attr("stroke", function (d,i) {
    // return colors[0];
    return "none";
  })
  .attr("stroke-opacity", 1)
  .attr("fill-opacity", 0.1)
  .attr("stroke-width", 0.5);

var name = svg.selectAll(".name")
  .data(colors)
  .enter()
  .append("text")
  .attr("class", "name")
  .attr("x", 280)
  .attr("y", height/2+12)
  .attr("font-family", "'Abel', sans-serif")
  .attr("font-size", "60px")
  .attr("text-anchor", "middle")
  .attr("fill", color)
  .text("cod.ai");

// setInterval(function () {
  triangles.attr("d", function(d) {
      return triang(
         0, height/2,
         180, height/2,
         Math.random()*160 + 20, Math.random()*(height-20));
  });
// }, 300);

