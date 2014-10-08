function exch (array, src, trg) {
    if ((typeof(src) === "number") && (typeof(trg) === "number")) {
	// this code assumes that an array has already been generated
	var tmp = array[src]
	array[src] = array[trg]
	array[trg] = tmp
    }
}

function less (valA, valB) {
    return valA < valB;  
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
