let expect = require('chai').expect;
let index = require('../Solutions/w1q4');

function getDaysLeftForNewYear(){
	var newYearMonth = 1, newYearDate  = 1, today = new Date(), newYearDay, diff, days;
	newYearDay = new Date(today.getFullYear(),newYearMonth-1,newYearDate);
	if(today.getTime() > newYearDay.getTime()){
	  newYearDay.setFullYear(newYearDay.getFullYear()+1);
	}
	diff = newYearDay.getTime()-today.getTime();
	days = Math.floor(diff/(1000*60*60*24));
	return days;
}

describe('Question 4 - Test code for correct output', function(){
	it('Matches the desired output', function(done){
		expect(index).to.deep.equal(getDaysLeftForNewYear());
		done();
	})
})
