var firstAndPike = {
  location: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  RandomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};

firstAndPike.RandomCustomers();





//firstAndPike.details();

function location1() {
  var container = document.createElement('div');
  container.innerHTML = '<p>' + firstAndPike.details() + '</p>';
  document.body.appendChild(container);

  var list = document.createElement('ul');
  var list_arr = [];

  for (var i = 0; i < firstAndPike.minCust.length; i++) {
    list_arr.push('<li>' + firstAndPike.minCust[i] + '</li>');

  }
  var full_list = list_arr.join('');
  list.innerHTML = full_list;
  document.body.appendChild(list);
}
location1();

























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
