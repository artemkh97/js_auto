// Functions 

// function declaration
function simpleSum(a: number, b: number) {
	console.log(a + b)
}

// function expression
let anotherSimpleSum = function(a: number, b: number) {
	console.log(a + b)
}


// arrow funcitons
let yetAnotherSimpleSum = (a: number, b: number) => {    
  return a+b
};

let sum = (a: number, b: number) => a + b




// callback functions
const arr1: number[] = [1, 2, 3, -1, 0, 10];

// filter an array with default js function
const res = arr1.filter(function (val) {
    return val > 0;
});

const res2 = arr.filter((val) => val > 0);

// create an example how filter works under the hood
// the main concept to understand here - how to pass 1 function to another 
function filter(arr: any, predicate: any) {
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
const filterFunction = (val: any) => val > 0; // true / false

const filtered = filter(arr, filterFunction);

console.log(filtered);









