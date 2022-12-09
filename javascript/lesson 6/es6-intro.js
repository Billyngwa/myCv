// ES6?
// ECMA2015
// Variable declaration 
// var is dead

let userName = "kambang";
const age = 34;

// template strings (see details on DOM manipulation)

let display = `${userName} was ${age} years old in ${2022-1}`;
console.log(display);


// functions

/* To declare a function, we can use the following methods
1) Function literal notation 
2) Function Expression

            Types of functions
    Named Functions
    Anonymous functions
    arrow functions
    
*/
// 1) Named Function: They are functions that have names
function sayHi(){
    // alert("Hello");
    // console.log("How are you?");
    // prompt("whats your name?");
}
sayHi();

// anonymous function/ function expression 
const sayHello = function(){
    // alert("Hello from sayHello");
    // console.log("sayHello How are you?");
    // prompt("sayHello whats your name?");
}
sayHello();

/*
Functions declared lusing the function literal notation can be invoked before the function while 
those that are declared using the func expression cannot
*/

// Arrow functions (es6)
// all arrow functions are kind of anonymous
// Especially used when defining callback functions

const calculateAge = () => {}
// the bracket is used to hold parameters of the function.
// for instances where we dont pass in any parameters, we remove the brackets
// if only one parameter is used, we can just write it and remove the bracket
// if the block of code is not much you can exclude the curly braces
const calculateMyAge = age => age*2;
// console.log();

function isEven(num){
    // if(typeof num !== "number"){
    //     throw("behaviour encountered");
    // }
    if(num%2==0){
        return true;
    }
    return false;
}
alert(isEven(7));

// creating a function that gets the middle element of an array
 const getMidElement = (array) => {
    let oddMiddle = ((array.length+1)/2)-1;
    let evenMiddle = array.length/2;
    if(isEven(array)){
        return{
            element:array[evenMiddle],
            index:evenMiddle
        }
    }
    return{
        element:array[oddMiddle],
        index:oddMiddle
    }
 }
 let myArray = [7,0,9,8,7,6,4,8,3,2];
 console.log('this is the ',getMidElement(myArray));