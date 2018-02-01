let expect = require('chai').expect;
let index = require('../Solutions/w1q3');


describe('Question 3 - Test code for correct output', function(){
	const date=new Date();
	var d=date.getDate();
	var m=date.getMonth()+1;
	if(d<10){  
    d='0'+d;  
	}	  
	if(m<10){  
	  m='0'+m;  
	}  
  const y = date.getFullYear();
  const dd = m+"/"+d+"/"+y;
  
  it('Matches the desired output', function(done){
		expect(index).to.deep.equal(dd);
		done();
	})
})
