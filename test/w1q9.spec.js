let expect = require('chai').expect;
let index = require('../Solutions/w1q9');

describe('Question 9 - Test code for correct output', function(){
	it('Matches the desired output', function(done){
		expect(index).to.deep.equal("0,1,1,2,3,5,8,13,21,34,55");
		done();
	})
})
