'use strict';

//I wanted to practice and make it loop but was not able to loop more than once.
var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm',];

var firstAndPike = {
  location: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  cookiesSoldPerHour: [],
  totalCookies: 0,

  randomNumberGenarator: function() {
    return Math.floor(Math.random() * (this.maxCust-this.minCust)+this.minCust);
  },
      //Cookies sold each hour
  cookieSoldEachHour : function() {
    for(var i = 0; i < hours.length; i++) {
      this.cookiesSoldPerHour.push(Math.floor(this.avgSale * this.randomNumberGenarator()));
      this.totalCookies += this.cookiesSoldPerHour[i];
    }
  },
        ///render function to insert data from store into html page
  render: function () {
    for(var i = 0; i < hours.length; i++) {
      // this is were cookies sold each hour is getting printed.
      var ulfirstAndPikeElement = document.getElementById('first_and_pike');
      var lifirstAndPikeList = document.createElement('li');
      lifirstAndPikeList.innerHTML = hours[i]+': '+ this.cookiesSoldPerHour[i];
      ulfirstAndPikeElement.appendChild(lifirstAndPikeList);
    }
    // this is where total from store is getting added
    ulfirstAndPikeElement = document.getElementById('first_and_pike');
    lifirstAndPikeList = document.createElement('li');
    lifirstAndPikeList.innerHTML = 'Total'+' '+ this.totalCookies;
    ulfirstAndPikeElement.appendChild(lifirstAndPikeList);
  }
};
//calling function to print for the store
firstAndPike.cookieSoldEachHour();
firstAndPike.render();
//console.log(firstAndPike.cookieSoldEachHour());

var seaTacAirport = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  cookiesSoldPerHour: [],
  totalCookies: 0,

  randomNumberGenarator: function() {
    return Math.floor(Math.random() * (this.maxCust-this.minCust)+this.minCust);
  },
  cookieSoldEachHour : function() {
    for(var i = 0; i < hours.length; i++) {
      this.cookiesSoldPerHour.push(Math.floor(this.avgSale * this.randomNumberGenarator()));
      this.totalCookies += this.cookiesSoldPerHour[i];
    }
  },
  render: function () {
    for(var i = 0; i < hours.length; i++) {

      var ulseaTacAirportElement = document.getElementById('seaTac_store');
      var liseaTacAirportList = document.createElement('li');
      liseaTacAirportList.innerHTML = hours[i]+': '+ this.cookiesSoldPerHour[i];
      ulseaTacAirportElement.appendChild(liseaTacAirportList);
    }
    ulseaTacAirportElement = document.getElementById('seaTac_store');
    liseaTacAirportList = document.createElement('li');
    liseaTacAirportList.innerHTML = 'Total'+' '+ this.totalCookies;
    ulseaTacAirportElement.appendChild(liseaTacAirportList);
  }
};

seaTacAirport.cookieSoldEachHour();
seaTacAirport.render();


var seattleCenter = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  cookiesSoldPerHour: [],
  totalCookies: 0,

  randomNumberGenarator: function() {
    return Math.floor(Math.random() * (this.maxCust-this.minCust)+this.minCust);
  },
  cookieSoldEachHour : function() {
    for(var i = 0; i < hours.length; i++) {
      this.cookiesSoldPerHour.push(Math.floor(this.avgSale * this.randomNumberGenarator()));
      this.totalCookies += this.cookiesSoldPerHour[i];
    }
  },
  render: function () {
    for(var i = 0; i < hours.length; i++) {

      var ulseattleCenterElement = document.getElementById('seattle_center');
      var liseattleCenterList = document.createElement('li');
      liseattleCenterList.innerHTML = hours[i]+': '+ this.cookiesSoldPerHour[i];
      ulseattleCenterElement.appendChild(liseattleCenterList);
    }
    ulseattleCenterElement = document.getElementById('seattle_center');
    liseattleCenterList = document.createElement('li');
    liseattleCenterList.innerHTML = 'Total'+' '+ this.totalCookies;
    ulseattleCenterElement.appendChild(liseattleCenterList);
  }
};

seattleCenter.cookieSoldEachHour();
seattleCenter.render();

var capitolHill = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  cookiesSoldPerHour: [],
  totalCookies: 0,

  randomNumberGenarator: function() {
    return Math.floor(Math.random() * (this.maxCust-this.minCust)+this.minCust);
  },
  cookieSoldEachHour : function() {
    for(var i = 0; i < hours.length; i++) {
      this.cookiesSoldPerHour.push(Math.floor(this.avgSale * this.randomNumberGenarator()));
      this.totalCookies += this.cookiesSoldPerHour[i];
    }
  },
  render: function () {
    for(var i = 0; i < hours.length; i++) {

      var ulcapitolHillElement = document.getElementById('capitol_hill');
      var licapitolHillList = document.createElement('li');
      licapitolHillList.innerHTML = hours[i]+': '+ this.cookiesSoldPerHour[i];
      ulcapitolHillElement.appendChild(licapitolHillList);
    }
    ulcapitolHillElement = document.getElementById('capitol_hill');
    licapitolHillList = document.createElement('li');
    licapitolHillList.innerHTML = 'Total'+' '+ this.totalCookies;
    ulcapitolHillElement.appendChild(licapitolHillList);
  }
};

capitolHill.cookieSoldEachHour();
capitolHill.render();

var alkiStore = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  cookiesSoldPerHour: [],
  totalCookies: 0,

  randomNumberGenarator: function() {
    return Math.floor(Math.random() * (this.maxCust-this.minCust)+this.minCust);
  },
  cookieSoldEachHour : function() {
    for(var i = 0; i < hours.length; i++) {
      this.cookiesSoldPerHour.push(Math.floor(this.avgSale * this.randomNumberGenarator()));
      this.totalCookies += this.cookiesSoldPerHour[i];
    }
  },
  render: function () {
    for(var i = 0; i < hours.length; i++) {

      var ulalkiElement = document.getElementById('alki_store');
      var lialkiList = document.createElement('li');
      lialkiList.innerHTML = hours[i]+': '+ this.cookiesSoldPerHour[i];
      ulalkiElement.appendChild(lialkiList);
    }
    ulalkiElement = document.getElementById('alki_store');
    lialkiList = document.createElement('li');
    lialkiList.innerHTML = 'Total'+' '+ this.totalCookies;
    ulalkiElement.appendChild(lialkiList);
  }
};

alkiStore.cookieSoldEachHour();
alkiStore.render();
