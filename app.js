var firstAndPike = {
  location: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  custPerHour:[],
  cusEachHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  cookieSoldPerHour: function() {
    for (var i = 0; i < 14; i++) {
      this.custPerHour.push(Math.floor(this.avgSale * this.cusEachHour()));

       //var custPerHour = firstAndPike.cusEachHour(this.minCust, this.maxCust);
       //this.custPerHour.push(custPerHour);
    }
    console.log(this.cusEachHour());
  }

};
firstAndPike.cookieSoldPerHour();
firstAndPike.custPerHour;



function domStuff() {
  // part 1 //
  var container = document.createElement('div');
  container.innerHTML = '<p>' + firstAndPike.cusEachHour() + '</p>';
  document.body.appendChild(container);

  // part 2 //
  var list = document.createElement('ul');
  var list_arr = [];



  var full_list = list_arr.join('');

  list.innerHTML = full_list;
  document.body.appendChild(list);
}

// call our domStuff function
domStuff();




/*



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
