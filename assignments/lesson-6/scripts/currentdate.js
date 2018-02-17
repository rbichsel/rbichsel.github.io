var d = new Date();
var day = d.getDay();
var day2 = ["Sunday", "Monday", "Wednesday", "Thrusday", "Friday", "Saturday"];
var days = day2[d.getDay()];

var date = d.getDate();

var mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var month = mon[d.getMonth()];

var year = d.getFullYear();
console.log(year);

final = days + ', ' + date + ' ' + month + ' ' + year;
document.getElementById("currentdate").innerHTML = final;
