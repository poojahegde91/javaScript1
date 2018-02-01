let expect = require('chai').expect;
let index = require('../Solutions/w1q12');

describe('Question 12 - Test code for correct output', function(){

	it('Matches the desired output', function(done){
		var marksArray = [ ['A', 69], ['B', 71], ['C', 70], ['D', 68], ['E', 72]];
		expect(index(marksArray)[0]).to.deep.equal(70);
		done();
	})

	it('Matches the desired output', function(done){
		var marksArray = [ ['A', 49], ['B', 51], ['C', 50], ['D', 48], ['E', 52]];
		expect(index(marksArray)[1]).to.deep.equal("F");
		done();
	})

	it('Matches the desired output', function(done){
		var marksArray = [ ['A', 59], ['B', 61], ['C', 60], ['D', 58], ['E', 62]];
		expect(index(marksArray)[1]).to.deep.equal("F");
		done();
	})

	it('Matches the desired output', function(done){
		var marksArray = [ ['A', 69], ['B', 71], ['C', 70], ['D', 68], ['E', 72]];
		expect(index(marksArray)[1]).to.deep.equal("D");
		done();
	})

	it('Matches the desired output', function(done){
		var marksArray = [ ['A', 79], ['B', 81], ['C', 80], ['D', 78], ['E', 82]];
		expect(index(marksArray)[1]).to.deep.equal("C");
		done();
	})

	it('Matches the desired output', function(done){
		var marksArray = [ ['A', 89], ['B', 91], ['C', 90], ['D', 88], ['E', 92]];
		expect(index(marksArray)[1]).to.deep.equal("B");
		done();
	})

	it('Matches the desired output', function(done){
		var marksArray = [ ['A', 89], ['B', 96], ['C', 95], ['D', 94], ['E', 92]];
		expect(index(marksArray)[1]).to.deep.equal("A");
		done();
	})
})