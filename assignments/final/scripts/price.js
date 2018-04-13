var section = document.getElementById("price1");

        var requestURL = 'https://rbichsel.github.io/assignments/final/data/services.json';

        var request = new XMLHttpRequest();

        request.open('GET', requestURL);

        request.responseType = 'json';
        request.send();

        request.onload = function() {
            var townInfo = request.response;
            showInfo(townInfo); 
        }


        function showInfo(jsonObj) {
            var mnTowns = jsonObj['services'];
            mnTowns.splice(2,1);

            for (var i = 0; i < mnTowns.length; i++) {
                var myArticle = document.createElement('article');
                var myH3 = document.createElement('h3');
                var myPara1 = document.createElement('p');
                var myPara2 = document.createElement('p');
                var myPara3 = document.createElement('p');
                var myPara4 = document.createElement('p');
                var myH4 = document.createElement("h4");
                var myList = document.createElement('ul');
                var myImg = document.createElement('img');
                
                myH3.classList.add("t-name");
            
                
                myH3.textContent = mnTowns[i].type;
                myPara1.textContent = 'Motto: ' + mnTowns[i].details;
                myPara2.textContent = 'Year Founded: ' + mnTowns[i].price;
                myPara3.textContent = 'Current Population: ' + mnTowns[i].details;
                myPara4.textContent = 'Average Rainfall: ' + mnTowns[i].details;
                myH4.type = 'Events';
                
                
                
                

                var townEvents = mnTowns[i].events;
                for (var j = 0; j < townEvents.length; j++) {
                    var listItem = document.createElement('li');
                    listItem.textContent = townEvents[j];
                    myList.appendChild(listItem);
                }

                myArticle.appendChild(myH3);
                myArticle.appendChild(myPara1);
                myArticle.appendChild(myPara2);
                myArticle.appendChild(myPara3);
                myArticle.appendChild(myPara4);
                myArticle.appendChild(myH4); 

                myArticle.appendChild(myList);
                myArticle.appendChild(myImg);
                section.appendChild(myArticle);
            }
        }