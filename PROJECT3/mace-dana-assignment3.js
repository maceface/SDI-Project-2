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



var maceDad = {

        "name": "Jesse",
        
        "age": 33,
        
        "male": true,
        
        "sick": false,
        
        "hobbies": ["playing the banjo", "spending time with family", "hiking"],
        
    "children" : {
        
               "twin1": {
                
                       "name": "Grady Ray",
                       
                       "age": 2.5,
                       
                       "male": true,
                       
                       "sick": true,
                       
                       "hobbies": ["playing with toys", "watching Dora", "singing"]
                       
               },
               
               "twin2": {
                
                       "name": "Gannon Lee",
                       
                       "age": 2.5,
                       
                       "male": true,
                       
                       "sick": true,
                       
                    "hobbies": ["singing", "riding bikes", "watching Dora"]
                       
               },
               
               "baby3": {
                
                        "name": "Zella Noelle",
                        
                        "age": .5,
                        
                        "male": false,
                        
                        "sick": true,
                        
                        "hobbies": ["watching brothers play", "drinking milk", "learning"]
               
               },
               
        }
        
};

//Global Variables
var sickMaces = 3
var daysChildrenSick = 14

//Properties - String, Array, Number, Boolean, Object
var maceMom = {
            name: "Dana",
            age: 33,
            male: false,
            sick: false,
            hobbies: ["playing the guitar", "spending time with family", "flying"],
            
// Function procedure methods
            buyMedicine: function (coughAndColdMedicine) {
                console.log ('After a sleepless night of coughing and sniffles, Dana decided to go to the store to buy some ' +  coughAndColdMedicine + 'for the kiddos.');
            },
            
            administerMedicine: function (toTwins) {
                console.log ('After reading the bottle closely and following directions, Dana discovered that the medicine could only be administered to ' + toTwins + ', and was not to be given to the baby.  She was still too young.');  
            },
            
            getTemp: function (temperatureRead1, temperatureRead2) {
                console.log ('Dana was quite confident that this medicine would help lessen the coughs, but knew that only Tylenol would help if there were fevers.  "Okay, who\'s first?" Dana said as she grabbed hold of Grady and lifted him to her lap. "You have a temperature of... ' + temperatureRead1 + '... That is great!  No tylenol for you... come on over Gannon, up you go!"  Dana checked Gannon\'s temperature next.  "' + temperatureRead2 +'    Yikes that\'s too high!" Dana exclaimed.  You will need to take some tylenol');
            },
            
//Accessor Method
            
            
//OUTPUT
console.log("Dana\'s husband, " + maceDad["name"] + " kissed her good bye before leaving for work.  She watched him as he walked out to the car and wished that she was the one leaving for the day.  She knew it was going to be a long, tough day with 3 sick kids.")
