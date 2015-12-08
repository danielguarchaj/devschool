var fs = require('fs');
eval(fs.readFileSync('./lib/test.js').toString());

describe("Single Number", function(){

  it("retuns the correct number", function(){
    expect(unique(1)).toEqual("one");
    expect(centenas(1)).toEqual("onehundred");
    expect(testNumber(29)).toEqual("twenty nine");
    expect(testNumber(60)).toEqual("sixty");
    expect(testNumber(000009)).toEqual("nine");
    expect(testNumber(61)).toEqual("sixty one");
    expect(testNumber(99)).toEqual("ninety nine");
  });

});
