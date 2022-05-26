(function () {
    "use strict";

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    let newUsers = users.filter(user => user.languages.length >= 3);
    console.log(newUsers);

    let emails = users.map(user => user.email);
    console.log(emails);

    let averageYearsOfExperience = (users.reduce((total, user) => total += user.yearsOfExperience, 0)) / users.length;
    console.log(averageYearsOfExperience);

    let longestEmail = users.reduce((previousEmail, currentEmail) => {
        if (previousEmail.length < currentEmail.email.length) {
            previousEmail = currentEmail.email;
        }
        return previousEmail;
    }, "");
    console.log(longestEmail);

    let userNames = users.reduce((names, person) => {
        if (person.name === "justin") {
            return names += person.name;
        } else {
            return names += `${person.name}, `
        }
    }, "");
    console.log(userNames);
}());