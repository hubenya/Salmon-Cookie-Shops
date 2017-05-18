'use strict';

//I wanted to practice and make it loop but was not able to loop more than once. i feel like i'm missing something
var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm',];
// hours.length

function Store(name, minimum, maximum, averageSales) {
  this.name = name;
  this.minimum = minimum;
  this.maximum = maximum;
  this.averageSales = averageSales;
  this.cookiesSoldPerHour = [];
  this.totalCookies = 0;
  //this.totalCookiesDaily();

}
//random customer genrator that come through the door
Store.prototype.randomNumberGenarator = function(){
  return Math.floor(Math.random() * (this.maximum - this.minimum) + this.minimum);
};
//console.log(this.randomNumberGenarator);
// loop to see how many cookies are sold each hour per store
Store.prototype.cookieSoldEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.cookiesSoldPerHour.push(Math.floor(this.averageSales * this.randomNumberGenarator()));
     //this.totalCookiesLocation += this.cookiesSoldPerHour[i];
  }
};
//this is total cookies calculator
Store.prototype.totalCookiesCalculator = function(){
  for (var j = 0; j < this.cookiesSoldPerHour.length; j++) {
    this.totalCookies += this.cookiesSoldPerHour[j];
  //console.log('Total cookies daily' + totalCookiesDaily());
  }
  return this.totalCookies;
};

//header function
var tHead = document.getElementById('hours-listed');//
console.log('t head', tHead);
//var hourRow = document.createElement('tr');
//tHead.appendChild(hourRow);
function renderHeader() {
  var hourRow = document.createElement('tr'); //crated table row elemet and assigning a value to hourRow.
  tHead.appendChild(hourRow);// hourRow is getting append to the table header a a child.
  for (var i=0; i < hours.length; i++) {   //lopping through hour veriable to display hour in individuals TD elements
    var hourCell = document.createElement('td');// creating individual td element and assigning to hour veriable
    hourCell.innerHTML = hours[i]; //itterating through store hour array and assigning specific index valu to to inned HTML the previously created element of hourCell
    hourRow.appendChild(hourCell);//attching/appending veriable hourCell to the variable hourRow as a child
    console.log('hourcelll', hourCell);// print
  }
}
renderHeader();//calling the function

// //First attmept to make store print cookieTable
// var cookieTable = document.getElementById('table-body');//
// console.log('t head', cookieTable);
// //var hourRow = document.createElement('tr');
// //tbody.appendChild(cookieRow);
// function renderBody() {
//   var cookieRow = document.createElement('tr');
//   cookieTable.appendChild(cookieRow);
//   for (var j=0; j < hours.length; j++) {
//     var cookCell = document.createElement('td');
//     cookCell.innerHTML = Store.cookiesSoldPerHour;
//     cookieRow.appendChild(cookCell);
//     console.log('Cookies cell', cookCell);
//   }
// }
// renderBody();//calling the function


//this is where i'm trying to call table data. and its not working.
var cookieRow = document.getElementById('table-body');//
console.log('t head', cookieRow);

function renderBody() {
  var cookieRow = document.createElement('tr');
  console.log('Testing cookieRow', cookieRow);
  var storeRow = document.createElement('td');
  console.log('Testing storeRow', storeRow);
  storeRow.innerHTML = this.name;
  cookieRow.appendChild(storeRow);
  for (var j=0; j < Store.length; j++) {
    var cookCell = document.createElement('td');
    cookCell.innerHTML = Stores[j];
    cookieRow.appendChild(cookCell);
    console.log('Cookies cell', cookCell);
  }

}
renderBody();

//this is where my logic is to print sales list
function storeList(storeLocation) {
  var container = document.createElement('div');
  container.innerHTML = '<p>' + storeLocation.name + '</p>';
  document.body.appendChild(container);

  var list = document.createElement('ul');
  var list_arr = [];

  for (var i = 0; i < hours.length; i++) {
    list_arr.push('<li>' + hours[i]+ ': ' + storeLocation.cookiesSoldPerHour[i] + '</li>');

  }
  list_arr.push('<li> Total: ' + storeLocation.totalCookiesCalculator() + '</li>');
  var full_list = list_arr.join('');
  list.innerHTML = full_list;
  document.body.appendChild(list);
}

 //list of stores data array isertion
var FirstandPike = new Store('First and Pike',23, 65, 6.3);
var SeaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var SeattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var CapitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var Alki = new Store('Alki', 2, 16, 4.6);

var Stores = [FirstandPike, SeaTacAirport, SeattleCenter, CapitolHill, Alki];
//var dataStores = [];
//storing results for each store name
FirstandPike.cookieSoldEachHour();
SeaTacAirport.cookieSoldEachHour();
SeattleCenter.cookieSoldEachHour();
CapitolHill.cookieSoldEachHour();
Alki.cookieSoldEachHour();

storeList(FirstandPike);
storeList(SeaTacAirport);
storeList(SeattleCenter);
storeList(CapitolHill);
storeList(Alki);
//FirstandPike.render();
// SeaTacAirport.render();
// SeattleCenter.render();
// CapitolHill.render();
// Alki.render();
