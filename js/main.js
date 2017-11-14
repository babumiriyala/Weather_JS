var cObj;
var city = [
  'PUNE',
  'WARANGAL',
  'Delhi',
  'HYDERABAD',
  'SIDDIPET',
  'VIJAYAWADA',
  'KURNOOL',
  'GUNTUR',
  'KOLKATA',
  'KERALA'

];

for (var i = 0; i < city.length; i++) {
  loadWeather(city[i]);
}

function loadWeather(x) {
  var weatherConditions = new XMLHttpRequest();
  var conditionsPath = "http://api.wunderground.com/api/ca6c87d275e05935/conditions/q/" + x + ",INDIA.json";


  // GET THE CONDITIONS
  weatherConditions.open('GET', conditionsPath, true);
  weatherConditions.responseType = 'text';
  weatherConditions.send(null);

  weatherConditions.onload = function() {
    if (weatherConditions.status == 200) {
      cObj = JSON.parse(weatherConditions.responseText);
      console.log(cObj);
      var objDate = new Date(cObj.current_observation.observation_time_rfc822),
        locale = "en-us",
        month = objDate.toLocaleString(locale, { month: "long" });
        hours = objDate.toLocaleString(locale, { hour: "2-digit" });
        minutes = objDate.toLocaleString(locale, { minute: "numeric" });

      var row = "<tr><td>" + cObj.current_observation.display_location.city + "</td><td>" + cObj.current_observation.UV + "</td><td>" + cObj.current_observation.temp_c +"°" + "</td><td>" + objDate.getHours() +":"+minutes+ "</td></tr>";
      $('#ajaxRows').append(row);



        document.getElementById('CurrentTime').innerHTML =  objDate.getDate()+ " " + month +" " + objDate.getFullYear();
        //console.log(month);

    // or if you want the shorter date: (also possible to use "narrow" for "O"
    //console.log(objDate.toLocaleString(locale, { month: "short" }));
        }
      };
};
