let expect = require('chai').expect;
let index = require('../Solutions/w1q8');

describe('Question 8 - Test code for correct output', function(){
	it('Matches the desired output', function(done){
		expect(index).to.deep.equal(16);
		done();
	})
})
