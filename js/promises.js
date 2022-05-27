// (function(){

"use strict";

let getLatestCommit = username => {
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {"Authorization": GITHUB_TOKEN}})
        .then((res) => res.json())
        .then((res) => console.log(res[0].created_at));
}

getLatestCommit("tsurizao");
// }());