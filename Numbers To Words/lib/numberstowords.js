$(document).ready(function(){
  function returnUnitWord(unit){
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
  $("form").on("submit", function(event){
      event.preventDefault();
      var number = parseInt($("input#numberInput").val());
      var inwords="";
      var bill, mill, thous, hund, ten, unit;
      $("span#originalNumber").text(number);
      if(number<0){
        
      }else if(number<1000000000){
        mill = parseInt(number/1000000);
        number = number%1000000;
        if(mill!=0){
          if(mill<10){
            inwords += returnUnitWord(mill)+" million ";
          }else if(mill<20){
            switch (mill){
              case 10: inwords += " ten ";break;
              case 11: inwords += " eleven ";break;
              case 12: inwords += " twelve ";break;
              case 13: inwords += " thirteen ";break;
              case 14: inwords += " fourteen ";break;
              case 15: inwords += " fifteen ";break;
              case 16: inwords += " sixteen ";break;
              case 17: inwords += " seventeen ";break;
              case 18: inwords += " eighteen ";break;
              case 19: inwords += " nineteen ";break;
              default:
            }
          }else if(mill<100){
            var millTens = parseInt(mill/10);
            var remainUnits = mill%10;
            switch (millTens) {
              case 1: inwords += " ten";break;
              case 2: inwords += " twenty";break;
              case 3: inwords += " thirty";break;
              case 4: inwords += " forty";break;
              case 5: inwords += " fifty";break;
              case 6: inwords += " sixty";break;
              case 7: inwords += " seventy";break;
              case 8: inwords += " eighty";break;
              case 9: inwords += " ninety";break;
              default:
            }
            if(remainUnits>0){
              inwords+=" "+returnUnitWord(remainUnits);
            }
          }else if(mill<1000){
            var millHundreds = parseInt(mill/100);
            mill = mill % 100;
            var tensRemain = parseInt(mill/10);
            mill = mill%10
            var unitsRemain = mill;
            inwords += returnUnitWord(millHundreds)+" hundred ";

            if(tensRemain===1){
              inwords += "and"
              switch (unitsRemain) {
                case 1: inwords += " eleven ";break;
                case 2: inwords += " twelve ";break;
                case 3: inwords += " thirteen ";break;
                case 4: inwords += " fourteen ";break;
                case 5: inwords += " fifteen ";break;
                case 6: inwords += " sixteen ";break;
                case 7: inwords += " seventeen ";break;
                case 8: inwords += " eighteen ";break;
                case 9: inwords += " nineteen ";break;
                default:
              }
            }
            else if(tensRemain<10){
              switch (tensRemain) {
                case 2: inwords += " twenty ";break;
                case 3: inwords += " thirty ";break;
                case 4: inwords += " forty ";break;
                case 5: inwords += " fifty ";break;
                case 6: inwords += " sixty ";break;
                case 7: inwords += " seventy ";break;
                case 8: inwords += " eighty ";break;
                case 9: inwords += " ninety ";break;
                default:
              }
            }
            if(unitsRemain!=0){
              inwords += returnUnitWord(unitsRemain);
            }
          }
          inwords+=" million ";
        }
        thous = parseInt(number/1000);
        number = number%1000;
        if(thous!=0){
          if(thous<10){
            inwords += returnUnitWord(thous);
          }else if(thous<20){
            switch (thous) {
              case 10: inwords += " ten ";break;
              case 11: inwords += " eleven ";break;
              case 12: inwords += " twelve ";break;
              case 13: inwords += " thirteen ";break;
              case 14: inwords += " fourteen ";break;
              case 15: inwords += " fifteen ";break;
              case 16: inwords += " sixteen ";break;
              case 17: inwords += " seventeen ";break;
              case 18: inwords += " eighteen ";break;
              case 19: inwords += " nineteen ";break;
              default:
            }
          }else if(thous<100){
            var thousTens = parseInt(thous/10);
            var remainUnits = thous%10;
            switch (thousTens) {
              case 1: inwords += " ten";break;
              case 2: inwords += " twenty";break;
              case 3: inwords += " thirty";break;
              case 4: inwords += " forty";break;
              case 5: inwords += " fifty";break;
              case 6: inwords += " sixty";break;
              case 7: inwords += " seventy";break;
              case 8: inwords += " eighty";break;
              case 9: inwords += " ninety";break;
              default:
            }
            if(remainUnits>0){
              inwords+=" "+returnUnitWord(remainUnits);
            }
          }else if(thous<1000){
            var thousHundreds = parseInt(thous/100);
            thous = thous % 100;
            var tensRemain = parseInt(thous/10);
            thous = thous%10
            var unitsRemain = thous;
            inwords += returnUnitWord(thousHundreds)+" hundred ";
            if(tensRemain===1){
              inwords += "and"
              switch (unitsRemain) {
                case 1: inwords += " eleven ";break;
                case 2: inwords += " twelve ";break;
                case 3: inwords += " thirteen ";break;
                case 4: inwords += " fourteen ";break;
                case 5: inwords += " fifteen ";break;
                case 6: inwords += " sixteen ";break;
                case 7: inwords += " seventeen ";break;
                case 8: inwords += " eighteen ";break;
                case 9: inwords += " nineteen ";break;
                default:
              }
            }
            else if(tensRemain<10){
              switch (tensRemain) {
                case 2: inwords += " twenty ";break;
                case 3: inwords += " thirty ";break;
                case 4: inwords += " forty ";break;
                case 5: inwords += " fifty ";break;
                case 6: inwords += " sixty ";break;
                case 7: inwords += " seventy ";break;
                case 8: inwords += " eighty ";break;
                case 9: inwords += " ninety ";break;
                default:
              }
            }
            if(unitsRemain!=0){
              inwords += returnUnitWord(unitsRemain);
            }
          }
          inwords+=" thousand ";
        }
        hund = parseInt(number/100);
        number = number%100;
        if(hund!=0){
          inwords += returnUnitWord(hund) + " hundred ";
        }
        ten = parseInt(number/10);
        number = number%10;
        unit = returnUnitWord(number);
        if(ten===1){
          switch (unit) {
            case "one":inwords+= " eleven ";break;
            case "two":inwords+= " twelve ";break;
            case "three":inwords+= " thirteen ";break;
            case "four":inwords+= " fourteen ";break;
            case "five":inwords+= " fifteen ";break;
            case "six":inwords+= " sixteen ";break;
            case "seven":inwords+= " seventeen ";break;
            case "eight":inwords+= " eighteen ";break;
            case "nine":inwords+= " nineteen ";break;
            default:
          }
        }else if(ten>1){
          switch (ten) {
            case 2: inwords += " twenty " +unit;break;
            case 3: inwords += " thirty "+unit;break;
            case 4: inwords += " forty " +unit;break;
            case 5: inwords += " fifty " +unit;break;
            case 6: inwords += " sixty " +unit;break;
            case 7: inwords += " seventy " +unit;break;
            case 8: inwords += " eighty " +unit;break;
            case 9: inwords += " ninety " +unit;break;
            default:
          }
        }
      }else if(number===1000000000){
        inwords="ONE BILLION";
      }else if(number>1000000000){
        inwords="OUT OF RANGE NUMBER"
      }
      $("span#convertedNumber").text(inwords);
  })
})
