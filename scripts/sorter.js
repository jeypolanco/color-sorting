function exch (array, src, trg) {
    if ((typeof(src) === "number") && (typeof(trg) === "number")) {
	// this code assumes that an array has already been generated
	var tmp = array[src].color
	array[src].color = array[trg].color
	array[trg].color = tmp
	// assigns new decimal values
	array[src].value = parseInt(array[src].color.slice(1), 16);
	array[trg].value = parseInt(array[trg].color.slice(1), 16);
    }
}

function less (valA, valB) {
    return valA.value < valB.value;  
}

function getSmallest (start, array) {
    var smallest = start
    for (var j = start; j < array.length; j++) {
	if (less(array[j], array[smallest])) {
	    smallest = j;
	}
    }
    return smallest
}

function selectionSort(array) {
    var currIdx = 0;
    return function () {
	if (currIdx < array.length){
	    var smallest = getSmallest(currIdx, array)
	    exch(array, smallest, currIdx);
	    currIdx += 1;
	}
    }
}

function isSorted (array) {
    for (var i = 1; i < array.length; i++) {
	if (less(array[i], array[i-1])) {
	    return false;
	}
    }
    return true;
}
