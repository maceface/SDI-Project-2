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
var getBestFuelPrices = function (airportWithOkayPricedFuel) {
var localAirportPrice = 6.18;
if (localAirportPrice < airportWithOkayPricedFuel) {
console.log('"For sure," I said, "gas ain\'t gettin\' any cheaper, and I still need to fly to keep up my flight ratings.');
} else {
console.log('"No, I\'m broke." I sadly said.');
}
};

