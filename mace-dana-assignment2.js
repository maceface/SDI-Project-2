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

//Number Function
var getInstructorPrice = function (instructorPrice) {
var aveInstructorPrice = 150;	
while (instructorPrice > 100) {
console.log('I told him, "For you, I\'ll charge ' + instructorPrice + ' dollars an hour." Bob looked at me for a moment and said, "Will you do it for "' + (aveInstructorPrice - instructorPrice) + '" dollars per hour as a friendly friend price?"');
instructorPrice-=50;
}
var finalInstructorCost = ('I said "sure, I\'ll do it for ' + instructorPrice + ' dollars an hour just for you." You could hear the excitement in his voice, as if he were the one going to be taking lessons!  He looked at me and said, "So when\'s her next flight?!"');
return finaInstructorCost;
};

//String Function
var getFeelings = function (feeling1, feeling2) {
var thought = ("Almost in tears from exhaustion and the shear thought of one more thing to do, I thought,  " + feeling1 + feeling2);
return thought;
};


//OUTPUT
console.log("I went to the airport yesterday to fly my Cessna 140. The weather was perfect. James, a friend of mine asked if I was available to give his 13 year old daughter a flight lesson.");
console.log('"Will you take her up and see if she likes it enough for me to pay for this?" He asked.  "Gas is pretty expensive nowadays and I do not want to waste money if she is not going to like it anyway"');
airportWithOkayPricedFuel(6.98);

console.log('After taking her up for about an hour, we landed.  I let her stay on the controls with me to get the feel. Her father excitedly ran towards us and asked if she liked it.  After her reply of "YES I LOVED IT", he asked me, "How much would you charge to teach her?"  I thought about it and said, "I will charge you $150 an hour."');
var finaInstructorCost = getInstructorPrice(150);
console.log(finaInstructorCost);




