function fnGetDiffDays(){
	var oneDay = 1000 * 60 * 60 * 24;
	var firstDate = new Date();
	var secondDate = new Date(2017,09,23);
		// Convert both dates to milliseconds
	var date1_ms = firstDate.getTime();
	var date2_ms = secondDate.getTime();

	// Calculate the difference in milliseconds
	var difference_ms = Math.abs(date1_ms - date2_ms);

	// Convert back to days and return
	var diffDays = Math.round(difference_ms/oneDay);
	return diffDays;
}