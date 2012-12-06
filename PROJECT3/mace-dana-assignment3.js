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

            getJesse: function () {

                  return maceDad.name;

               },
               
//Mutator Method

            changeJesseName: function (maceDad) {

                       maceDad.name = honey;

               },
            
    
            moviesAndShows: [

                       {

                            name: "Velveteen Rabbit",

                            dayLastWatched: "12/06/2012",

                            whereWatched: ["MacBookPro", "downstairs TV", "iPad"],

                            director: "Michael Landon Jr",

                            writer: "Margery Williams",

                            rating: "G",

                            myKidsRating: 10

                       },

                       {

                            name: "Dora the Explorer",

                            releaseDate: "12/06/2012",

                            whereWatched: ["Downstairs TV"],

                            director: "Chris Guiford",

                            writer: "Valerie Walsh",

                            rating: "tvY",

                            myKidsRating: 10

                       },

                       {

                            name: "Go Diego Go",

                            releaseDate: "12/06/2012",

                            whereWatched: ["downstairs TV", "upstairs TV", "MacBookPro"],

                            director: "Chris Guiford",

                            writer: "Valerie Walsh",

                            rating: "tvY",

                            myKidsRating: 9.5

                       }

               ]
            
            
    };
    
/Number Function - number argument, while loop, local variables, math, return string

var timesWatchedVideos = function (watchedVideos) {

        var numberWatched = 20;       

        while (watchedVideos > 10) {

               console.log('Gannon said, "Mommy, I dont\'t feel good.  I just want to lay on the couch and watch TV all day."  Grady looked at Dana and said, "No, I want to watch TV ' + watchedVideos + ' times today." ' + dana.name + ' said "We\'ll watch until we get tired of watching, maybe more like ' + (numberWatched - watchedVideos) + ' times."');

               watchedVideos-=2;

        }

        var finalResults = ('When all was said and done, the Mace family watched ' + watchedVideos + ' times that day." ' + Dana.name + ' said "Wow, I would be okay if I never watched those videos one more time!"');

        return finalResults;

};

    
//String Function

var waveBye = function (person) {

        return ('"Bye! ' + person.name + '."');

};
            
            
//OUTPUT
console.log("Dana\'s husband, " + maceDad["name"] + " kissed her good bye before leaving for work.  She watched him as he walked out to the car.  She sort of wished it was her getting into the car.  She knew it was going to be a long day with 3 sick kids in the house.  Dana waved and said softly to herself, " + waveBye(Jesse));

console.log()
