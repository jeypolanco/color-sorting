function repeatFromEQ(times, time, callback) {
    if (times == 0){
	return;
    } else {
	callback();
	times -= 1;
	setTimeout(repeatFromEQ, 1000, times, time, callback);
    }
}
