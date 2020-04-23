//Todo list
/* 
    -Create a structure that reads in questions and possible answers from a json file           (incomplete)
    -Have randomizing capabilities to the question calls                                        (incomplete)
    -Create the GUI elements for the question(text field), and four answer options (buttons)    (incomplete)
    -Display a message depending on right or wrong response                                     (incomplete)
    -Create a scoring mechanism for right and wrong answers                                     (incomplete)

depending on how easy or hard the implementation, this script may be referenced by the html file or it may have it's contents copied and pasted directly into the html.


basic layout for first prototype attempt:
     ___________________________________
    |                                   |    
    |   Question: this is the question. |  <-- textfield
    |                                   |
    |                                   |
    |                                   |
    |-----------------------------------|
    |   Answer 1        Answer 2        |  <-- buttons
    |                                   |
    |   Answer 3        Answer 4        |  <-- buttons
    |___________________________________|




*/
//plan B
var questionsArray = ["What does an anemometer measure",
 "The Saffir-Simpson scale is used to measure the intensity of what?",
 "Inside of a cloud, how do the air temperature and the dew point compare to one another?",
"The process by which a cloud droplet first forms is",
 "Cumulus cloud is recognized by its",
 "Clouds are classified and named according to their altitude and",
 "\"Anvil head\" is a term applied to which clouds?",
 "Which has caused the fewest weather related deaths in the U.S.?",
 "Tornado is a small, very intense example of?",
 "Tornadoes most often move toward what direction?",
 "What general circulation wind belt is the place of origin for hurricanes?",
 "Why do surface wind speeds increase toward the center of a hurricane?",
 " What type of clouds is most common in a hurricane?",
 "What determines Hurricane rating?",
 "What causes the winds of a hurricane to be so fast?",
 "Buoyancy of a rising air parcel is greatly affected by",
 "A stable atmosphere is one in which",
 "Where is the ozone layer?",
 "What happens to temperature as you move up through out the atmosphere?",
 "What measures air pressure?",
 "An isobar is a line of constant?",
 "Which of the following has the highest albedo and thus more reflected solar radiation?",
 "Thunder travels at the speed of sound which is nearest to?",
 "Primary moisture source for severe thunderstorms in the Great Plains originates from the?",
 "Which of the following is a diabatic process?",
 "When comparing the moisture content in the air between two locations it is best to use?",
 " On a NEXRAD velocity display, air moving away from the radar site will most likely be given a color of?",
 "Which of the following temperature scales is a RATIO temperature scale?",
 "Which of the following air masses is the most dense?",
 "Thickness values can be used to infer the strength of?"
];

var answerA = ["Wind speed",
"Tornadoes",
"Equal",
"Supercooling",
"Precipitation",
"Water content",
"Cumulonimbus",
"Floods",
"Cyclone",
"Northeast",
"Easterlies",
"Stronger Coriolis effect",
"Nimbostratus",
"Central pressure",
"Stronger Coriolis force",
"Wind speed",
"Clouds are forming",
"Stratosphere",
"Increases",
"Tipping bucket",
"Pressure",
"Water",
"10 miles per hour",
"Jet stream",
"Convection",
"Dewpoint ",
"White",
"Fahrenheit",
"Cold and moist",
"Jet streak"
];

var answerB = [ "Rainfall",
"Hurricanes",
"Temperature > Dew point",
"Evaporation",
"High winds",
"Temperature",
"Stratus",
"Hurricanes",
"Jet stream",
"Northwest",
"Trade winds",
"Warmer water",
"Stratus",
"Temperature",
"Strong pressure gradient force",
"Absorption of solar radiation",
"Vertical motions are resisted",
"Mesosphere",
"Decreases",
"Wind vane",
"Temperature",
"Blacktop",
"5 miles per second",
"Mexican plateau and Rocky Mountains",
"Orographic lifting",
"Relative humidity",
"Green",
"Celsuis",
"Cold and dry ",
"Vorticity"
];

var answerC = ["Temperature",
"Earthquakes",
"Dew point > Temperature",
"Precipitation",
"Darkness",
"Shape",
"High clouds",
"Tornadoes",
"Coriolis effect",
"Southwest",
"Westerlies",
"Conservation of angular momentum",
"Cumulonimbus",
"Rainfall amount",
"Tidal effects",
"Heat released if water vapor condenses",
"Low humidity",
"Exosphere",
"Stays the same",
"Barometer",
"Wind",
"Fresh snow ",
"1 mile every 5 seconds",
"Pacific Ocean",
"Radiational heating",
"Wet bulb temperature",
"Red",
"Kelvin",
"Warm and moist",
"Velocity"];

