/*Q8:  Write a JavaScript program which iterates from 1 to 50 and 
	counts the numbers divisible by 3.
*/

// Declare & initialize variable count with 0 value 
var count = 0;


// Iterate loop from 1 to 50
// If number is divisible by 3 and remainder is 0 then increment count by 1
	for(i=1;i<=50;i++){
  
  if(i % 3 === 0)
  count = count + 1;
  
}

// Print the count value;
console.log("count is " + count);

module.exports =  0;