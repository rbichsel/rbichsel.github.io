var requestURL = 'http://api.wunderground.com/api/2bd3e0c1308e8f04/conditions/q/MN/Franklin.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL, true);
request.send();

request.onload = function() {
    
    var franklinWeather = JSON.parse(request.responseText);
    console.log(franklinWeather);
    
    document.getElementById('cweather').innerHTML = franklinWeather.current_observation.weather;
    
    document.getElementById('ctemp').innerHTML = franklinWeather.current_observation.temp_f;
    
    document.getElementById('wind').innerHTML = franklinWeather.current_observation.wind_mph;
    
    
    document.getElementById('w_icon').src = franklinWeather.current_observation.icon_url;
    
}

