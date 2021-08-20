'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const cities = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
const locationsTable = document.getElementById('locations');
const tableElem = document.createElement('table');
locationsTable.appendChild(tableElem);
const formElem = document.getElementById('addLocationForm');


function locations(location, minCust, maxCust, avgCookSale){
  this.location = location;
  this.minCustomer = minCust;
  this.maxCustomer = maxCust;
  this.avgCookieSale = avgCookSale;
  //this.numberOfCustomers = randomNumberOfCustomers(this.minCustomer, this.maxCustomer);
  this.cookiesSoldPerHour = [];  //Math.ceil(avgCookSale * this.numberOfCustomers);
  this.renderMethod = function(){

  }

  locations.array.push(this);
}

locations.array = [];

//locations.prototype.

new locations('Seattle', 23, 65, 6.3);
new locations('Tokyo', 3, 24, 1.2);
new locations('Dubai', 11, 38, 3.7);
new locations('Paris', 20, 38, 2.3);
new locations('Lima', 2, 16, 4.6);

console.log(locations.array);

function randomNumberOfCustomers(min, max){
  let numOfCustomers = Math.floor(Math.random()*(max-min) + min);
  return numOfCustomers;
}

//function to generates and stores cookies per hour per location
function hourlySales(){
  for(let i = 0; i < locations.array.length; i++){
    let currentCity = locations.array[i];
        for(let j = 0; j < 14; j++){
          let customerAmount = randomNumberOfCustomers(currentCity.minCustomer, currentCity.maxCustomer);
          let cookiesAmount = currentCity.avgCookieSale;
          let hourlyCookies = Math.ceil(customerAmount * cookiesAmount);
          currentCity.cookiesSoldPerHour.push(hourlyCookies);
        }
  }
}

hourlySales();
//console.log(hours);
//console.log(cities);

function addHeaderRow(){
  //const articleElem = document.createElement('article');
  //locationsTable.appendChild(articleElem);
  const tableHead = document.createElement('thead');
  tableElem.appendChild(tableHead);
  const headRow = document.createElement('tr');
  tableHead.appendChild(headRow);
  const timesHeaderBlock = document.createElement('th');
  timesHeaderBlock.textContent = 'times:';
  headRow.appendChild(timesHeaderBlock);
  for(let i = 0; i < 14; i++){
    const thElement = document.createElement('th');
    thElement.textContent = `${hours[i]}`;
    headRow.appendChild(thElement);
    //return thElement;

  }
  
}

addHeaderRow();

function addLocations(){
  for(let i = 0; i < locations.array.length; i++){
    let total = 0;
    let city = locations.array[i];
    const tableBody = document.createElement('tbody');
    tableElem.appendChild(tableBody);
    const bodyRow = document.createElement('tr');
    tableBody.appendChild(bodyRow);
    const bodyHead = document.createElement('th');
    bodyHead.textContent =  `${city.location}`;
    bodyRow.appendChild(bodyHead);
    for(let j = 0; j < 14; j++){
      const bodyText = document.createElement('td');
      bodyText.textContent = `${city.cookiesSoldPerHour[j]}`;
      bodyRow.appendChild(bodyText);
      total += city.cookiesSoldPerHour[j];
    }
    const bodyTotal = document.createElement('td');
    bodyTotal.textContent = `${total}`;
    bodyRow.appendChild(bodyTotal);
  }
}

addLocations();

function addFooterRow(){
  const tableFooter = document.createElement('tfoot');
  tableElem.appendChild(tableFooter);
  const footRow = document.createElement('tr');
  tableFooter.appendChild(footRow);
  const totalHeaderBlock = document.createElement('th');
  totalHeaderBlock.textContent = 'Hourly Totals:';
  footRow.appendChild(totalHeaderBlock);
  let hourTotal = 0;
  let grandTotal = 0;
  for(let i = 0; i < 14; i++){
    for(let j = 0; j < locations.array.length; j++){
      let city = locations.array[j];
      hourTotal += city.cookiesSoldPerHour[i];
    }
    const totalBlocks = document.createElement('td');
    totalBlocks.textContent = `${hourTotal}`;
    footRow.appendChild(totalBlocks);
    grandTotal += hourTotal;
  }
  const finalTotalBlock = document.createElement('td');
  finalTotalBlock.textContent = `${grandTotal}`;
  footRow.appendChild(finalTotalBlock);
}

