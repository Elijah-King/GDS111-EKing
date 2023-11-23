const Arr= [" Main Menu Bar"," Change Actions","  Button Layout", " Keybindings", "  OnEvent Scripts", "  Main Menu Bar", "  Misc Options", "  Unlock Dragging", "  Show Button IDS", "  Show Action IDS", "  COPY", "  PASTE", "Select a number:_"];
console.log(Arr);

let userChoice = -1; 
while (userChoice !=0){
userChoice = prompt ("Please enter your decision");
console.log(userChoice); 
if (userChoice == 1) {
    changeActions();
}

else if (userChoice == 2) {
    buttonLayout();
}


else if (userChoice == 3) {
    keyBindings();
}
else if (userChoice == 4) {
    onEventScripts();
}

else if (userChoice == 5) {
    mainMenuBar();
}
else if (userChoice == 6) {
    miscOptions();
}
else if (userChoice == 7) {
    unlockDragging();
}
else if (userChoice == 8) {
    showButtonsIDS();

   
}
else if (userChoice == 9) {
    showActionIDS();
}
else if (userChoice == 10) {
    copy();
}


else if (userChoice == 11) {
    paste();
}

}

 function changeActions() {
console.log("Im inside change actions function");
}

function buttonLayout() {
console.log("Im inside button layout");
}

function keyBindings() {
console.log("Im in key bindings");
}

function onEventScripts() {
console.log("Im in oneventscripts ");
}

 function mainMenuBar() {
console.log("Im inside main menu");
}

function miscOptions() {
console.log("Im inside misc options");
}

function unlockDragging() {
console.log ("Im inside unlockdragging");
}

function showButtonsIDS() {
console.log("Im inside showbuttonsids")

}

function showActionIDS() {
console.log("Im inside showactionsids");

}

function copy() {
console.log(" Im inside copy")

}

function paste() {
console.log("Im inside paste");

}
 











