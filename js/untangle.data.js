if (untangleGame === undefined) {
var untangleGame = {};
}

untangleGame.circles = [];

untangleGame.Circle = function(x,y,radius){
this.x = x;
this.y = y;
this.radius = radius;
};

function randRadius() {
	var radius=20*Math.random()|3;
	return radius;
}
untangleGame.createRandomCircles = function(width, height) {
// randomly draw 5 circles
var circlesCount = 250;
//var circleRadius = randRadius();
for (var i=0;i<circlesCount;i++) {
var x = Math.random()*width;
var y = Math.random()*height;
var circleRadius = randRadius();
untangleGame.circles.push(new
   untangleGame.Circle(x,y,circleRadius));
untangleGame.drawCircle(x, y, circleRadius);
}
};