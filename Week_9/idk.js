let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // [1,2,3,4,5]

// let arr = Array.of(5);
//onsole.log(arr); //[5]

let arr = [1, 2, 3];
arr.push(4);
console.log(arr); //[1,2,3,4]
arr.pop();
console.log(arr); //[1,2,3]
arr.unshift(0);
console.log(arr); //[0,1,2,3]
arr.shift();
console.log(arr); //[1,2,3]

console.log(arr.indexOf(2)); //1
console.log(arr.indexOf(7)); //-1 (not found)

console.log(arr.lastIndexOf(2)); //El primero si hay muchos del mismo

console.log(arr.includes(2)); //checks if an element exists or nah

arr.splice(2,1,10,20);
console.log(arr);

console.log(arr.slice(1,3));

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let combined = arr.concat(arr2);
console.log(combined); //[2,3,4,5,6]

let words = ["Hello", "world"];
console.log(words.join(" ")); //Hello world

let sentence = "JavaScript is fun";
let wordsArray = sentence.split(" "); //"[JavaScript, "is", fun""]

function add(a, b) {
    return a + b;
}

console.log(add(2,3));

const add = (a,b) => a + b;
console.log(add(2,3));

const multiply = (a,b) => {
    console.log( a, b);
    return a * b;
}

console.log(multiply(4,5)); //20

const square = (x) => x * x;
console.log(square(6)); // 36

const greet = () => "Hello, Word!";
console.log(greet()); //Hello Word