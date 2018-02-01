/*Q11:  Write a JavaScript program to check whether the given number is palindrome or not .
	Input – 12321
	Output – Palindrome.
	Input – 2345
	Output – Not palindrome.
*/

let q11 = function(number){
	// Declare temp variables
	
	// Declare & initialize numbers which we want to check its palindrome or not
	var n = 123454321;

	// Put logic to reverse the number like 12345 should become 54321 & keep it in temp variable
	
	n = n + "";
	rn = n.split("").reverse().join("");
	// If input number and temp reverse variable are equal then 
	// the input number is Palindrome or else input number is Not Palindrome put this value in variable
	if(n === rn){
  	console.log("Palindrome");
	}
	else 
  	console.log("Not a palindrome");

	// Print that input variable is Palindrome or Not
	
	return "";
}
q11();
module.exports = q11;


