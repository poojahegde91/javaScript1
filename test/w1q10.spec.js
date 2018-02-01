 let expect = require('chai').expect;
 let index = require('../Solutions/w1q10');

 describe('Question 10 - Test code for correct output', function(){

 	var fact = 1;
 	var factorialArray = "";
 	for(var j=11;j<=20;j++){
 		for(var i=1; i<=j; i++){
 			fact= fact*i;
 		}
 		if(j==11){
 			factorialArray = fact;
 			continue;
 		}
 		factorialArray += ","+fact;
 	}

 	it('Matches the desired output', function(done){
 		expect(index).to.equal(factorialArray);
 		done();
 	});
 });
