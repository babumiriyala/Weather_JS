/*jslint browser:true */
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

// GET THE CONDITIONS
weatherConditions.open('GET', 'http://api.wunderground.com/api/ca6c87d275e05935/conditions/q/17.457,78.533.json', true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);

weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText);
        console.log(cObj);
        document.getElementById('location').innerHTML = cObj.current_observation.display_location.full;
        document.getElementById('temperature').innerHTML = cObj.current_observation.temp_c;


    } //end if
}; //end function










// GET THE FORECARST
weatherForecast.open('GET', 'http://api.wunderground.com/api/ca6c87d275e05935/forecast/q/17.457,78.533.json', true);
weatherForecast.responseType = 'text';
weatherForecast.send();

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
	console.log(fObj);

} //end if
}; //end function
