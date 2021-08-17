'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const locationsDiv = document.getElementById('locations');

//location object
const seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookSale: 6.3,
  custPerHour: function(){
    this.numberOfCustPerHour = _randomNum(23, 65)
    return this.numberOfCustPerHour;
    
  },
  // cooksPerHour: function(){
  //   this.numberOfCooksPerHour = `${cookiesPerHour(custPerHour)} cookies`;
  // },
  hourlyCookieSales: []
}

//location object
const tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookSale: 1.2,
  custPerHour: function(){
    this.numberOfCustPerHour = _randomNum(3, 24)
    return this.numberOfCustPerHour;
    
  },
  // cooksPerHour: function(){
  //   this.numberOfCooksPerHour = `${cookiesPerHour(custPerHour)} cookies`;
  // },
  hourlyCookieSales: []
}

//location object
const dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookSale: 3.7,
  custPerHour: function(){
    this.numberOfCustPerHour = _randomNum(11, 38)
    return this.numberOfCustPerHour;
    
  },
  // cooksPerHour: function(){
  //   this.numberOfCooksPerHour = `${cookiesPerHour(custPerHour)} cookies`;
  // },
  hourlyCookieSales: []
}

//location object
const paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookSale: 2.3,
  custPerHour: function(){
    this.numberOfCustPerHour = _randomNum(20, 38)
    return this.numberOfCustPerHour;
    
  },
  // cooksPerHour: function(){
  //   this.numberOfCooksPerHour = `${cookiesPerHour(custPerHour)} cookies`;
  // },
  hourlyCookieSales: []
}

//location object
const lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookSale: 4.6,
  custPerHour: function(){
    this.numberOfCustPerHour = _randomNum(2, 16)
    return this.numberOfCustPerHour;

    
  },
  // cooksPerHour: function(){
  //   this.numberOfCooksPerHour = `${cookiesPerHour(custPerHour)} cookies`;
  // },
  hourlyCookieSales: []
}

//random customer number generator, takes inputs of min and max customers per hour, returns the generated number
function _randomNum(min, max){
  let num = Math.floor(Math.random()*(max-min) + min);

  return num;
}

// array list of locations 
const locationList = [seattle, tokyo, dubai, paris, lima];

//function to generates and stores cookies per hour per location
function getHourlySales(){
  for(let i = 0; i < locationList.length; i++){
    let currentCity = locationList[i];
        for(let j = 0; j < 14; j++){
        let customerAmount = currentCity.custPerHour();
        let cookiesAmount = currentCity.avgCookSale;
        let hourlyCookies = Math.floor(cookiesPerHour(cookiesAmount, customerAmount));
        currentCity.hourlyCookieSales.push(hourlyCookies)
    }
  }
}

// calculate the cookies consumed per hour from the inputed average amount of cookies and the number of customers
function cookiesPerHour(avgCookies, numOfCustomers){
  let cookies = avgCookies*numOfCustomers;
  
  return cookies;
}

//outputs the code to the html
function renderNumbers(hours, locationList){
  let total = 0;
  
  for(let i = 0; i < locationList.length; i++){
    let currentCity = locationList[i];
    const divElement = document.createElement('div');
    locationsDiv.appendChild(divElement);
    const locationElement = document.createElement('h3');
    divElement.appendChild(locationElement);
    divElement.textContent = currentCity.location;
    const ulElement = document.createElement('ul');
    divElement.appendChild(ulElement);


    for(let j = 0; j < currentCity.hourlyCookieSales[j]; j++){
      //let sales = currentCity.hourlyCookieSales[j];
      const text = `${hours[j]}: ${currentCity.hourlyCookieSales[j]} cookies`;
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = text;
      total += currentCity.hourlyCookieSales[j];
    }
    const totalStr = `Total: ${total} cookies`;
    const totalElement = document.createElement('li');
    ulElement.appendChild(totalElement);
    totalElement.textContent = totalStr;
  }
  //return total;
}

//seattle.custPerHour();
getHourlySales();
renderNumbers(hours, locationList);
// console.log(seattle);
// console.log(lima);
//console.log(_randomNum(23, 65));