// In JS, we have a function scope and a block scope
{{{}}} // this is block scope, func scope starts when function created

function hello(name) {
	var greeting  = "Hello"; // var cannot be accessed outside the function scope
	return greeting + ' ' + name;
}
console.log(hello("Node")); // Hello Node
console.log(greeting) // Reference error

{
	var scopeVariable = "42";
	{
		var nestedScopeVariable = "37";
	}
}
console.log(scopeVariable); // 42
console.log(nestedScopeVariable); // 37

// var can be accessed outside a block scope but not func scope
________________________________________________________________________________

// variables defined with let are accessible only inside the scope, not outside, hence we should use them!

// const is also like let, but its value cannot be changed
// properties of const object can be changed though

// const are used when importing something from a library so that it can't get changed, or defining functions

const fs = require('fs');
const square = function(a){
	return a*a;
}

// arrow function
const square = (a) => {
	return a*a;
}

const s = (a) => a*a; // used in map reduce and functional programming
[1,2,3].map(a => a*a); // [1,4,9]

//another way to define function
let util = {
	square(a) {
		return a*a;
	}
}
util.square(3);
________________________________________________________________________________
// this keyword is closed over their parent when using arrow func
exports.i = "am exports";
console.log(this); // {i: "am exports"}

let util = {
	f1: function(){
		console.log(this);
	}
	f2: () => {
		console.log(this);
	}
}
util.f1(); // { f1: [Function: f1], f2: [Function: f2] }
util.f2(); // {i: "am exports" }
// this functionality is a huge benefit working with closure
________________________________________________________________________________

//destructuring
const X = {
	PI,
	sum,
	square
};
const { PI, sum, square } = X;

// destructuring in functions
const toDecimal = ({base,number}) => {
	return parseInt(number, base);
};
console.log(
	toDecimal({base: 2, number: 101})
	); // 5

// we can also give default values to function arguments while destructuring
const toDecimal = ({base = 2,number}) => {
	return parseInt(number, base);
};

// using rest parameters to capture the remaining parameters
// helpful working with immutable objects
const toDecimal = ({base, ...numbers}) => {
	console.log(numbers); // [101, 111, 1010]
	console.log([0, ...numbers]); // [0, 101, 111, 1010]
	return numbers.map(number => parseInt(number, base));
};
console.log(
	toDecimal(2, 101, 111, 1010)
	); // [5, 7, 10]
________________________________________________________________________________

// class syntax commonly used in react
class Footer extends Component {
	constructor(props){
		super(props);
		// ..
	}
}

________________________________________________________________________________
// shift() and unshift()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple"); // it creates a new array, it adds these elements at the start
// ["Lemon","Pineapple","Banana", "Orange", "Apple", "Mango"]

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift(); // removes the first element of array, it changes the original array
// ["Orange", "Apple", "Mango"]

________________________________________________________________________________
// slice()

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);  // returns selected elements in an array, as a new array.
// start is inclusive, end is not

________________________________________________________________________________
// map()

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt); // creates a new array from calling a function for every array element.

________________________________________________________________________________
// reduce()

const numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);   // 100 ayega answer me

function myFunc(total, num) {
  return total - num;
} 

// executes a reducer function for each value of an array.
// returns a single value which is the function's accumulated result.

______________________________________________________________________________________

// filter()
filter((element) => { ... } )
filter((element, index) => { ... } )
filter((element, index, array) => { ... } )

// Callback function
filter(callbackFn)
filter(callbackFn, thisArg)

// Inline callback function
filter(function(element) { ... })
filter(function(element, index) { ... })
filter(function(element, index, array){ ... })
filter(function(element, index, array) { ... }, thisArg)