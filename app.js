'use strict';
//I wanted to practice and make it loop but was not able to loop more than once. i feel like i'm missing something
var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm',];
// hours.length

function Store(location, minimum, maximum, averageSales) {
  this.location = location;
  this.minimum = minimum;
  this.maximum = maximum;
  this.averageSales = averageSales;
  this.cookiesSoldPerHour = [];
}
//random customer genrator that come through the door
Store.prototype.randomNumberGenarator = function(){
  return Math.floor(Math.random() * (this.maximum - this.minimum) + this.minimum);
};
console.log(this.randomNumberGenarator);

// loop to see how many cookies are sold each hour per store
Store.prototype.cookieSoldEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.cookiesSoldPerHour.push(Math.floor(this.averageSales * this.randomNumberGenarator()));
//console.log(hours[i], this.cookiesSoldPerHour[i]);
//firstAndPike.totalSoldCookiesPike +- this.cookiesSoldPerHour[i];
//need to add total sold logic
    //hours[i], this.cookiesSoldPerHour[i];
  }
  //console.log(this.cookieSoldEachHour());
  //I was testing my code to see where my problem is.
  console.log('what cookies sold per hour', this.cookiesSoldPerHour);
};

 //list of stores data
var FirstandPike = new Store('First and Pike', 23, 65, 6.3);
var SeaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var SeattleCenter = new Store('SeattleCenter', 11, 38, 3.7);
var CapitolHill = new Store('CapitolHill', 20, 38, 2.3);
var Alki = new Store('Alki', 2, 16, 4.6);


//var Stores = [FirstandPike, SeaTacAirport, SeattleCenter, CapitolHill, Alki];
//var dataStores = [];

//storing results for each store location
FirstandPike.cookieSoldEachHour();
SeaTacAirport.cookieSoldEachHour();
SeattleCenter.cookieSoldEachHour();
CapitolHill.cookieSoldEachHour();
Alki.cookieSoldEachHour();
