/*Q5:  Write a program with two variables declared, a string and a letter. 
	Now count the number of occurrences of the specified letter within the string.
	Sample arguments : 'gmail.com', 'm'
	Expected output : 2
*/

// Declare and initialize string variable with 'gmail.com'
var x = 'gmail.com';

// Declare and initialize letter variable with 'm'
var y = 'm';
// Declare and initialize count variable with 0
var count = 0;

// Iterate loop for string characters

for(var i=0; i<x.length; i++){
	if(x[i]===y){
		count++;
	}
}

// Print count variable

console.log("Number of occurrences of the specified letter within the string is " + count);

module.exports =  0;