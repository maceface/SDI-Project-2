/* Dana Mace
   SDI 1212
   Project 4
   Code Library
*/

var myLibrary = function(){
    
//.............STRINGS..............
    
    //1. Does a string follow a 123-456-7890 pattern like a phone number?
    
    var checkPhoneNum = function (phoneNum) {

        if (phoneNum.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) { //Regex insures string is formatted with 3 digits, a dash, 3 digits, another dash, and then 4 digits.
            return true;
        } else {
            return false;
        }
    };
    
    return {
        "checkPhoneNum" : checkPhoneNum,
    };
};



var newLib = new Library();

console.log("Is this a phone number? " + newLib.checkPhoneNum("888-333-1111"));
    

    



/*    //check Numeric Funciton
    var checkNumeric = function (val) {
        
        if (isNan(val)) {
            return false;
        } else {
            return true;
        }
    };



    //NAME FUNCTION
    var areYouLee = function(val){
        if (val === "Lee") {
            return false;
        } else {
            return true;
        }
    };
    
    
    
    //CHECK PATTERN FUNCTION
    var checkString = function(val) {
        
        var strLen = val.length;
        for (var i=0; 1 <= strLen; i++) {
            if (val.substring(i, i+1) === "-"){
                return i;
            }
        }
    };
    
    
    return {
        "checkNumeric" : checkNumeric,
        "areYouLee": areYouLee,
        "checkString": checkString
    };
};
    
var newLib = new Library ()

console.log("Is this a number? " + newLib.checkNumeric("my string24"));
console.log("Is this Lee? " + newLib.areYouLee("Dana"));
console.log("The dash is in position " + newLib.checkString("123-456"));

*/