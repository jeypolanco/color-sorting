function clearCanvas () {
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.restore();
};

function drawVerticalLine (line) {
    context.lineWidth = 3;
    if (line.pointA.x === line.pointB.x) {
	context.beginPath();
	context.moveTo(line.pointA.x, line.pointA.y);
	context.lineTo(line.pointB.x, line.pointB.y);
	context.strokeStyle = line.color;
	context.stroke();
	return true;
    } else {
	return false;
    }
};

function getRandomColor () {
    var rand = Math.floor(Math.random() * 16777215);
    return '#' + rand.toString(16);
};

function drawColorLine (colorLine) {
    for (var i = 0; i < colorLine.length; i++)
	drawVerticalLine(colorLine[i]);
};

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
