document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });

//define structural components ie canvas and 2d location setting.
var c = document.getElementById('cancan');
var cx = c.getContext("2d");
var width = c.width;
var height = c.height;
var vars = {};
console.log('loaded start variables');

 var radius = function(){return Math.floor(Math.random()*width/2);};
 var startCoordX = function(){ return Math.floor(Math.random()*width);};
 var startCoordY = function(){return Math.floor(Math.random()*height);};
 var midCoordX = function(){return Math.floor(Math.random()*width);};
 var midCoordY = function(){return Math.floor(Math.random()*height);};
console.log('initial co-ordinates loaded');

// random colour generator
function ranColour(){ //makes random hexadecimal colour
  var clr = '#';
  while (clr.length < 7) {
    clr += (Math.random()).toString(16).substr(-6).substr(-1);
    console.log('created random colour'+clr);
  }
  return clr;
}

//Draw Shape : circle, square, triangle
  //automated trigger -> event listener?
  //var shapetype = prompt('Choose Shape');/
function draw(){
e = Math.floor(Math.random()*3);
  if(e<=2){//circle'
   cx.beginPath();
   cx.arc(startCoordX, startCoordY, radius, 0, 2 * Math.PI, false);
   cx.fillStyle = ranColour();
   cx.fill();
   cx.lineWidth = 1;
   cx.strokeStyle = ranColour();
   cx.stroke();
    }
 else if(e>2&&e<=4){//square'
    cx.rect(startCoordX,startCoordY,ranWidth,ranHeight);
    cx.stroke();
 }
  else if (e>4){ // triangle
  cx.beginPath();
  cx.moveTo(startCoordX(), startCoordY() );
  cx.lineTo(midCoordX(), midCoordY() );
  cx.lineTo(startCoordX(), startCoordY() );
  //
   cx.fillStyle = ranColour();
   cx.fill();
   cx.lineWidth = 1;
   cx.strokeStyle = ranColour();
   cx.stroke();
    // cx.fillStyle = ranColour();
  // cx.fill();
  }
  else {console.log('number error');}
 }

setInterval(draw(),500);


  //could do draw in mouse area. Click to change shape or colour??
