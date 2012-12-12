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
        
    var decimal = numFormat.toPrecision(precision);
    
        return decimal;

    };
    
    
    //7.  Fuzzy-match a number: is the number above or below a number within a certain percent?
    
    var fuzzyNumberMatch = function(number1, number2, percentage) {

    var percentAge = number2*(percentage/100);
        
        var product;
        
        if(number1 >= number2 - percentAge && number1 <= number2 + percentAge) {
            product = true;
        } else {
            product = false;
            };
            
        return product;
    };
    
    //8.  Find the number of hours or days difference between two dates.
    
    var date = function (firstDate,secondDate) {	

        var firstdate = new Date(firstDate);

        var seconddate = new Date(secondDate);

        var diff = seconddate.getTime() - firstdate.getTime();

        var hours = Math.floor(diff/(1000*60*60));
        
            return hours;

        var days = Math.floor(hours/24);

            return days;

    };
    
    //9.  Given a string version of a number such as "42", return the value as an actual Number, such as 42.
    
    var makeStringNumber = function(stringNum) {

        var product = parseFloat(stringNum);
            
            return product;
    }; 

    
//.............ARRAYS..............

    //10.  Find the smallest value in an array that is greater than a given number
    var smallestVal = function(array,val) {
        
        var min = array.sort()
        
        minValue = min[0]
    
        for(var i = 0; i < min.length; i++) {
                
            if(min[i] > minValue && min[i] > val) {
                    
                return minValue = min[i];
            }
        }
    };
    
    //11.  Find the total value of just the numbers in an array, even if some of the items are not numbers.
    var totalValue = function(array) {

        var sourceArray = array;
        
        var addedUpVal = 0;

        for (var i = 0; i < sourceArray.length; i++) {	

            if(!isNaN(sourceArray[i])) {

                addedUpVal = addedUpVal + parseFloat(sourceArray[i]);
            };
        };

                return addedUpVal;	

    };
    
    //12.  Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] to [{a:1},{a:2},{a:3}].
    
    
    
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
        "fuzzyNumberMatch" : fuzzyNumberMatch,
        "date" : date,
        "makeStringNumber" : makeStringNumber,
        
        //ARRAYS
        "smallestVal" : smallestVal,
        "totalValue" : totalValue
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

    //Fuzzy
console.log("There is a 50% margin between 3 and 6... " + newLib.fuzzyNumberMatch(3,6,50));
    
    //DATES
console.log("I have lived upon the earth for " + newLib.date("July 26,1979 00:01:00","December 12,2012 00:00:00") + " short hours!");

    //STRING TO NUMBER
console.log("10 is a string, but " + newLib.makeStringNumber("10") + " is not");

    //SMALLEST NUMBER IN ARRAY
console.log(newLib.smallestVal([6,0,7,3],3) + " is the smallest value in this array that is greater than 3.");

    //VALUE OF NUMBERS IN ARRAY
console.log("Even though there are some words in this array, the total value of just the numbers is " + newLib.totalValue(['52',2.5,'Strawberry',13,33,'Neanderthals',88]));



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