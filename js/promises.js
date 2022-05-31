(function(){

"use strict";

import {GITHUB_TOKEN} from "./keys";

// Function accepts a username as a parameter and returns the latest Github commit
const getLatestCommit = username => {
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {"Authorization": "token " + GITHUB_TOKEN}})
        .then((response) => response.json())
        .then((response) => console.log(response[0].created_at));
}
getLatestCommit("tsurizao");

// Function that accepts number of seconds, the timeout converts seconds to milliseconds
// before running, then resolve returns seconds
const wait = seconds => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(seconds);
        }, seconds);
    });
}

// Function call with an argument of 3 passed to the seconds parameter
wait(3000).then((response) => {
    const seconds = response / 1000;
    seconds === 1 ? console.log(`${seconds} second has passed.`) : console.log(`${seconds} seconds have passed.`);
});

}());