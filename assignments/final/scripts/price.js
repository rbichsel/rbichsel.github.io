var section = document.getElementById("prices");

var requestURL = 'https://rbichsel.github.io/assignments/final/scripts/services.json';


var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    var servPrices = request.response;
    showInfo(servPrices);
}


function showInfo(jsonObj) {

    var mtPrice = jsonObj['services'];
    
    document.getElementById('price1').innerHTML = services[0].price;

    /*for (var i = 0; i < mtPrice.length; i++) {
        var p1 = document.getElementById('price1').innerHTML;
        var p2 = document.getElementById('price2').innerHTML;
        var p3 = document.getElementById('price3').innerHTML;
        var p4 = document.getElementById('price4').innerHTML;

        console.log(mtPrice[0].price);
        
        p1.textContent = mtPrice[i].price;
        p2.textContent = mtPrice[i].price;
        p3.textContent = mtPrice[i].price;
        p4.textContent = mtPrice[i].price;
        
        myArticle.appendChild(p1);
        section.appendChild(myArticle);

    */
}
