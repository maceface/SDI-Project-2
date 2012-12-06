//alert("JavaScript works!");

//Dana Mace
//Project 2
//SDI 1212
//Objects - My life this past week with a bunch of sickies...

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
                console.log ('After '+ daysChildrenSick +' sleepless nights of coughing and sniffles from all '+ sickMaces +', and not wanting a repeat, Dana decided to go to the store to buy some ' +  coughAndColdMedicine + 'for the kiddos.');
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
             
            getDana: function () {
                
                    return maceMom.name;
            
                },
                
//Mutator Method

            changeJesseName: function (maceDad) {

                    maceDad.name = honey;

               },
               
            changeDanaName: function (maceMom) {
                
                    maceMom.name = mommy;
                    
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
    
//Number Function - number argument, while loop, local variables, math, return string

var timesWatchedVideos = function (watchedVideos) {

        var numberWatched = 20;       

        while (watchedVideos > 10) {

               console.log('Gannon said, "Mommy, I dont\'t feel good.  I just want to lay on the couch and watch TV all day."  Grady looked at Dana and said, "No, I want to watch TV ' + watchedVideos + ' times today." ' + dana.name + ' said "We\'ll watch until we get tired of watching, maybe more like ' + (numberWatched - watchedVideos) + ' times."');

               watchedVideos-=2;

        }

        var finalResults = ('When all was said and done, the Mace family watched ' + watchedVideos + ' times that day." ' + Dana.name + ' said "Wow, I would be okay if I never watched those videos one more time!"');

        return finalResults;

};

//Array Function - number argument, array argument, for loop, math, return array

var getMyKidsRating = function (video, topRating) {

        var notEvenClose = [];

        for (var i = 0; i < video.length; i++) {

               var math = (topRating - video[i].score)

               notEvenClose.push(math)

        }

        return notEvenClose;

};

//Procedure - number argument, conditional, nested conditional

var watchMoreVideos = function (howManyMoreVideos) {

        var numberOfVideos = 20;

        var platform = ("downstairs TV");

        if (whereWatched < howManyMoreVideos) {

               maceDad.changeName("Honey")

               console.log('Dana thought to herself, "Wish my ' + maceDad.getName() + ' was here to watch more videos.  I can\'t take much more!"');

               console.log('"Okay, what\'s next?" She said to the boys with a big smile on her face.');

               console.log('"Can we watch Diego agian on the iPad?" Gannon asked.')

                if (whereWatched === "numberWatched") {

                       console.log('"No, the iPad has no charge right now to the battery, why don\'t we just listen to some Christmas music?" Dana said.');

                       console.log('Gannon looked at his mommy with a scowl on his face and much disapointment.');

               } else {

                       console.log('"Sure, that will be even better," Dana said with a little excitement.  The sound of the TV was beginning to really wear on her last nerve.');

                       console.log('"Here you go.  Lay down here and enjoy the show!"  Dana handed the boys the iPad where they were laying on the floor and walked away to go clean up some messes and change the baby\'s diaper.');

               }

        } else {

               console.log('"Yeah, let\'s watch it together in the tent in your room with the baby.  It will be fun.  Like a miny campout, but in the hosue." Dana told the boys.');

        }

};

//Boolean Function - string argument, number argument, comparison, return boolean

var getDoctor = function (fever, amoxAndTylenol) {

        if ((fever > 102) && ((amoxAndTylenol === "available") || (amoxAndTylenol === "not available"))) {

               return true;

        } else {

               return false;

        }

};

//String Function - string argument, string concatination, return string

var takeTempAgain = function (temp1, temp2) {

        var miserable = ("They both cried.  All they wanted to do was sleep " + temp1 + temp2);

        return miserable;

};

 

//Number Function - number argument, output, return number

var boughtAmox = function (pharmacyPrice) {

        var totalWithTax = (pharmacyDiscount + pharmacyPrice);

        return totalWithTax;

};

//Function - return object

var giveMedicine = function () {

        return maceDad.children[0, 1, 2];

};

 

//Function - boolean argument and use of JSON data

var goToBedEarly = function (kidsStillSick) {

        if (kidsStillSick) {

               console.log("Onces the kids all got their baths and the PJs were on, Dana\'s hubby, " + maceDad["name"] + " got home.  He helped put the sick babies down for bed.  After which Dana and Jesse got out the instruments.  While he was " + maceDad.hobbies[0] + ", Dana was " + maceMom.hobbies[0] + ".  Once the stress was relieved by the music, they went to bed only to relive another crazy day with sick children when they woke up.");

        } else {

               console.log("Dana and Jesse were tired and went to bed with the kids.  Maybe some rest would help them avoid whatever the children have.")

        }

};

    
//String Function

var waveBye = function (person) {

        return ('"Bye! ' + person.name + '."');

};
            
            
//OUTPUT
console.log("Dana\'s husband, " + maceDad["name"] + " kissed her good bye before leaving for work.  She watched him as he walked out to the car.  She sort of wished it was her getting into the car.  She knew it was going to be a long day with 3 sick kids in the house.  Dana waved and said softly to herself, " + waveBye(Jesse));

console.log('"Have a nice day at work.  We may go to the doctor today.  If we do can you pick the prescriptions up on your way home for ' + giveMedicine().children + ' on your way home tonight?" Dana asked.');
            
console.log('"Sure, I can do that.  I hope they won\'t need it though.  Although, they have been pretty sick.  Call me and let me know if Gannon\'s fever breaks." Jesse replied.');

console.log("Jesse went off to work for the day and Dana watched his car drive off until it was no longer visible.");

console.log("When Dana went back in, Grady and Gannon were both laying on the couches all bundled up in blankets.  This was definitely not normal for toddlers, much less twin boys.");

console.log('"' + maceMom.changeName() + ' I\'m tired and don\'t feel good.  Can we watch some movies?" Grady whimpered. "' + maceMom.changeName() +'? Will you hold me?"  Gannon cried.');

watchMoreVideos(3);


console.log('Dana said, "I don\'t think we\'ll watch that many, but you can definitely watch as much as the day will permit."');

var notEvenClose = timesWatchedVideos(100);

console.log(notEvenClose);


console.log("Grady was so excited, Dana almost forgot that he was sick and that she needed to check his temperature for a fever.")

var fever = getTemp('"You have no fever.', ', Your fever is worse, let\'s go to the doctors"');

console.log(fever);


console.log('Patrick went to the counter and the store clerk asked him "What can I do for you?"');

var goingToStore = ("Cough and Cold Medicine")

maceMom.buyMedicine(goingToStore)

maceMom.administerMedicine(toTwins)
console.log("Grady and Gannon")

maceMom.getTemp(temperatureRead1, temperatureRead2)


//Boolean Function

var watchingFavoriteMovie = (maceMom.moviesAndShows[0].name)

maceMom.buyMedicine(watchingFavoriteMovie)

console.log('Dana said to the boys, Nana Gaga is coming to stay with you while you watch your favorite movie.  I am going to run to the store.');

if (getDoctor(102.9, "amoxAndTylenol")) {

        console.log('"Your fevers are so high, I just called the doctor and she called in a prescription for all three of you.  I\'m going to pick it up.  Be right back."');

} else {

        console.log('"Your fevers are gone... let\'s go outside and play!"');

};


console.log('Gannon started to cry as Dana started to leave.  He did not want her to go anywhere.  She said, "Just watch your movie and I will be back before you know it.  This is your favorite movie.  It\'s the ' + maceMom.moviesAndShows[0].name + ', and I would say that you and Grady give it a '+ maceMom.moviesAndShows[0].myKidsRating +'."')

console.log("I promise, I'll fly like a jet and be home in no time.");

 

console.log('By the time Dana got home from the store, the kids were ' + maceDad.children.twin1.hobbies[0] + ' and ' + maceDad.children.twin2.hobbies[0] +'.  "Well," Dana said, "I guess you didn\'t miss me that much!"  She could tell that they still were not really feeling that much better though.');

console.log('The children purked up even more at the sight of their mom');

 

var boughtPrescription = boughtAmox(58);

console.log("With the Rite Aid Wellness Card, Dana got a discount of " + pharmacyDiscount + " dollars. She was happy that she got everything including a candy bar for, " + boughtAmox + " dollars.");


 //Nested Loop, Object argument

console.log("After watching the same 3 videos over and over for the entire day, it was time to eat dinner and get ready for bed.  But first, Dana asked them which was their favorite movie for the day.");

var favoriteVideoOfTheDay = getMyKidsRating(maceMom.moviesAndShows, topRating);

for (var i = 0; i < maceMom.moviesAndShows.length; i++) {

        console.log(maceMom.moviesAndShows[i].name + " they gave a " + maceMom.moviesAndShows[i].myKidsRating + ". It was " + notEvenClose[i] + " pretty perfect.  Dana prepares herself for the simple fact that they'\ll probably want to watch the same ones tomorrow.");

        console.log("The only thing that could change, is where they might watch it... ");

        for (var w = 0; w < maceMom.moviesAndShows[i].whereWatched.length; w++) {

               console.log("-" + maceMom.moviesAndShows[i].whereWatched[w]);

        }

};



goToBedEarly(True);



//"What would you like to watch first?" Dana asked.  "They both exclaimed, almost immediately, "DORA!"  Dana stopped and asked, "On a scale from 1 to 10, what would you give Dora?"  She knew they probably had no idea of what she was talking about!