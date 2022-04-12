(function(){
    /*
     Exercise 1:
     Create a file named for_loops.js inside the js directory and
     link it to your loops.html file.
     (DONE)
     */

    /*
     Exercise 2:
     Create a function named showMultiplicationTable that accepts
     a number and console.logs the multiplication table for that
     number (just multiply by the numbers 1 through 10).
    */
    function showMultiplicationTable(number){
        for(var i = 1;i <= 10;i++){
            console.log(number * i);
        }
    }

    /*
    Exercise 3:
    Use a for loop and the code from the previous lessons to
    generate 10 random numbers between 20 and 200 and output to
    the console whether each number is odd or even.
     */
    for(var i = 0; i < 10;i++) {
        var tempRandomNumber = Math.floor((Math.random() * 180) + 20);
        tempRandomNumber % 2 === 0 ? console.log(tempRandomNumber + " is even") : console.log(tempRandomNumber + " is odd")
    }

    /*
    Exercise 4:
    Create a for loop that uses console.log to create the output
    shown below.
    1
    22
    333
    4444
    55555
    666666
    7777777
    88888888
    999999999
     */
    for(var i = 1;i <= 9;i++) {
        var numberPrinted = "";
        for (var j = 0; j < i; j++) {
            numberPrinted += i.toString();
        }
        //console.log(parseFloat(numberPrinted))
        console.log(numberPrinted);
    }

    /*
    Exercise 5:
    Create a for loop that uses console.log to create the output
    shown below.
    100
    95
    90
    85
    80
    75
    70
    65
    60
    55
    50
    45
    40
    35
    30
    25
    20
    15
    10
    5
     */
    var startingNumber = 100;
    for(var i = 0;i < 100;i += 5){
        console.log(startingNumber - i);
    }

}());