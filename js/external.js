console.log("Hello from external JavaScript");

//Introductory Questions
alert("Welcome to my Website!");
var userFavoriteColor = prompt("What is your favorite color?");
alert("Really?! My favorite color is " + userFavoriteColor + " too!");

// Problem 1
alert("Now onto some questions...");
alert("You rented some movies for your kids: The Little Mermaid, Brother Bear and Hercules.  Additionally there is a $3.00 fee per day per movie.");
var littleMermaidDaysRented = parseFloat(prompt("How many days did you rent 'The Little Mermaid'?"));
var brotherBearDaysRented = parseFloat(prompt("How many days did you rent 'Brother Bear'?"));
var herculesDaysRented = parseFloat(prompt("How many days did you rent 'Hercules'?"));
var movieRentalFeePerDayDollars = parseFloat(prompt("How much is the daily rental cost per movie?"));
var totalRentalCost = movieRentalFeePerDayDollars * (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented);
alert("Your total cost is $" + totalRentalCost);

// Problem 2
alert("Great!  Now problem #2:");
alert("Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour.");
var googleHourlyPayRateDollars = prompt("How much does Google pay you per hour?");
var googleHoursWorked = prompt("How many hours did you work for Google this week?");
var amazonHourlyPayRateDollars = prompt("How much does Amazon pay you per hour?");
var amazonHoursWorked = prompt("How many hours did you work for Amazon this week?");
var facebookHourlyPayRateDollars = prompt("How much does Facebook pay you per hour?");
var facebookHoursWorked = prompt("How many hours did you work for Facebook this week?");
var totalPayForAllWork = ((googleHourlyPayRateDollars * googleHoursWorked) + (amazonHourlyPayRateDollars * amazonHoursWorked) + (facebookHourlyPayRateDollars * facebookHoursWorked));
alert("You made $" + totalPayForAllWork + " this week!");

//Problem 3
alert("Problem numero 3:");
alert("You're can enroll in a class only if the class is not full and the class schedule does not conflict with your schedule.");
var isClassFull = confirm("Is the class full? (Cancel - No | Ok - Yes)");
var isScheduleConflict = confirm("Does the class schedule conflict with your personal schedule? (Cancel - No | Ok - Yes)");
var canYouEnroll = (!isClassFull && !isScheduleConflict); // Reverses and stores values for readability
if (canYouEnroll){
    alert("Great news, you can enroll!");
} else {
    alert("Sorry, you're unable to enroll, but we'll be here when you're ready.");
}

//Problem 4
alert("Final Problem");
alert("A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.  Premium members do not need to buy a specific amount of products.");
var hasMoreThanTwoItems = confirm("Did you buy at least 3 items? (Cancel - No | Ok - Yes)");
var isOfferExpired = confirm("Is the offer still valid? (Cancel - No | Ok - Yes)");
var isPremiumMember = confirm("Are you a premium member? (Cancel - No | Ok - Yes)");
var canReceiveOffer = (hasMoreThanTwoItems || isPremiumMember) && !isOfferExpired;
alert("Congratulations!  You are eligible for the promotional offer!");