addFooterRow();

formElem.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  console.log(event);
  console.log(event.target.location.value);
  const location = event.target.location.value;
  const minCust = event.target.minCust.value;
  const maxCust = event.target.maxCust.value;
  const avgSale = event.target.avgSale.value;

  let inputLocation = new locations(location, minCust, maxCust, avgSale);
  console.log(inputLocation);

  hourlySales();
  addLocations();
  addFooterRow();
  event.target.reset();
}

// //location object
// const seattle = {
//   location: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookSale: 6.3,
//   custPerHour: function(){
//     this.numberOfCustPerHour = _randomNum(23, 65)
//     return this.numberOfCustPerHour;
    
//   },
//   // cooksPerHour: function(){
//   //   this.numberOfCooksPerHour = `${cookiesPerHour(custPerHour)} cookies`;
//   // },
//   hourlyCookieSales: []
// }

// //location object
// const tokyo = {
//   location: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookSale: 1.2,
//   custPerHour: function(){
//     this.numberOfCustPerHour = _randomNum(3, 24)
//     return this.numberOfCustPerHour;
    
//   },
//   // cooksPerHour: function(){
//   //   this.numberOfCooksPerHour = `${cookiesPerHour(custPerHour)} cookies`;
//   // },
//   hourlyCookieSales: []
// }

// //location object
// const dubai = {
//   location: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookSale: 3.7,
//   custPerHour: function(){
//     this.numberOfCustPerHour = _randomNum(11, 38)
//     return this.numberOfCustPerHour;
    
//   },
//   // cooksPerHour: function(){
//   //   this.numberOfCooksPerHour = `${cookiesPerHour(custPerHour)} cookies`;
//   // },
//   hourlyCookieSales: []
// }

// //location object
// const paris = {
//   location: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookSale: 2.3,
//   custPerHour: function(){
//     this.numberOfCustPerHour = _randomNum(20, 38)
//     return this.numberOfCustPerHour;
    
//   },
//   // cooksPerHour: function(){
//   //   this.numberOfCooksPerHour = `${cookiesPerHour(custPerHour)} cookies`;
//   // },
//   hourlyCookieSales: []
// }

// //location object
// const lima = {
//   location: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookSale: 4.6,
//   custPerHour: function(){
//     this.numberOfCustPerHour = _randomNum(2, 16)
//     return this.numberOfCustPerHour;

    
//   },
//   // cooksPerHour: function(){
//   //   this.numberOfCooksPerHour = `${cookiesPerHour(custPerHour)} cookies`;
//   // },
//   hourlyCookieSales: []
// }

// //random customer number generator, takes inputs of min and max customers per hour, returns the generated number
// function _randomNum(min, max){
//   let num = Math.floor(Math.random()*(max-min) + min);

//   return num;
// }

// // array list of locations 
// const locationList = [seattle, tokyo, dubai, paris, lima];



// // calculate the cookies consumed per hour from the inputed average amount of cookies and the number of customers
// function cookiesPerHour(avgCookies, numOfCustomers){
//   let cookies = avgCookies*numOfCustomers;
  
//   return cookies;
// }

// //outputs the code to the html
// function renderNumbers(hours, locationList){
//   let total = 0;
  
//   for(let i = 0; i < locationList.length; i++){
//     let currentCity = locationList[i];
//     const divElement = document.createElement('div');
//     locationsDiv.appendChild(divElement);
//     const locationElement = document.createElement('h3');
//     divElement.appendChild(locationElement);
//     divElement.textContent = currentCity.location;
//     const ulElement = document.createElement('ul');
//     divElement.appendChild(ulElement);


//     for(let j = 0; j < currentCity.hourlyCookieSales[j]; j++){
//       //let sales = currentCity.hourlyCookieSales[j];
//       const text = `${hours[j]}: ${currentCity.hourlyCookieSales[j]} cookies`;
//       const liElement = document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent = text;
//       total += currentCity.hourlyCookieSales[j];
//     }
//     const totalStr = `Total: ${total} cookies`;
//     const totalElement = document.createElement('li');
//     ulElement.appendChild(totalElement);
//     totalElement.textContent = totalStr;
//   }
//   //return total;
// }

// //seattle.custPerHour();
// getHourlySales();
// renderNumbers(hours, locationList);
// // console.log(seattle);
// // console.log(lima);
// //console.log(_randomNum(23, 65));