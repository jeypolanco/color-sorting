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

colorLine.array = colorLine.getColorLine(100);
colorLine.array.exch = function (src, trg) {
    if ((typeof(src) === "number") && (typeof(trg) === "number")) {
	// this code assumes that an array has already been generated
	var tmp = this[src].color
	this[src].color = this[trg].color
	this[trg].color = tmp
	// assigns new decimal values
	this[src].value = parseInt(this[src].color.slice(1), 16);
	this[trg].value = parseInt(this[trg].color.slice(1), 16);
    }
};

drawColorLine(colorLine.array);
selectionSort(colorLine.array);
