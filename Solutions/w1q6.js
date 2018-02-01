/*Q6:  Write a JavaScript program to find the largest of 5 numbers 
	using conditional statement .
*/

// Declare and initialize 5 variables with value a=7, b=8, c=0, d=11, e=99

var a=7, b=8, c=0, d=11, e=99;

// Declare variable for largestNumber with 0 value
var largestNumber = 0;

// Conditions if any number is greater than largestNumber 
// so largestNumber should replace with that largest number.
if(a>b && a>c && a>d && a>e){
  largestNumber = a;
}
else if (b>c && b>d && b>e){
  largestNumber = b;
}
else if (c>d && c>e){
  largestNumber = c;
}
else if (d>e){
  largestNumber = d;
}
else
largestNumber = e;


// Print Largest Number among a, b, c, d, e
console.log("largest Number amoung a,b,c,d,e is " + largestNumber);
module.exports =  0;