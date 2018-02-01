let expect = require('chai').expect;
let index = require('../Solutions/w1q2');

describe('Question 2 - Test code for correct output', function(){
	describe('yourName is a type of string and should have value', function(){
		it('yourName is a type of string', function(done){
			expect(index()[0]).to.be.a('string');
			done();
		})

		it('yourName should not be undefined', function(done){
			expect(index()[0]).to.not.equal(undefined);
			done();
		})

		it('yourName should not be empty', function(done){
			expect(index()[0]).to.not.equal('');
			done();
		})
	})

	describe('luckyNumber is a type of number and should have value 37', function(){
		it('luckyNumber is a type of number', function(done){
			expect(index()[1]).to.be.a('number');
			done();
		})

		it('luckyNumber should not be undefined', function(done){
			expect(index()[1]).to.not.equal(undefined);
			done();
		})

		it('luckyNumber should be 37', function(done){
			expect(index()[1]).to.deep.equal(37);
			done();
		})
	})

	describe('salary is a type of number and should have value 123.45', function(){
		it('salary is a type of number', function(done){
			expect(index()[2]).to.be.a('number');
			done();
		})

		it('salary should not be undefined', function(done){
			expect(index()[2]).to.not.equal(undefined);
			done();
		})

		it('salary should be 123.45', function(done){
			expect(index()[2]).to.deep.equal(123.45);
			done();
		})
	})

	describe('ownACar is a type of number and should have value 37', function(){
		it('ownACar is a type of boolean', function(done){
			expect(index()[3]).to.be.a('boolean');
			done();
		})

		it('ownACar should not be undefined', function(done){
			expect(index()[3]).to.not.equal(undefined);
			done();
		})

		it('ownACar should be true', function(done){
			expect(index()[3]).to.deep.equal(new Boolean(1));
			done();
		})
	})

	describe('interest with undefined value', function(){
		it('interest value should be undefined', function(done){
			expect(index()[4]).to.deep.equal(undefined);
			done();
		})
	})
})
