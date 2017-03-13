// motion and orientation variables are global
var xmotion, ymotion, zmotion; //MOTION
var x, y, z;
var r=100;
var g=100; 
var b=100;
// P5 STUFF
function setup() {
	var myCanvas=createCanvas(500, 500);
	myCanvas.parent('house');
}

function draw() {
	background(r, g, b);
}

function changeColor(xmotion, ymotion, zmotion){
	// Reduce the amount that the r, g, and b value increase by
	x=map(xmotion, 0, 5000, 0, 50);
	y=map(ymotion, 0, 5000, 0, 50);
	z=map(zmotion, 0, 5000, 0, 50);
	// Increases the r, g, b value of the house color
	// When a value reaches 255, it sets back to 0
	if(r+x>255){
		r=0;
	}
	else{
		r=r+x;
	}
	if(g+y>255){
		g=0;
	}
	else{
		g=g+y;
	}
	if(b+z>255){
		b=0;
	}
	else{
		b=b+z;
	}

}

function init(){

////// MOTION

function deviceMotion(event){
	var acc=event.acceleration; //will return acceleration object
	// extract x, y, z from acceleration
	var xmotion=Math.abs(acc.x);
	var ymotion=Math.abs(acc.y);
	var zmotion=Math.abs(acc.z);

	// Send device motion information to the desktop version
	socket.emit('orientation', {
		'xmotion': xmotion,
		'ymotion': ymotion,
		'zmotion': zmotion
	});
}
window.addEventListener('devicemotion', deviceMotion, true);
}

window.addEventListener('load', init);

