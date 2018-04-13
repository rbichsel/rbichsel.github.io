var section = document.getElementById("price1");

var requestURL = 'https://rbichsel.github.io/assignments/final/data/services.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    var townInfo = request.response;
    showInfo(townInfo);
}


function showInfo(jsonObj) {
    var mnTowns = jsonObj['towns'];


    for (var i = 0) {

        var myPara1 = document.createElement('p');

        myPara1.textContent = 'Motto: ' + mnTowns[i].motto;

        section.appendChild(myPara1);


    }
}
