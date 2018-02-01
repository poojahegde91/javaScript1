let expect = require('chai').expect;
let index = require('../Solutions/w1q1');

describe('Question 1 - Test code for correct output', function(){
	it('Matches the desired output', function(done){
		var string = "My name is Nidhi. I work in NIIT and my Designation is Associate Tech Lead";
		expect(index).to.deep.equal(string);
		done();
	});
}):
