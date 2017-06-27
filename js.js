document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");// content loaded
});

//define structural components ie canvas and 2d location setting.
var cc = document.getElementById("cancan");
var ccx = cc.getContext("2d");
var width = cc.width;
var height = cc.height;
console.log("loaded start variables");
//shape parameter functions
var radius = function() {
  return Math.floor(Math.random() * 100); };
var CoordX = function() {
  return Math.floor(Math.random() * width); };
var CoordY = function() {
  return Math.floor(Math.random() * height); };
console.log("initial co-ordinates loaded");

// random colour generator
function ranColour() {
  //makes random hexadecimal colour
  var clr = "#";// starts Hexicode
  while (clr.length < 7) {//sets Hexilength
    clr += Math.random().toString(16).substr(-6).substr(-1); //isolates hexistring size form within random code and sets to clr var
   }
  console.log("created random colour" + clr);
  return clr;
}

//generate selector, 'e'
//select draw shape : circle, square, triangle
// if other value added, return error value.
function drawCan() {
  var e = Math.round(Math.random() * 7);
  console.log(e)
  var colouring = ranColour();
  if (e <= 3) {
    //circle
    ccx.beginPath();
    ccx.arc(CoordX, CoordY, radius, 0, 2 * Math.PI, false);
    ccx.fillStyle = ranColour();
    ccx.fill();
    ccx.lineWidth = '1';
    ccx.strokeStyle = ranColour();
    ccx.stroke();
  } else if (e > 3 && e <= 5) {//square
    //square draw
    ccx.rect(CoordX(), CoordY(), CoordX(), CoordY());
    ccx.stroke();
    //square filler
    ccx.fillstyle = ranColour();
    ccx.fill();
  } else if (e > 5) {//triangle
    // triangle draw
    ccx.beginPath();
    ccx.moveTo(CoordX(), CoordY());
    ccx.lineTo(CoordX(), CoordY());
    ccx.lineTo(CoordX(), CoordY());
    // fill and colour script
    ccx.fillStyle = ranColour();
    ccx.fill();
    ccx.lineWidth = '1';
    ccx.strokeStyle = ranColour();
    ccx.stroke();
  } else {
    //return error
    console.log("number error");
  }
}
setInterval(drawCan, 500);

//could do draw in mouse area. Click to change shape or colour??
//found bug, coord functions were called as value rather than getting a new variable each time.
