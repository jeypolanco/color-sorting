var colorLine = {
    valueArr: [],
    getColorLine: function (num) {
	var x = 50
	var yA = 10
	var yB = 50
	var arr = [];
	for (var i = 0; i < num; i++) {
	    line = {};
	    line.pointA = {'x': x, 'y': yA};
	    line.pointB = {'x': x, 'y': yB};
	    line.valueArr = this.valueArr
	    line.valueIdx = i	    
	    line.valueArr[i] = getRandomRGB();
	    line.value = function () {
		return this.valueArr[this.valueIdx]
	    };
	    line.color = function () {
		return '#' + this.value().toString(16);
	    };
	    x += 5;
	    arr.push(line);
	}
	return arr;
    },
}

// var pillarLine = {
//     valueArr: [],
//     getPillarLine: function (num) {
// 	var x = 50
// 	var yA = 10
// 	var yB = 50
// 	var arr = [];
// 	for (var i = 0; i < num; i++) {
// 	    line = {};
// 	    line.pointA = {'x': x, 'y': yA};
// 	    line.pointB = {'x': x, 'y': yB};
// 	    line.valueArr = this.valueArr
// 	    line.valueIdx = i	    
// 	    line.valueArr[i] = getRandomRGB();
// 	    line.value = function () {
// 		return this.valueArr[this.valueIdx]
// 	    };
// 	    line.color = function () {
// 		return '#' + this.value().toString(16);
// 	    };
// 	    x += 5;
// 	    arr.push(line);
// 	}
// 	return arr;
//     },
// }

function animateColorLineSorting () {
    partialSort();
    clearCanvas();
    drawColorLine(colorLine.lineArray);
}

colorLine.lineArray = colorLine.getColorLine(100);
drawColorLine(colorLine.lineArray);
partialSort = selectionSort(colorLine.valueArr);
repeatFromEQ(colorLine.valueArr.length, 1000, animateColorLineSorting);
