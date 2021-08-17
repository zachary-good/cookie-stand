'use strict';

const seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookSale: 6.3,
  custPerHour: function(){
    this.numberOfCustPerHour = `${_randomNum(23, 65)} customers`;

    
  },
  // cooksPerHour: function(){
  //   this.numberOfCooksPerHour = `${cookiesPerHour(custPerHour)} cookies`;
  // },
  hourlyCookieSales: []
}

const tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookSale: 1.2,
  custPerHour: function(){
    this.numberOfCustPerHour = `${_randomNum(3, 24)} customers`;

    
  },
  // cooksPerHour: function(){
  //   this.numberOfCooksPerHour = `${cookiesPerHour(custPerHour)} cookies`;
  // },
  hourlyCookieSales: []
}

const dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookSale: 3.7,
  custPerHour: function(){
    this.numberOfCustPerHour = `${_randomNum(11, 38)} customers`;

    
  },
  // cooksPerHour: function(){
  //   this.numberOfCooksPerHour = `${cookiesPerHour(custPerHour)} cookies`;
  // },
  hourlyCookieSales: []
}

const paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookSale: 2.3,
  custPerHour: function(){
    this.numberOfCustPerHour = `${_randomNum(20, 38)} customers`;

    
  },
  // cooksPerHour: function(){
  //   this.numberOfCooksPerHour = `${cookiesPerHour(custPerHour)} cookies`;
  // },
  hourlyCookieSales: []
}

const lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookSale: 4.6,
  custPerHour: function(){
    this.numberOfCustPerHour = `${_randomNum(2, 16)} customers`;

    
  },
  // cooksPerHour: function(){
  //   this.numberOfCooksPerHour = `${cookiesPerHour(custPerHour)} cookies`;
  // },
  hourlyCookieSales: []
}


function _randomNum(min, max){
  let num = Math.floor(Math.random()*(max-min) + min);

  return num;
}

const locationList = [seattle, tokyo, dubai, paris, lima];

function getHourlySales(){
  for(let i = 0; i < locationList.length; i++){
    let currentCity = locationList[i];
        for(let j = 0; j < 14; j++){
      let customerAmount = currentCity.custPerHour();
      let cookiesAmount = currentCity.avgCookSale;
      let hourlyCookies = cookiesPerHour(cookiesAmount, customerAmount);
      currentCity.hourlyCookieSales.push(hourlyCookies)
    }
  }
}

function cookiesPerHour(avgCookies, numOfCustomers){
  let cookies = avgCookies*numOfCustomers;
  
  return cookies;
}

//seattle.custPerHour();
getHourlySales();
console.log(seattle);
console.log(lima);
//console.log(_randomNum(23, 65));