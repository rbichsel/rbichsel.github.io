var section = document.getElementById("town-info");

        var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

        var request = new XMLHttpRequest();

        request.open('GET', requestURL);

        request.responseType = 'json';
        request.send();

        request.onload = function() {
            var townInfo = request.response;
            showInfo(townInfo); 
        }


        function showInfo(jsonObj) {
            var mnTowns = jsonObj['towns'];
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
            
                
                myH3.textContent = mnTowns[i].name;
                myPara1.textContent = 'Motto: ' + mnTowns[i].motto;
                myPara2.textContent = 'Year Founded: ' + mnTowns[i].yearFounded;
                myPara3.textContent = 'Current Population: ' + mnTowns[i].currentPopulation;
                myPara4.textContent = 'Average Rainfall: ' + mnTowns[i].averageRainfall;
                myH4.textContent = 'Events';
                
                myImg.src = "images/" + mnTowns[i].name + ".jpg";
                
                

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
