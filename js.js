//document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
});

//define structural components ie canvas and 2d location setting.
var cc = document.getElementById("cancan");
var ccx = c.getContext("2d");
var width = cc.width;
var height = cc.height;
var vars = {};
console.log("loaded start variables");

var radius = function() {
  return Math.floor(Math.random() * width / 2); };
var startCoordX = function() {
  return Math.floor(Math.random() * width); };
var startCoordY = function() {
  return Math.floor(Math.random() * height); };
var midCoordX = function() {
  return Math.floor(Math.random() * width); };
var midCoordY = function() {
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

//Draw Shape : circle, square, triangle
//automated trigger -> event listener?
//var shapetype = prompt('Choose Shape');/
function drawCan() {
  var e = Math.floor(Math.random() * 6);
  var colouring = ranColour();
  if (e <= 2) {
    //circle'
    ccx.beginPath();
    ccx.arc(startCoordX, startCoordY, radius, 0, 2 * Math.PI, false);
    ccx.fillStyle = ranColour();
    ccx.fill();
    ccx.lineWidth = '1';
    ccx.strokeStyle = ranColour();
    ccx.stroke();
  } else if (e > 2 && e <= 4) {
    //square'
    ccx.rect(startCoordX, startCoordY, ranWidth/4, ranHeight/4);
    ccx.stroke();
  } else if (e > 4) {
    // triangle
    ccx.beginPath();
    ccx.moveTo(startCoordX(), startCoordY());
    ccx.lineTo(midCoordX(), midCoordY());
    ccx.lineTo(startCoordX(), startCoordY());
    //decide between bellow and bellow commented.
    ccx.fillStyle = ranColour();
    ccx.fill();
    ccx.lineWidth = '1';
    ccx.strokeStyle = ranColour();
    ccx.stroke();
    // cx.fillStyle = ranColour();
    // cx.fill();
  } else {
    console.log("number error");
  }
}

setInterval(drawCan(), 500);

//could do draw in mouse area. Click to change shape or colour??
