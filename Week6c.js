myFunction(); //caller 
console.log("Im inside myFunction()");
func2(7);
let twice = doubleIt(5); 
    console.log("Function doubleIt() returns=" + twice); 
    let msg = message();
    console.log(msg);
    function myFunction() {

    }


    



function func2(param1) {
    console.log(param1);
    console.log("Inside func2");
}

function doubleIt (aNumber) {
    let d = aNumber * 2;
    return d;
}
function message (){
    return "This is a message";
    
}
