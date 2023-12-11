let start = Number(prompt("Type start number:"));
let end = Number(prompt("Type end number:"));

for(i=start; i<end; i++) {
    if ( (i % 3 == 0) && (i % 5 == 0) ) {
    console.log("Fizz Buzz");
  }  else if (i % 3 == 0) {
        console.log ("Fizz");
     } else if (i % 5 == 0) {
    console.log("Buzz");
   } else {u
    console.log(i);
   }
}


