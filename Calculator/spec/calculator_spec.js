var fs = require('fs');
eval(fs.readFileSync('./lib/calculator.js').toString());

describe("Calculator", function(){

  it("returns the sum", function(){

    expect().toEqual();

  });


  // it("return the rest", function(){
  //   expect(resta(1)).toEqual(0);
  //   expect(resta(1)).toEqual(-7);
  // });
  // it("return the mult", function(){
  //   expect(mult(1)).toEqual(1);
  //   expect(mult(-1)).toEqual(1);
  // });
  // it("return the div", function(){
  //   expect(divi(3)).toEqual(1);
  //   expect(divi(0)).toEqual("Input Error");
  //   expect(divi(3)).toEqual(1.5);
  // });
  // it("return input total", function(){
  //   expect(agregarCaracter("+")).toEqual(0);
  //   expect(agregarCaracter(4)).toEqual("04");
  // });
});
