let expect = require('chai').expect;
let index = require('../Solutions/w1q11');

describe('Question 11- Test code for correct output', function(){
	it('Matches the desired output', function(done){
		expect(index(12321)).to.deep.equal("Palindrome number");
		done();
	})

	it('Matches the desired output', function(done){
		expect(index(2345)).to.deep.equal("Not Palindrome number");
		done();
	})
})
