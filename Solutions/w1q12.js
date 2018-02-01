/*Q12:  12. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade?
 
Student nameMarks
David 	80
Vinoth	77
Divya 	88
Ishitha	95
Thomas	68
 
 
Range	Grade
60		F
70		D
80		C
90		B
100		A
*/

let q12 = function(marksArray){
	// Declare and Initialize array [ ['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]]
	var array = [80, 77, 88, 95,68];

	// Declare and initialize total marks with 0 value
	var total = 0;
	
	// Declare variable grade
	var grade ;

	
	// Iterate array and sum total marks
	for(var i=0; i<array.length; i++){
		
		total = total+array[i];
	}
	console.log("Total marks is " + total);
	// Find average totalMarks/array length
	var avg = total/array.length;
	// Print average marks
	console.log("Avarage maraks is " + avg);
	// initialize grade according to condition like if average is less than equal to 60 grade should be 'F' and so on
	switch(true){
  	case (avg <= 60 ):
        
  		grade = "F";
        break;
        
  	case (avg >= 60 && avg <70 ):
        grade = "D";
        break; 
        
  	case (avg >= 70 && avg <80 ):
        grade = "C"
        break;
  
  	case (avg >= 80 && avg <90 ):
        grade = "B";
        break;
        
  	default:  
        grade = "A";
        
}

	// Print grade
	
	console.log("Grade is " + grade);

	return [0, 0];
}
q12();
module.exports = q12;