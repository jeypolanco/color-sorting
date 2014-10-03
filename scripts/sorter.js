function less (valA, valB) {
    return valA.value < valB.value;  
};

function selectionSort(array) {
    for (var i = 0; i < array.length; i++) {
	var smallest = i;
	for (var j = i; j < array.length; j++) {
	    if (less(array[j], array[smallest])) {
		smallest = j;
	    }
	}
	array.exch(smallest, i);
    }
};

function isSorted (array) {
    for (var i = 1; i < array.length; i++) {
	if (less(array[i], array[i-1])) {
	    return false;
	}
    }
    return true;
};
