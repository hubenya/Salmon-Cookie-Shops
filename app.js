'use strict';

//I wanted to practice and make it loop but was not able to loop more than once. i feel like i'm missing something
var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm',];

var firstAndPike = {
  location: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  cookiesSoldPerHour: [],
  totalSoldCookiesPike: 0,

    //random customer genrator
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

/*

var hours = ['6 am', '7 am', '8 am', '9 am', '10am', '11am', '12pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm',];

  var firstAndPike = {
    location: 'First and Pike',
    minCust: 23,
    maxCust: 65,
    avgSale: 6.3,
    cookiesSoldPerHour: [],

    //random customer genrator
    customerEachHour: function() {
      return Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
    },
    cookieSoldPerHour: function() {
      for (var i = 0; i < hours.lenght; i++) {
        this.cookieSoldPerHour.push(Math.floor(this.avgSale * this.cusEachHour()));
        console.log(hours[0], this.cookieSoldPerHour[0]);

      }
      console.log(this.customerEachHour());
    }

  };
  firstAndPike.cookieSoldPerHour();
  firstAndPike.custPerHour;





var seaTacAirport = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  details: function() {
    return 'Salmon Cookie shop at ' + this.location + ' has minimum of ' + this.minCust + ' customers and maximum of ' + this.minCust + '. Which averages out to ' + this.avgCookieSale;
  }
};

seaTacAirport.details();

var seattleCenter = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  details: function() {
    return 'Salmon Cookie shop at ' + this.location + ' has minimum of ' + this.minCust + ' customers and maximum of ' + this.minCust + '. Which averages out to ' + this.avgCookieSale;
  }
};

seattleCenter.details();

var capitolHill = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  details: function() {
    return 'Salmon Cookie shop at ' + this.location + ' has minimum of ' + this.minCust + ' customers and maximum of ' + this.minCust + '. Which averages out to ' + this.avgCookieSale;
  }
};

capitolHill.details();

var Alki = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  details: function() {
    return 'Salmon Cookie shop at ' + this.location + ' has minimum of ' + this.minCust + ' customers and maximum of ' + this.minCust + '. Which averages out to ' + this.avgCookieSale;
  }
};

Alki.details();
*/
