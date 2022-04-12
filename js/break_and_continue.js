(function(){
    /*
    Exercise 1:
    Create a file named break_and_continue.js in the js directory.
    (DONE)
     */

    /*
    Exercise 2:
    Prompt the user for an odd number between 1 and 50. Use a loop
    and a break statement to continue prompting the user if they
    enter invalid input.
     */
    var userRecordedInput = prompt("Enter an odd number between 1 and 50");
    while(true){
        if(userRecordedInput % 2 === 0 || userRecordedInput < 1 || userRecordedInput > 49){
            alert("Invalid input.");
            userRecordedInput = prompt("Enter an odd number between 1 and 50");
        } else {
               break;
        }
    }

     /*
     Exercise 3:
     Use a loop and the continue statement to output all the odd
     numbers between 1 and 50, except for the number the user
     entered.
     */
    console.log("Number to skip is: " + userRecordedInput);
    for(var i = 1; i < 50;i++){
        if (i === parseFloat(userRecordedInput)){
            console.log("Yikes! Skipping number: " + userRecordedInput)
            continue;
        }
        if (i % 2 !== 0){
            console.log("Here is an odd number: " + i)
        }
    }
}());