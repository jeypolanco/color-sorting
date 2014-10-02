var context = document.getElementById('canvas').getContext('2d');

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

function drawColorLine (num) {
    var x = 50
    var yA = 10
    var yB = 50
    var arr = [];
    for (var i = 0; i < num; i++) {
	line = {};
	line.pointA = {'x': x, 'y': yA};
	line.pointB = {'x': x, 'y': yB};
	line.color = getRandomColor();
	line.value = parseInt(line.color.slice(1), 16)
	drawVerticalLine(line);
	x += 5;
	arr.push(line);
    }
    return arr;
};

var unsortedArray = drawColorLine(100);
