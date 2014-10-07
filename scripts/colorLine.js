var colorLine = {
    getColorLine: function (num) {
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
	    x += 5;
	    arr.push(line);
	}
	return arr;
    },
};

function animateColorLineSorting () {
    partialSort();
    clearCanvas();
    drawColorLine(colorLine.array);
}

colorLine.array = colorLine.getColorLine(100);
drawColorLine(colorLine.array);
partialSort = selectionSort(colorLine.array);
repeatFromEQ(colorLine.array.length, 1000, animateColorLineSorting);
