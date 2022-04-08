(function() {
    "use strict";

    console.log("Hello from external JavaScript");

// Introductory Questions
    alert("Welcome to my Website!");
    var userFavoriteColor = prompt("What is your favorite color?");
    alert("Really?! My favorite color is " + userFavoriteColor + " too!");

// Problem 1
    alert("Now onto some questions...");
    alert("Problem #1:");
    alert("You rented some movies for your kids: The Little Mermaid, Brother Bear and Hercules.");
    var littleMermaidDaysRented = parseFloat(prompt("How many days did you rent 'The Little Mermaid'?"));
    var brotherBearDaysRented = parseFloat(prompt("How many days did you rent 'Brother Bear'?"));
    var herculesDaysRented = parseFloat(prompt("How many days did you rent 'Hercules'?"));
    var movieRentalFeePerDayDollars = parseFloat(prompt("How much is the daily rental cost per movie?"));
    var totalRentalCost = movieRentalFeePerDayDollars * (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented);
    alert("Your total cost is $" + totalRentalCost.toFixed(2));

// Problem 2
    alert("Problem #2:");
    alert("Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour.");
    var googleHourlyRateDollars = parseFloat(prompt("How much does Google pay you per hour?"));
    var amazonHourlyRateDollars = parseFloat(prompt("How much does Amazon pay you per hour?"));
    var facebookHourlyRateDollars = parseFloat(prompt("How much does Facebook pay you per hour?"));
    var googleHoursWorked = parseFloat(prompt("How many hours did you work for Google this week?"));
    var amazonHoursWorked = parseFloat(prompt("How many hours did you work for Amazon this week?"));
    var facebookHoursWorked = parseFloat(prompt("How many hours did you work for Facebook this week?"));
    var totalPayForAllWork = ((googleHourlyRateDollars * googleHoursWorked) + (amazonHourlyRateDollars * amazonHoursWorked) + (facebookHourlyRateDollars * facebookHoursWorked));
    alert("You made $" + totalPayForAllWork.toFixed(2) + " this week!");

// Problem 3
    alert("Problem #3:");
    alert("You can enroll in a class only if the class is not full and the class schedule does not conflict with your schedule.");
    var isClassFull = confirm("Is the class full? (Cancel - No | Ok - Yes)");
    var isScheduleConflict = confirm("Does the class schedule conflict with your personal schedule? (Cancel - No | Ok - Yes)");
    var canYouEnroll = (!isClassFull && !isScheduleConflict); // Reverses and stores values for readability
    if (canYouEnroll) {
        alert("Great news, you can enroll!");
    } else {
        alert("Sorry, you're unable to enroll, but we'll be here when you're ready.");
    }

// Problem 4
    alert("Problem #4:");
    alert("A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.  Premium members do not need to buy a specific amount of products.");
    var hasMoreThanTwoItems = confirm("Did you buy at least 3 items? (Cancel - No | Ok - Yes)");
    var isOfferValid = confirm("Is the offer still valid? (Cancel - No | Ok - Yes)");
    var isPremiumMember = confirm("Are you a premium member? (Cancel - No | Ok - Yes)");
    var canReceiveOffer = (hasMoreThanTwoItems || isPremiumMember) && isOfferValid;
    if (canReceiveOffer) {
        alert("Congratulations!  You are eligible for the promotional offer!");
    } else {
        alert("Sorry this promotional offer isn't available to you.");
    }
})();