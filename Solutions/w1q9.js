/*Q9:  Write a javascript code to perform Fibonacci series. */

// Declare and initialize first variable by 0 and second variable by 1 & 
// temp variable for addition of 2 previous number

// Declare and initialize fibonacci series by 0,1 first 2 numbers of fibonacci series
//Write a program to perform Fibonacci series till a given input.
var n = 10;

var f = [];
f[0]= 0;
f[1]= 1;
console.log(f[0]);
console.log(f[1]);
// Iterate loop from 1 to 10 and append addition of 2 previous number in fibonacci variable
for(i = 2; i<n; i++){
  f[i]=f[i-1]+f[i-2];
  
// Print fibonacci series like 0,1,1,2,3,5,8,13.....

console.log(f[i]);
  
}
module.exports = 0;