console.log("Im inside Week3a Javascript file.");

/* Comments are not executed by the program.
They are there to help explain the code for
maintenence programmers. Use slash-asterisk
and asterisk-slash to create multi-line
text description of your code. */

// Use slash-slash for one-line comment.

// Use console.log() function to display text
// in the console.

// Use fillText() function to display text
//  in canvas.
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;
var c = canvas.getContext('2d');
c.font = "30px Ariel";
c.fillText("Welcome to My Game" , 10, 50);

