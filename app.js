'use strict';
//I wanted to practice and make it loop but was not able to loop more than once. i feel like i'm missing something
var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm',];

function Store(minimum, maximum, averageSales) {
  //this.location = location;
  this.minimum = minimum;
  this.maximum = maximum;
  this.averageSales = averageSales;
}
 //new stores
var FirstandPike = new Store(23, 65, 6.3);
var SeaTacAirport = new Store(3, 24, 1.2);
var SeattleCenter = new Store(11, 38, 3.7);
var CapitolHill = new Store(20, 38, 2.3);
var Alki = new Store(2, 16, 4.6);

var Stores = [FirstandPike, SeaTacAirport, SeattleCenter, CapitolHill, Alki];

    //random customer genrator

/*

customerEachHour: function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
},
cookieSoldEachHour: function() {
  for (var i = 0; i < hours.length; i++) {
    this.cookiesSoldPerHour.push(Math.floor(this.avgSale * this.customerEachHour()));
    //console.log(hours[i], this.cookiesSoldPerHour[i]);
    firstAndPike.totalSoldCookiesPike +- this.cookiesSoldPerHour[i];
    //need to add total sold logic
    hours[i], this.cookiesSoldPerHour[i];
  }
    //console.log(this.customerEachHour());
}

};
firstAndPike.cookieSoldEachHour();
firstAndPike.cookiesSoldPerHour;
*/