var answerD = ["Humidity",
"Winter storms",
"No relationship",
"Condensation",
"Vertical dimension",
"Type of precip",
"Cirrus",
"Lightning",
"Anticyclone",
"West",
"Doldrums",
"Reduced friction",
"Cirrus",
"Wind speed",
"Weaker Coriolis force",
"Temperature",
"High humidity",
"Troposphere",
"Varies",
"Anemometer",
"Rain",
"Sand",
"Speed of light",
"Gulf of Mexico",
"Conduction",
"Dry bulb temperature",
"Blue",
"None",
"Warm and dry",
"Thermal advection"
];

var correctAnswer = [
"A",
"B",
"A",
"D",
"D",
"C",
"A",
"B",
"A",
"A",
"B",
"C",
"C",
"D",
"B",
"C",
"B",
"A",
"D",
"C",
"A",
"A",
"C",
"D",
"C",
"A",
"C",
"C",
"B",
"D"
];



//Answer buttons from index.html linked to new javascript variables
var A1 = document.getElementById("Answer1");
var A2 = document.getElementById("Answer2");
var A3 = document.getElementById("Answer3");
var A4 = document.getElementById("Answer4");
//event listeners for the buttons
// A1.addEventListener('click', null);
// A2.addEventListener('click', null);
// A3.addEventListener('click', null);
// A4.addEventListener('click', null);

var strt = document.getElementById("start");
//strt.addEventListener('click', start());

//Classes
var display = new function(){

    //update the canvas

};

var gameLogic = new function(){
//reference json file here and cycle quesitons as well as tally the score

//the score of the game
var score = 0;
//an array that keeps track of what questions have already been visited
var visited = new Array(30);
//initialize all indexes to 0 since no questions have been visited at this time
for(var i = 0; i < 30; i++)
{
    visited[i] = 0;
}
//implement randomizing funciton that will call up a random question

//for not just iterate sequencially


};

var controller = new function(){

//handles actions by user

};


//this code reads in data from the json file and stores it into global array named questions
var questions;
var jsonSource = new XMLHttpRequest();
    jsonSource.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            questions = JSON.parse(this.responseText);
        }
    };
jsonSource.open("GET", "data.json", true);
jsonSource.send();


function start(){
    
    //This was used for debugging 
    var test1 = "changed";
    document.getElementById("test2").innerHTML = test1;
    //example of how to access data from array 
    document.getElementById("test").innerHTML = questions[0].quesiton;

    //the code below was created to make the canvas change dynamically as the user selected the start game option 

    //The canvas we have set up in the html file is called ctx
    // this ctx variable is linked to it
    var ctx = document.getElementById("ctx").getContext("2d");
    var ques = document.getElementById("ctx").getContext("2d");
    var b1 = document.getElementById("ctx").getContext("2d");
    var b2 = document.getElementById("ctx").getContext("2d");
    var b3 = document.getElementById("ctx").getContext("2d");
    var b4 = document.getElementById("ctx").getContext("2d");

    ctx.font = '30px Arial';
    ques.font = '30px Arial';
    b1.font = '20px Arial';
    b2.font = '20px Arial';
    b3.font = '20px Arial';
    b4.font = '20px Arial';

    ctx.fillText("Welcome to Weather Quest", 200, 50);
    ques.fillText("Questions are placed here", 50, 100);
    b1.fillText("Answer A", 50, 150);
    b2.fillText("Answer B", 50, 200);
    b3.fillText("Answer C", 50, 250); 
    b4.fillText("Answer D", 50, 300);

    //adds button after start game is clicked and then removes it after it is pressed 
    //allows user to progress to the next page after the start page 
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Continue";
    document.getElementById("continue").appendChild(btn);
    btn.addEventListener("click", function(){
        console.log("The shit was pressed already");
        //removes continue button
        btn.remove();
        game();
    });
    

};

var questionCounter = 0;
//all this code could also go in game logic, wasnt sure how to use the function as currently defined 
function game(){

    //this was intended to allow the canvas to iterate questions, but gets the error that ques is not defined 
    ques.fillText(questions[questionCounter].quesiton, 50, 100);
    questionCounter++;

};







