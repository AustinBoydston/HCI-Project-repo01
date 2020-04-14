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

//The canvas we have set up in the html file is called ctx
// this ctx variable is linked to it
var ctx = document.getElementById("ctx").getContext("2d");
ctx.font = '30px Arial';

//Answer buttons from index.html linked to new javascript variables
var A1 = document.getElementById("Answer1")
var A2 = document.getElementById("Answer2")
var A3 = document.getElementById("Answer3")
var A4 = document.getElementById("Answer4")
//event listeners for the buttons
A1.addEventListener('click', functoin());
A2.addEventListener('click', functoin());
A3.addEventListener('click', functoin());
A4.addEventListener('click', functoin());
//



