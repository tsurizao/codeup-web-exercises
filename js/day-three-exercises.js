/* 
1. For each of the following code blocks, read the code
and predict what the result of evaluating it would be, then
execute the statements(s) in Chrome console.
*/

let a = 1;
let b = a++;
let c = ++a;
a + b + c;
let d = "hello";
let e = false;
d++;
e++;
let perplexed;
perplexed + 2;
let price = 2.7;
price.toFixed(2);
let price = "2.7";
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
2. Execute the following statements in Chrome JavaScript
console and then follow the directions below.

var sample = "Hello Codeup";

-- Use .length to find the number of characters in the string.
-- Try to make the sample string all upper or all lowercase.
-- Update the variable sample via concatenation soo that it 
contains "Hello Codeup Students"
-- Replace "Students" with "Class"
-- Find the index of "c" using .indexOf() What do you observe?
-- Find the index of "C" using .indexOf()
-- Retrieve a substring that contains only the word "Codeup" by
using indexOf() and substring().
*/

let sample = "Hello Codeup";
sample.length;
sample.toUpperCase();
sample += " Students";
sample.replace("Students", "Class");
sample.indexOf("c");
sample.indexOf("C");
sample.substring(sample.indexOf("C"), 12);
// With less hardcoded numbers(readability/flexibility)
let startingIndex = sample.indexOf("Codeup");
let endingIndex = startingIndex + "Codeup".length;
sample.substring(startingIndex, endingIndex);

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

function totalCostOfMovieRentalsDollars(littleMermaidDaysRented, brotherBearDaysRented, herculesDaysRented) {
    let rentPricePerDayDollars = 3;
    //console.log((littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * rentPricePerDayDollars;
    return (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * rentPricePerDayDollars;
}

// var littleMermaidDaysRented = 3;
// var brotherBearDaysRented = 5;
// var herculesDaysRented = 1;
// var rentPricePerDayDollars = 3;
// console.log (rentPricePerDayDollars * (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented));
//  // or
// var totalPriceDollars = rentPricePerDayDollars * (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented);
// console.log(totalPriceDollars);

//Suppose you're working as a contractor for 3 companies: 
//Google, Amazon and Facebook, they pay you a different rate
//per hour.  Google pays $400, Amazon $380, and Facebook $350.
//How much will you receive in payment for this week?  You
//worked 10 hours for Facebook, 6 hoours for Google and 4
//hours for Amazon.
function totalPayFromAllJobs(googleHoursWorked, amazonHoursWorked, facebookHoursWorked) {
    let googleHourlyPayRateDollars = 400;
    let amazonHourlyPayRateDollars = 380;
    let facebookHourlyPayRateDollars = 350;
    return ((googleHourlyPayRateDollars * googleHoursWorked) + (amazonHourlyPayRateDollars * amazonHoursWorked) + (facebookHourlyPayRateDollars * facebookHoursWorked));
}

// var googleHourlyPayRateDollars = 400;
// var amazonHourlyPayRateDollars = 380;
// var facebookHourlyPayRateDollars = 350;
// var googleHoursWorked = 6;
// var amazonHoursWorked = 4;
// var facebookHoursWorked = 10;
// console.log((googleHourlyPayRateDollars * googleHoursWorked) + (amazonHourlyPayRateDollars * amazonHoursWorked) + (facebookHourlyPayRateDollars * facebookHoursWorked));
// //or print from a single variable
// var totalPayDollars = (googleHourlyPayRateDollars * googleHoursWorked) + (amazonHourlyPayRateDollars * amazonHoursWorked) + (facebookHourlyPayRateDollars * facebookHoursWorked);
// console.log(totalPayDollars);

//A student can be enrolled in a class only if the class is
//not full and the class schedule does not conflict with her
//current schedule.

function canEnrollForClass(isClassFull, isScheduleConflict) {
    return !isClassFull && !isScheduleConflict;
}

// var isClassFull;
// var isScheduleConflict;
// console.log(isClassFull && isScheduleConflict);
// //or print from a single variable with reversed condition
// var canEnrollForClass = (!isClassFull && !isScheduleConflict);
// console.log(canEnrollForClass);


//A product offer can be applied only if a person buys more
//than 2 items, and the offer has not expired.  Premium 
//members do not need to buy a specific amount of products.

// function doesProductOfferApply(hasThreeOrMoreItems, isOfferExpired, isPremiumMember){
//     return (hasThreeOrMoreItems || isPremiumMember) && !isOfferExpired;
// }
let hasThreeOrMore; //set to true or false
let isOfferExpired; //set to true or false
let isPremiumMember; //set to true or false
console.log((hasThreeOrMore || isPremiumMember) && !isOfferExpired);
//or print from a value stored in variable
let canGetOffer = (hasThreeOrMore || isPremiumMember) && !isOfferExpired;
console.log(canGetOffer);

/*
4.  Use the following code to follow the instructions below:
*/

//var username = 'codeup';
//var password = 'notastrongpassword'

let username = 'codeup';
let password = 'notastrongpassword'

//Create a variable that holds a boolean value for each of the
//following conditions:

//-- the password must be at least 5 characters
//-- the password must not include the username
//-- the username must be no more than 20 characters
//-- neither the username or password can start or end with
//whitespace

let passwordMinLength = 5;
let passwordHasMinLength = password.length >= passwordMinLength;
let noUsernameInPassword = password.indexOf(username) === -1;
let usernameMaxLength = 20;
let usernameUnderMaxLength = username.length <= usernameMaxLength;

let passwordIsTrim = password.trim() === password;
let usernameIsTrim = username.trim() === username;
let passwordAndUsernameIsTrim = passwordIsTrim && usernameIsTrim;
let passwordAndUsernameIsValid = passwordHasMinLength && noUsernameInPassword && usernameUnderMaxLength && passwordAndUsernameIsTrim;
