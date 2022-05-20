"use strict";

// (function () {
    $.ajax("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_KEY,
        q: "San Antonio, US"
    }).done(function (data) {
        console.log(data);
    });
// }());