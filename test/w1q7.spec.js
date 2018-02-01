let expect = require('chai').expect;
let index = require('../Solutions/w1q7');

describe('Question 7 - Test code for correct output', function(){

	it('If age is less than equal to 1 output should be Infant', function(done){
		expect(index(1)).to.deep.equal("Infant");
		done();
	})

	it('If age is between 2 & 3 output should be Toddler', function(done){
		expect(index(3)).to.deep.equal("Toddler");
		done();
	})

	it('If age is between 4 & 5 1 output should be PreSchooler', function(done){
		expect(index(4)).to.deep.equal("PreSchooler");
		done();
	})

	it('If age is between 6 & 12 output should be Primary School Boy', function(done){
		expect(index(10)).to.deep.equal("Primary School Boy");
		done();
	})

	it('If age is between 13 & 19 output should be Adolesent', function(done){
		expect(index(16)).to.deep.equal("Adolesent");
		done();
	})

	it('If age is between 20 & 35 output should be Matured Person', function(done){
		expect(index(30)).to.deep.equal("Matured Person");
		done();
	})

	it('If age is between 36 & 55 output should be Adult', function(done){
		expect(index(46)).to.deep.equal("Adult");
		done();
	})

	it('If age is greater than 56 output should be Senior Citizen', function(done){
		expect(index(70)).to.deep.equal("Senior Citizen");
		done();
	})
})
