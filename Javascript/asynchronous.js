/* Asynchronous code allows the program to be executed immediately 
where the synchronous code will block further execution of the remaining code until it finishes the current one.

In synchronous operations tasks are performed one at a time and only when one is completed, the following is unblocked. 
In other words, you need to wait for a task to finish to move to the next one. In asynchronous operations, on the other hand, 
you can move to another task before the previous one finishes
*/

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum); // callback function called, we can pass any function as an argument
}

myCalculator(5, 5, myDisplayer); // in this way, myDisplayer will only be called when required

_________________________________________________________________________________________________________________________

// Promises
// Promises are used to handle asynchronous operations in JavaScript.
// Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code

// A Promise has four states: 
// fulfilled: Action related to the promise succeeded
// rejected: Action related to the promise failed
// pending: Promise is still pending i.e not fulfilled or rejected yet
// settled: Promise has fulfilled or rejected


// Promise constructor takes only one argument i.e. callback function and that takes two args, resolve and reject functions


var promise = new Promise(function(resolve, reject) {
  const x = "geeksforgeeks";
  const y = "geeksforgeeks"
  if(x === y) {
    resolve();
  } else {
    reject();
  }
});
   
promise.
    then(function () {  // then() is invoked when a promise is either resolved or rejected. 
        console.log('Success, You are a GEEK');
    }).
    catch(function () {
        console.log('Some error has occurred');
    });


// syntax
// then() takes two args, second function to handle rejected promise is optional, better way is to use catch()
 .then(function(result){
        //handle success
    }, function(error){
        //handle error
    })

_________________________________________________________________________________________________________________________

// async makes a function return a Promise
// await makes a function wait for a Promise

// waiting for a file code
async function getFile() {
  let myPromise = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

getFile();

// The purpose of async / await is to simplify the syntax necessary to consume promise-based APIs.