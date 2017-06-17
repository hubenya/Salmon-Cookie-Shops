'use strict';
// 
//
//
//
// var phonebookEntry1 = {};
//
// phonebookEntry1.name = 'Slavik Hubenya';
// phonebookEntry1.number = '(503) 565-5545';
// phonebookEntry1.phone = function() {
//   console.log('Calling ' + this.name + ' at ' + this.number + '...');
// };
//
// phonebookEntry1.phone();
//
//

//I wanted to practice and make it loop but was not able to loop more than once. i feel like i'm missing something
var hours = [' ', '6:am', '7:am', '8:am', '9:am', '10:am', '11:am', '12:pm', '1:pm', '2:pm', '3:pm', '4:pm', '5:pm', '6:pm', '7:pm', 'Total'];
//Store data
function Store(name, minimum, maximum, averageSales) {
  this.name = name;
  this.minimum = minimum;
  this.maximum = maximum;
  this.averageSales = averageSales;
  this.cookiesSoldPerHour = [];
  this.totalCookies = 0;
}
//random customer genrator that come through the door
Store.prototype.randomNumberGenarator = function(){
  return Math.floor(Math.random() * (this.maximum - this.minimum) + this.minimum);
};
//console.log(this.randomNumberGenarator);
// loop to see how many cookies are sold each hour per store
Store.prototype.cookieSoldEachHour = function() {
  for (var i = 0; i < 15; i++) {
    this.cookiesSoldPerHour.push(Math.floor(this.averageSales * this.randomNumberGenarator()));
    //this.totalCookies += this.cookiesSoldPerHour[i];
  }
};
//this is total cookies calculator
Store.prototype.totalCookiesCalculator = function(){
  for (var j = 0; j < this.cookiesSoldPerHour.length; j++) {
    this.totalCookies += this.cookiesSoldPerHour[j];
    console.log('Total cookies daily' + this.totalCookies);
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
  for (var i=0; i < 16; i++) {   //lopping through hour veriable to display hour in individuals TD elements
    var hourCell = document.createElement('td');// creating individual td element and assigning to hour veriable
    hourCell.innerHTML = hours[i]; //itterating through store hour array and assigning specific index valu to to inned HTML the previously created element of hourCell
    hourRow.appendChild(hourCell);//attching/appending veriable hourCell to the variable hourRow as a child
    //console.log('hourcelll', hourCell);// print
  }
}
renderHeader();//calling the function
//this is where i'm trying to call table data. and its not working.
Store.prototype.renderBody = function() {
  var tableData = document.getElementById('table-body');//
  var cookieRow = document.createElement('tr');
  //console.log('Testing cookieRow', cookieRow);
  var storeRow = document.createElement('td');
  //console.log('Testing storeRow', storeRow);
  storeRow.innerHTML = this.name;
  cookieRow.appendChild(storeRow);
  tableData.appendChild(cookieRow);
  for (var j=1; j < 15; j++) {
    var cookCell = document.createElement('td');
    cookCell.innerHTML = this.cookiesSoldPerHour[j];
    cookieRow.appendChild(cookCell);
    //console.log('Cookies cell Testing', cookCell);
  }
  var total = document.createElement('td');
  total.innerHTML = this.totalCookiesCalculator();
  cookieRow.appendChild(total);

  //console.log('t head', cookieRow2);
};


//this is where my logic is to print sales list for mondays lab
// function storeList(storeLocation) {
//   var container = document.createElement('div');
//   container.innerHTML = '<p>' + storeLocation.name + '</p>';
//   document.body.appendChild(container);
//
//   var list = document.createElement('ul');
//   var list_arr = [];
//
//   for (var i = 0; i < hours.length; i++) {
//     list_arr.push('<li>' + hours[i]+ ': ' + storeLocation.cookiesSoldPerHour[i] + '</li>');
//
//   }
//   list_arr.push('<li> Total: ' + storeLocation.totalCookiesCalculator() + '</li>');
//   var full_list = list_arr.join('');
//   list.innerHTML = full_list;
//   document.body.appendChild(list);
// }

 //list of stores data array isertion
var FirstandPike = new Store('First and Pike',23, 65, 6.3);
var SeaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var SeattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var CapitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var Alki = new Store('Alki', 2, 16, 4.6);

//storing results for each store location
FirstandPike.cookieSoldEachHour();
SeaTacAirport.cookieSoldEachHour();
SeattleCenter.cookieSoldEachHour();
CapitolHill.cookieSoldEachHour();
Alki.cookieSoldEachHour();

FirstandPike.renderBody();
SeaTacAirport.renderBody();
SeattleCenter.renderBody();
CapitolHill.renderBody();
Alki.renderBody();

// storeList(FirstandPike);
// storeList(SeaTacAirport);
// storeList(SeattleCenter);
// storeList(CapitolHill);
// storeList(Alki);
//FirstandPike.render();
// SeaTacAirport.render();
// SeattleCenter.render();
// CapitolHill.render();
// Alki.render();
