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
        };
    };
    
    

    //2.  Does a string follow an aaa@bbb.ccc pattern like an email address?
    
    var checkEmailAddy = function (emailAddy) {
        
        if (emailAddy.match(/^[a-z0-9\._-]+@([a-z0-9_-]+\.)+[a-z]{2,6}$/i)) {
            return true;
        } else {
            return false;
        };
    };
    
    
    //3.  Is the string a URL? (Does it start with http: or https:?)
    
    var checkURL = function(uRL) {
    var regex = /^(http|https):/; //Regex: Check for http or https within the string.
    var checkString = regex.test(uRL);

        return checkString;
    };
    
 
    //4.  Title-case a string (split into words, then uppercase the first letter of each word)
    
    var split = function(splitTitleCase) {
    
    var regex = /\w\S*/g;
    
    var titleCaseString = function(splitTitleCase) {
    
    var process = splitTitleCase.charAt(0).toUpperCase() + splitTitleCase.substr(1);
        
        return process;
    };

    var stringChanged = splitTitleCase.replace(regex, titleCaseString);
        
        return stringChanged;	
    };
    
    
    /*5.  Given a string that is a list of things separated by a given string, as well as another
    string separator, return a string with the first separator changed to the
    second: "a,b,c" + "," + "/" to "a/b/c".
    */
    
    changeStringSeparator = function(string, separator1, separator2) {

        var splitString = string.split(separator1);

        var reunitedString = splitString.join(separator2);

            return reunitedString;
    };
    
    
//.............NUMBERS..............

    //6.  Format a number to use a specific number of decimal places, as for money: 2.1 to 2.10
    
    var formatNum = function (numFormat, precision){
        
    var decimal = numFormat.toFixed(precision);
    
        return decimal;

    };

    
    
//RETURNS    
    
     return {
        
        //STRINGS
        "checkPhoneNum" : checkPhoneNum,
        "checkEmailAddy" : checkEmailAddy,
        "checkURL" : checkURL,
        "split" : split,
        "changeStringSeparator" : changeStringSeparator,
        
        //NUMBERS
        "formatNum" : formatNum,
    };
    
};
    


//OUTPUTS
    
var newLib = new myLibrary();

    //STRINGS
    //PHONE NUMBER
console.log("This a phone number pattern... " + newLib.checkPhoneNum("888-333-1111"));
    
    //EMAIL ADDRESS
console.log("That's an email pattern... " + newLib.checkEmailAddy("maceface@mac.com"));
    
    //URL
console.log("It is " + newLib.checkURL("www.maceface@mac.com") + " that this is a URL because the existance of the http:// or https:// is " + newLib.checkURL("www.maceface@mac.com") + ".");
    // SPLIT STRING
console.log("my name is..." + newLib.split("dana noelle mace"));

    //STRING SEPARATOR
console.log('At the click of a button, we can change "a|b|c" to ' + changeStringSeparator("a|b|c","|","-"));

    //DECIMALS
console.log(newLib.formatNum(3.3, 3) + " USD");





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