/*Q7:  Write a JavaScript program to find the life stage of a person based on to 
	the age group. The age group classification are as follows 
	0 - 1	Infant 
	2 - 3	Toddler
	4 - 5	PreSchooler
	6 - 12	Primary School Boy
	13 - 19	Adolesent
	20 - 35	Matured Person
	36 - 55	Adult
	56 + Senior Citizen
*/

let q7 = function(ageVariable){
	// Declare and initialize age with some age like 33 or 80
		var age = 80;
	// Declare variable for life stage for particular age group
		var lifeStage = "Senior Citizen";

	// Conditional statement like if age <= 1 than assign 'Infant' to Stage Variable or
	// if age is between 36 and  55 than assign 'Adult' Stage Variable and so on
	switch(true){
  	case (age >= 0 && age <= 1):
  	
  	lifeStage = "Infant";
    console.log(lifeStage);
    break;
    
  	case (age >= 2 && age <= 3):
    
    lifeStage = "Toddler";
    console.log(lifeStage);

    break;
    
  	case (age >= 4 && age <= 5):
    
  	lifeStage = "PreSchooler";
    console.log(lifeStage);

    break;
    
  	case (age >= 6 && age <= 12):

  	lifeStage = "Primary School Boy";
    console.log(lifeStage);

    break;  
    
  	case (age >= 13 && age <= 19):
    
    lifeStage = "Adolescent";
    console.log(lifeStage);

    break;
    
  	case (age >= 20 && age <= 35):

  	lifeStage = "Matured Person";
    console.log(lifeStage);
    break;
    
  	case (age >= 36 && age <= 55):

  	lifeStage = "Adult";
    console.log(lifeStage);
    break;
    
  	default:
  	
       
}
	// Print life stage like if age is 70 than here output should be 'Senior Citizen'
	
	if(age>=70){
		console.log(lifeStage);
	}
	return "";
}
q7();
module.exports = q7;