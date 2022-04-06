/* 
1. For each of the following code blocks, read the code
and predict what the result of evaluating it would be, then
execute the statements(s) in Chrome console.
*/

var a = 1;
var b = a++;
var c = ++a;
a + b + c;
var d = "hello";
var e = false;
d++;
e++;
var perplexed;
perplexed + 2;
var price = 2.7;
price.toFixed(2);
var price = "2.7";
price.toFixed(2);
isNaN(0);
isNaN(1);
isNaN("");
isNaN("string");
isNaN("0");
isNaN("1");
isNaN("3.145");
isNaN(Number.MAX_VALUE);
isNaN(Infinity);
isNaN("true");
isNaN(true);
isNaN("false");
isNaN(false);
NaN == NaN
!true;
!false;
!!true;
!!false;
!!0;
!!-0;
!!1;
!!-1;
!!0.1;
!!"hello";
!!"";
!!'';
!!"false";
!!"0";

/*
2. Execute the following statements in Chromoe JavaScript
console and then follow the directions below.

var sample = "Hello Codeup";

-- Use .length to find the number of characters in the string.
-- Try to make the sample string all upper or all lowercase.
-- Update the variable sample via concatenation soo that it 
contains "Hello Codeup Students"
-- Replace "Students" with "Class"
-- Find the index of "c" using .indexOf()  What do you observe?
-- Find the index of "C" using .indexOf()
-- Retrieve a substring that contains only the word "Codeup" by
using indexOf() and substring()
*/

var sample = "Hello Codeup";
sample.length;
sample.toUpperCase();
sample += " Students";
sample.replace("Students", "Class");
sample.indexOf("c");
sample.indexOf("C");
sample.substring(sample.indexOf("C"), 12);
// Also can use sample.indexOf("C") and sample.indexOf("p") to
// find the indices for sample.substring(6, 12);

/*
3. Write some JavaScript code, that is, variables and operators,
to describe the following scenarios.  Do not worry about the
real operations to get the values, the goal of these exercises
is to understand how real world conditions can be represented
with code.
*/

//You have rented some movies for your kids:  The little
//mermaid(for 3 days), Brother Bear(for 5 days, they love it),
//and Hercules(1 day, you don't know yet if they're going to
//like it).  If the price for a movie per day is $3, how much
//will you have to pay?

var littleMermaid = 3;
var brotherBear = 5;
var hercules = 1;
var pricePerDay = 3;
console.log (pricePerDay * (littleMermaid + brotherBear + hercules));
//or
var total = pricePerDay * (littleMermaid + brotherBear + hercules);
console.log(total);

//Suppose you're working as a contractor for 3 companies: 
//Google, Amazon and Facebook, they pay you a different rate
//per hour.  Google pays $400, Amazon $380, and Facebook $350.
//How much will you receive in payment for this week?  You
//worked 10 hours for Facebook, 6 hoours for Google and 4
//hours for Amazon.

var googleRate = 400;
var amazonRate = 380;
var facebookRate 350;
var googleHours = 6;
var amazonHours = 4;
var facebookHours = 10;
console.log((googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours));
//or print from a single variable
var totalPay = (googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours);
console.log(totalPay);

//A student can be enrolled in a class only if the class is
//not full and the class schedule does not conflict with her
//current schedule.

var isFull;
var isConflict;
console.log(isFull && isConflict);
//or print from a single variable with reversed condition
var canEnroll = (!isFull && !isConflict);
console.log(canEnroll);


//A product offer can be applied only if a person buys more
//than 2 items, and the offer has not expired.  Premium 
//members do not need to buy a specific amount of products.

var hasThreeOrMore; //set to true or false
var isOfferExpired; //set to true or false
var isPremium; //set to true or false
console.log((hasAtleastThree === true && isOfferExpired === false) || (isPremium === true && isOfferExpired === false));
//or print from a single variable
var canGetOffer = (hasAtleastThree === true && isOfferExpired === false) || (isPremium === true && isOfferExpired === false);
console.log(canGetOffer);

/*
4.  Use the following code to follow the instructions below:
*/

//var username = 'codeup';
//var password = 'notastrongpassword'

var username = 'codeup';
var password = 'notastrongpassword'

//Create a variable that holds a boolean value for each of the
//following conditions:

//-- the password must be at least 5 characters
var isUsernameFiveOrMore = true;

//-- the password must not include the username
var isUsernameInPassword = false;

//-- the username must be no more than 20 characters
var isUsernameMoreThanTwenty = false;

//-- neither the username or password can start or end with
//whitespace
var isWhiteSpaceInUsername = false;
var isWhiteSpaceInPassword = false;
*/