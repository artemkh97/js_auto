// Functions 

// function declaration
function simpleSum(a, b) {
	console.log(a + b)
}

// function expression
let simpleSum = function(a, b) {
	console.log(a + b)
}


// arrow funcitons
let simpleSum = (a, b) => {    
  return a+b
};

let sum = (a, b) => a + b




// callback functions
const arr = [1, 2, 3, -1, 0, 10];

// filter an array with default js function
const res = arr.filter(function (val) {
    return val > 0;
});

const res2 = arr.filter((val) => val > 0);

// create an example how filter works under the hood
// the main concept to understand here - how to pass 1 function to another 
function filter(arr, predicate) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        // only here we call function sent in the parameter
        // and apply it to each element
        if (predicate(arr[i]) === true) {
            res.push(arr[i]);
        }
    }

    return res;
}

// it's function that we pass as a parameter
const filterFunction = (val) => val > 0; // true / false

const filtered = filter(arr, filterFunction);

console.log(filtered);









