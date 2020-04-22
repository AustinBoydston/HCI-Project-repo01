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



//Answer buttons from index.html linked to new javascript variables
var A1 = document.getElementById("Answer1");
var A2 = document.getElementById("Answer2");
var A3 = document.getElementById("Answer3");
var A4 = document.getElementById("Answer4");
//event listeners for the buttons
/*
A1.addEventListener('click', null);
A2.addEventListener('click', null);
A3.addEventListener('click', null);
A4.addEventListener('click', null);
*/

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

function start(){

    // var questions = new XMLHttpRequest();
    // questions.open('GET', "/data.json");
    // questions.responseType = "json";
    // questions.send();

    // questions.onload() = function(){
    // var jsonQuestions = questions.response;
    // window.alert("this ran");
    // };

    var jsonSource = new XMLHttpRequest();
    jsonSource.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var questions = JSON.parse(this.responseText);
            document.getElementById("test").innerHTML = questions[0].quesiton;
        }
    };
    jsonSource.open("GET", "data.json", true);
    jsonSource.send();

    var test1 = "changed";
    document.getElementById("test2").innerHTML = test1;

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

    ctx.fillText("Title", 250, 50);
    ques.fillText("Question", 150, 100);
    b1.fillText("A", 100, 150);
    b2.fillText("B", 100, 175);
    b3.fillText("C", 100, 200);
    b4.fillText("D", 100, 225);
};







