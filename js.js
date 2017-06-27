// generate random shape, size and colour @ random spot.

//define structural components ie canvas and 2d location setting.
var c = document.getElementById('cancan');
var cx = c.getContext("2d");
var width = c.width;
var height = c.height;
var vars = {};
console.log('loaded start variables');

 var radius = Math.random()*width/2;
 var startCoordX = Math.random()*width;
 var startCoordY = Math.random()*height;
 var midCoordX = Math.random()*width;
 var midCoordY = Math.random()*height;

/*function ranLoc(ex){

  vars.Xval = Math.random()*width;
  vars.Yval = Math.random()*height;
  vars.radius = Math.random()*width/3;
};*/


  //defining visual style of canvas as 2D

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
  //Needs automated trigger -> event listener?
  // Need dom loader.
   /var shapetype = prompt('Choose Shape');/

switch (shapetype){
  case 'circle':
   cx.beginPath();
   cx.arc(startCoordX, startCoordY, radius, 0, 2 * Math.PI, false);
   cx.fillStyle = ranColour();
   cx.fill();
   cx.lineWidth = 1;
   cx.strokeStyle = ranColour();
   cx.stroke();
    break;

  case 'square':
    cx.rect(startCoordX,startCoordY,ranWidth,ranHeight);
    cx.stroke();
    break;

  case 'triangle':
  cx.beginPath();
  cx.moveTo(startCoordX, startCoordY);
  cx.lineTo(midCoordX, midCoordY);
  cx.lineTo(90, 70);
  cx.fill();
 }




var locObj = function(){

};


//draw circle


  //could do draw in mouse area. Click to change shape or colour??
