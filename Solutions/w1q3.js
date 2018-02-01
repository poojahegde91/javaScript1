/*Q3:  Write a JavaScript program to display the current day 
	and time in the following format mm/dd/yyyy?
*/

// Get current date by new Date() in 1 variable like today

today = new Date();

// From today variable get only DATE like 4,20
  DATE = today.getDate();
// From today variable get Month and add 1 because it starts from 0 index
  Month = today.getMonth()+1;
//  From today variable get year in YYYY format 
  year = today.getFullYear();
// Logic for appending 0 if date and month is less than 10 to show 6/6/2017 to 06/06/2017
	if (DATE.toString().length < 2)
	DATE = "0" + DATE;
	if (Month.toString().length < 2)
	Month = "0" + Month;

// Print date in this format mm/dd/yyyy
console.log(Month + '/' + DATE + '/' + year);

module.exports = new Date();