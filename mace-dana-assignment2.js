//alert("JavaScript works!");

//Dana Mace
//Project 2
//SDI 1212
//Functions and Loops

//Simple Greeting
var greetByName = function(name) {
    var currentHour = (new Date()).getHours(),
    timeOfDay;
    if(currentHour < 12) { timeOfDay = "morning"; }
    else if (currentHour < 17) { timeOfDay = "afternoon"; }
    else {timeOfDay = "evening";}
    console.log("Good " + timeOfDay + ", " + name);
};

greetByName("Lee!")



//VARIABLES
var cities = ["New York", "Charlotte", "Fort Lauderdale"];
var fuelPrices = [7.89, 7.29, 6.98];
var bestFuelPrice = 6.18

//FUNCTIONS
//Procedure