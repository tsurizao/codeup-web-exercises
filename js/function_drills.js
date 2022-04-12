(function(){
// Function Drills
// Functions using conditionals but not loops or arrays:

// Make a function named isOdd(number)
    function isOdd(number){
        return number % 2 !== 0;
    }

// Make a function named isEven(number)
    function isEven(number){
        return number % 2 === 0;
    }

// Make a function named identity(input) that returns the input exactly as provided.
    function identity(input){
        return input;
    }

// Make a function named isFive(input)
    function isFive(input){
        return input === 5;
    }

// Make a function named addFive(input) that adds five to some input.
    function addFive(input){
        return input + 5;
    }

// Make a function named isMultipleOfFive(input)
    function isMultipleOfFive(input){
        return input % 5 === 0
    }

// Make a function named isThree(input)
    function isThree(input){
        return input === 3;
    }

// Make a function named isMultipleOfThree(input)
    function isMultipleOfThree(input){
        return input % 3 === 0;
    }

// Make a function named isMultipleOfThreeAndFive(input)
    function isMultipleOfThreeAndFive(input){
        return input % 3 === 0 && input % 5 === 0;
    }

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
    function isMultipleOf(target, n){
        return target % n === 0;
    }

// Make a function named isTrue(boolean)
    function isTrue(boolean){
        return boolean === true;
        //boolean = true;
        //return boolean;
    }

// Make a function named isFalse(boolean)
    function isFalse(boolean){
        return boolean === false;
        //boolean = false;
        //return boolean;
    }

// Make a function named isTruthy(input), remember that values other than true will behave like true
    function isTruthy(input){
        return input == true;
    }

// Make a function named isFalsy(input), remember that values other than false behave like false
    function isFalsy(input){
        return input == false;
    }

// Make a function named isVowel(letter)
    function isVowel(letter){
        return letter.toLowerCase() === "a" || letter.toLowerCase() === "e" || letter.toLowerCase() === "i" || letter.toLowerCase() === "o" || letter.toLowerCase() === "u";
    }

// Make a function named isConsonant(letter)
    function isConsonant(letter){
        return letter.toLowerCase() !== "a" && letter.toLowerCase() !== "e" && letter.toLowerCase() !== "i" && letter.toLowerCase() !== "o" && letter.toLowerCase() !== "u";
    }

// Make a function named isCapital(letter)
    function isCapital(letter){
        return letter === letter.toUpperCase();
    }

// Make a function named isLowerCase(letter)
    function isLowerCase(letter){
        return letter === letter.toLowerCase();
    }

// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
    function hasLowerCase(string){
        return string !== string.toUpperCase();
    }

// Make a function named isSpace(letter) that returns if a character is a space character
    function isSpace(letter){
        return letter === " ";
    }

// Make a function named isZero(number)
    function isZero(number){
        return number === 0;
    }

// Make a function named notZero(input) that returns true if the input is not zero
    function notZero(input){
        return input !== 0;
    }

// Write a function named lowerCase(string)
    function lowerCase(string){
        return string === string.toLowerCase();
    }

// Write a function named double(n) that returns a number times two
    function double(n){
        return n * 2;
    }

// Write a function named triple(n) that returns a number times 3
    function triple(n){
        return n * 3;
    }

// Write a function named quadruple(n) that returns a number times 4
    function quadruple(n){
        return n * 4;
    }

// Write a function named half(n) that returns 1/2 of the provided input
    function half(n){
        return n / 2;
    }

// Write a function named subtract(a, b) that returns a minus b
    function subtract(a,b){
        return a - b;
    }

// Write a function named multiply(a, b) that returns the product of a times b
    function multiply(a, b){
        return a * b;
    }

// Write a function named divide(a, b) that returns a divided by b
    function divive(a, b){
        return a / b;
    }

// Write a function named remainder(a, b) that returns the remainder after dividing a by b
    function remainder(a, b){
        return a % b;
    }

// Make a function named modulo(a, b) that returns the remainder after dividing a by b
    function modulo(a, b){
        return a % b;
    }

// Write a function named cube(n) that returns n * n * n
    function cube(n){
        return n * n * n;
    }

// Write a function named squareRoot(n) that returns the square root of the input
    function squareRoot(n){
        return Math.sqrt(n);
    }

// Write a function named cubeRoot(n) that returns the cube root of the input
    function cubeRoot(n){
        return Math.cbrt(n);
    }
// Write a function named invertSign(number) that returns a negative version of a positive number, a positive version of negative, and false for all else.
    function invertSign(number) {
        return number === 0 ? false : number * -1;
    }

// Write a function named degreesToRadians(number)
    function degreesToRadians(number){
        return number * (Math.PI / 180);
    }

// Write a function named radiansToDegrees(number)
    function radiansToDegrees(number){
        return number * (180 / Math.PI)
    }

// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
    function isBlank(input){
        return input.trim() === '';
    }

// Make a function named trim(string) that removes empty spaces before and after the input.
    function trim(string){
        return string.trim();
    }

// Make a function named areEqual(input1, input2) that returns if both inputs have the same value
    function areEqual(input1, input2){
        return input1 == input2;
    }

// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
    function areIdentical(input1, input2){
        return input1 === input2;
    }

// Make a function named not(input) returns the input with a flipped boolean
    function not(input){
        return !input;
    }

// Make a function named notNot(input) that the negation of the negation of the input.
    function notNot(input){
        return !!input;
    }

// Make a function named and(predicate1, predicate2) that returns the logical operation of AND
    function and(predicate1, predicate2){
        return predicate1 && predicate2;
    }

// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
    function or(predicate1, predicate2){
        return predicate1 || predicate2;
    }

// Write a function called reverseString(string) that reverses a string
    function reverseString(string){
        return string.split("").reverse().join("");
    }

// Make a function named absoluteValue(number) that returns the absolute value of a number.
    function absoluteValue(number){
        // if (number >= 0) {
        //     return number;
        // } else {
        //     return number * -1;
        // }
        return Math.abs(number);
    }
// Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.
    function rollDice(sides){
        return Math.floor(Math.random() * sides) + 1;
    }

// ################################################################

// Simple Function Drills
// Make a function called returnTwo() that returns the number 2 when called
    function returnTwo(){
        return 2;
    }

// Test this function with console.log(returnTwo())
    console.log(returnTwo)

// Make a function called sayHowdy() which console.logs the string “Howdy!”
    function sayHowdy(){
        console.log("Howdy!");
    }

// Test this function by directly calling sayHowdy()
    sayHowdy();

// Make a function called returnName() that returns the string of your name
    function returnName(){
        return "Chase";
    }

// Test this function with console.log(returnName())
console.log(returnName());

// Make a function called addThree() which takes in a number input and returns the number plus 3.
    function addThree(number){
        return number + 3;
    }

// Test this function with console.log(addThree(5))
    console.log(addThree(5));

// Make a function called sayString() which returns the string input passed in.
    function sayString(string){
        return string;
    }

// Test this function with console.log(sayString('codeup'))
    console.log(sayString('codeup'));

// Challenge Function Drills
// Write a function called identity(input) that takes in an argument called input and returns that input.
    function identity(input){
        return input;
    }

// Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.
    function getRandomNumber(min, max){
        return Math.floor((Math.random() * (max-min) + min));
    }

// Write a function called first(input) that returns the first character in the provided string.
    function first(input){
        return input[0];
    }

// Write a function called last(input) that returns the last character of a string
    function last(input){
        return input[input.length -1];
    }

// Write a function called rest(input) that returns everything but the first character of a string.
    function rest(input){
        return input.substring(1, input.length);
    }

// Write a function called reverse(input) that takes a string and returns it reversed.
    function reverse(input){
        return input.split("").reverse().join("");
    }

// Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
    function isNumeric(input){
        return !isNaN(parseFloat(input));
    }

// Write a function called count(input) that takes in a string and returns the number of characters.
    function count(input){
        return input.length;
    }

// Write a function called add(a, b) that returns the sum of a and b
    function add(a, b){
        return a + b;
    }

// Write a function called subtract(a, b) that return the difference between the two inputs.
    function subtract(a, b){
        return a - b;
    }

// Write multiply(a, b) function that returns the product
    function multiply(a, b){
        return a * b;
    }

// Write a divide(numerator, denominator) function that returns a divided by b
    function divide(numerator, denominator){
        return numerator / denominator;
    }

// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
    function remainder(number, divisor){
        return number % divisor;
    }

// Write the function square(a) that takes in a number and returns the number multiplied by itself.
    function square(a){
        return a * a;
    }

// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
    function sumOfSquares(a, b){
        return add(square(a), square(b));
    }

// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
    function doMath(operator, a, b){
        return operator(a, b);
    }

// Even More Function Bonuses
// Create a function that will return how many whitespace characters are at the beginning and end of a string.
    function whitespaceCounter(string) {
        var frontSpaces = string.length - string.trimLeft().length;
        var endSpaces = string.length - string.trimRight().length;
        return frontSpaces + endSpaces;
    }
// Create a function that takes in two string inputs.
// If the second string input is present in the first, return the first input string with the second input string removed from it.
// If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.
// If the second string input is not present in the first, return the first string as entered in the function.
    function stringInsideString(input1, input2){
        return input1.includes(input2) ? input1.replace(input2, "") : input1;
    }


// Create a function that takes in a string and returns true if the last letter is an "a" (otherwise, return false).
    function isLastLetterA(input){
        return input[input.length - 1] === "a";
    }
// EXTRA CHALLENGE: create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).
    function beginningWhitespaces(input){
        return input.length - input.trimLeft().length;
    }

// Create a function returnTrueMessage() that returns the string "Hey, it's true!"
    function returnTrueMessage(){
        return "Hey, it's true!"
    }

// Create a function returnFalseMessage() that returns the string "Hey, it's false!"
    function returnFalseMessage(){
        return "Hey, it's false!"
    }

// Create a function returnMessage() that takes in a function and returns the call to the function
// Experiment passing in different functions.
    function returnMessage(input){
        return input();
    }

// Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.
// The function will return true if the username is not the same as the password and the user is at least 18 years old. If the user is an admin, they do not have to be a certain age but the password must still not match the username.;
    function willLoginUser(username, password, age, admin) {
        if (username === password) {
            return false;
        } else return !(age < 18 && !admin);
    }
}());