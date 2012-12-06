//alert("JavaScript works!");

//Dana Mace
//Project 2
//SDI 1212
//Objects

//Simple Greeting
var greetByName = function(name) {
    var currentHour = (new Date()).getHours(),
    timeOfDay;
    if(currentHour < 12) { timeOfDay = "morning"; }
    else if (currentHour < 17) { timeOfDay = "afternoon"; }
    else {timeOfDay = "evening";}
    console.log("Good " + timeOfDay + ", " + name);
};

greetByName("Mr. Lewis!")

//Global Variables
var sickMaces = 3.5
var daysSick = 14

//Properties - String, Array, Number, Boolean, Object
var 