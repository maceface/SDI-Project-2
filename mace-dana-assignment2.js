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
var getBestFuelPrices = function (fuelPrices) {
var localAirportPrice = 6.18;
if (localAirportPrice < fuelPrices) {
console.log('"For sure," I said, "gas ain\'t gettin\' any cheaper, and I still need to fly to keep up my flight ratings."');
} else {
console.log('"No, I\'m broke." I sadly said.');
}
};

//Number Function
var getInstructorPrice = function (instructorPrice) {
var aveInstructorPrice = 150;	
while (instructorPrice >= 100) {
console.log('I told him, "For you, I\'ll charge ' + instructorPrice + ' dollars an hour." James looked at me for a moment and said, "Will you do it for "' + (aveInstructorPrice - instructorPrice) + '" dollars per hour as a friendly friend price?"');
instructorPrice-=20;
}
var finalInstructorCost = ('I said "sure, I\'ll do it for ' + instructorPrice + ' dollars an hour just for you." You could hear the excitement in his voice, as if he were the one going to be taking lessons!  He looked at me and said, "So when\'s her next flight?!"');
return finaInstructorCost;
};

//String Function
var getFeelings = function (feeling1, feeling2) {
var thought = ("Almost in tears from exhaustion and the shear thought of one more thing to do, I thought,  " + feeling1 + feeling2);
return thought;
};

//Boolean Function
var getMoreFuel = function (creditCard, toppedOffPlane) {
if ((creditCard > 185.40) && ((toppedOffPlane === "credit") || (toppedOffPlane === "cash"))) {
console.log('"In that case, I\'ll be paying with the plastic."');
return true;
} else {
console.log('"I have to run to the bank.  I don\'t have enough cash."');
return false;
}
};

//Array Function
var getFuelPrices = function (prices, lowestPrice) {
var highPrices = [];
for (var i = 0; i < prices.length; i++) {
var math = (lowestPrice - prices[i])
highPrices.push(math)
}
return highPrices;
};

//OUTPUT
console.log("I went to the airport yesterday to fly my Cessna 140. The weather was perfect. James, a friend of mine, asked if I was available to give his 13 year old daughter a flight lesson.");
console.log('"Will you take her up and see if she likes it enough for me to pay for this?" He asked.  "Gas is pretty expensive nowadays and I do not want to waste money if she is not going to like it anyway"');
getBestFuelPrices(6.98);

console.log('After taking her up for about an hour, we landed.  I let her stay on the controls with me to get the feel. Her father excitedly ran towards us and asked if she liked it.  After her reply of "YES I LOVED IT", he asked me, "How much would you charge to teach her?"  I thought to myself, "I will charge $150 an hour, maybe a little less for a friend, but not much."');
var finaInstructorCost = getInstructorPrice(150);
console.log(finaInstructorCost);

console.log("I really don't have the time.  I have 3 children at home and am working on another degree online in Mobile Development.  Fortunately, this is just the thing I need to make sure I keep flying and stay current.  It's a great excuse to get out to the airport.  I guess I'\ll be excited!")
var tearsOfJoy = getFeelings('"I am so busy and tired, yet very excited!', ', I get to fly again on a regular basis, while someone else pays for it!"');
console.log(tearsOfJoy);

console.log("After saying good-bye to James and his daughter, I decided to go back up for some fun of my own.  I had a blast.  However, when I landed, my fuel indicator was on empty.");
console.log('After refueling, the fuel guy remarked, "Gas is cheaper than it was yesterday, $6.18 a gallon.  I\'ve topped it off for you.  It\'s $185.40.  How would you like to pay?" I swallowed abruptly and sighed.  Hesitantly, wishing that someone else was paying for it this time, I said, "Do you take credit cards yet or should I pay with cash?"');
getMoreFuel(200, "credit")

console.log("When I got home, I looked up fuel prices on the internet to see how the rest of the country was doing on costs.");
var highPrices = getFuelPrices(prices, lowestPrice);
for (var i = 0; i < prices.length; i++) {
console.log(cities[i] + " was $" + prices[i] + "per gallon. It was " + highPrices[i] + " craziness!");
};

console.log('"I guess I won\'t feel completely guilty for spending that kind of money on fuel...it was the cheapest on the East Coast!" I thought quietly to myself as my husband sat next to me doing bills and working on our budget!');
