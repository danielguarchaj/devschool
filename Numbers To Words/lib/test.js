function unique(unit){
  switch (unit) {
    case 1: return "one";break;
    case 2: return "two";break;
    case 3: return "three";break;
    case 4: return "four";break;
    case 5: return "five";break;
    case 6: return "six";break;
    case 7: return "seven";break;
    case 8: return "eight";break;
    case 9: return "nine";break;
    default: return "";
  }
}

var decenas = function(decens, united) {
    var testing;
    if (decens > 1) {
      switch (decens) {
          case 2: testing = "twenty";break;
          case 3: testing = "thirty";break;
          case 4: testing = "fourty";break;
          case 5: testing = "fifty";break;
          case 6: testing = "sixty";break;
          case 7: testing = "seventy";break;
          case 8: testing = "eighty";break;
          case 9: testing = "ninety";break;
        }
    } else if (decens === 1) {
      switch (united) {
          case 0: testing = "ten"; break;
          case 1: testing = "eleven";break;
          case 2: testing = "twelve";break;
          case 3: testing = "thirteen";break;
          case 4: testing = "fourteen";break;
          case 5: testing = "fifteen";break;
          case 6: testing = "sixteen";break;
          case 7: testing = "seventeen";break;
          case 8: testing = "eighteen";break;
          case 9: testing = "nineteen";break;
        }
    }
    if (decens > 1) {
      if (united > 0) {
        testing = testing + " " + unique(united);
      }
    } else {
      testing = unique(united);
    };

    return testing;
}

var centenas = function(cnt){
  var test = unique(cnt);
  test = test + "hundred";
  console.log(test);
  return test;
}

var testNumber = function(number){
  var value = number;

  if (value < 10) {
    number = "0" + number.toString();
  } else {
    number = number.toString();
  }
  var second = parseInt(number[number.length - 2]);
  var first = parseInt(number[number.length - 1]);
  var total = decenas(second, first);

  // if(tam>2){
  //
  // }else if(tam>1){
  //
  //   var first = parseInt(number[1]);
  //   var second = parseInt(number[0]);
  //
  //   var totalDecenas = decenas(second,first);
  //
  //   if(second!=1){
  //       totalDecenas += unique(first);
  //
  //   }
  // }else if(tam>0){
  //
  // }

  return total;

}
