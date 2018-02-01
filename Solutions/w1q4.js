/*Q4:  Write a Javascript program to calculate the number of days left 
	untill your next New year? 
*/

// Declare 5 variables like newYearMonth, newYearDate, today, newYearDay, diff and days
	var newYearMonth, newYearDate, today, newYearDay , diff, days;

// Initialize 'newYearMonth' to 1 for Jan
	newYearMonth = 1;

// Initialize 'newYearDate' to 1
	newYearDate = 1;

// define variable 'today' with current date
	today = new Date();

// define 'newYearDay' with new Date(today full year, newYearMonth-1, newYearDate) (month-1 because month starting from 0 index)
	newYearDay = new Date(today.getFullYear()+1,(newYearMonth-1),newYearDate);
	
// Put Condition if today getTime is greater than bday getTime 
// than setFullYear for 'newYearDay' to +1 so we can calculate for next year birthday
	if (today.getTime() > newYearDay.getTime()){
		newYearDay.setFullYear(newYearDay()+1);
	}


// Define variable 'diff' from newYearDay getTime and today getTime
	
	diff = newYearDay.getTime() - today.getTime();

// Define variable 'days' by dividing it by (1000*60*60*24) 
// i.e (milliseconds, seconds, minutes, hours) & rounding to floor
	days = Math.floor(diff/(1000*60*60*24));


// Print number of days untill next new year
	console.log("Number of days left in this year is " + days);

module.exports = 0;