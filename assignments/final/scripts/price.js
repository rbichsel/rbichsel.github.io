var section = document.getElementById("price1");
var section = document.getElementById("price2");
var section = document.getElementById("price3");
var section = document.getElementById("price4");


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
 
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    

        myPara1.textContent = mnTowns[0].motto;
        myPara2.textContent = mnTowns[1].motto;
        myPara3.textContent = mnTowns[2].motto;
        myPara4.textContent = mnTowns[3].motto;

        section.appendChild(myPara1);


    
}
