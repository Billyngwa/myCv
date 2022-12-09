// ARRAY HIGHER-ORDER FUNCTIONS
// 1) forEach array higher-order function
//  the forEach higher order function mutates the original array! that is it 
// executes on the original array. This is dangerous when doing functional programming.

let array = [2,4,5,7,9,12,5];
array.forEach(arrayElement => console.log(arrayElement*arrayElement));

// it takes each element in the array and executes the callback function which is like a parameter to the high order function
//  note that the call back function is a function which gets executed after 
// an action is finished

// or when you want to change (mutate) the contents of the original array. 
//  forEach function returns void (undefined);

// Async js or single threaded. (to come after)

// 2) Map higher order function
//  Just like the forEach function, The map function executes a callback function on each
//  item in the array., However, it doesn't mutate the state of the original array.
// It creates a copy of it and uses the copy for its execution. Map returns the
// transformed copy  or copy of the array.

//  all object keys are strings

//  example
let array2 =  [5,9,12,4,8,5];
let squaredArray = array2.map(arrayElement => {return {[arrayElement]: arrayElement*arrayElement}});
console.log(squaredArray);

//  The filter higher order function
// it also executes a call back function on each item in the array.
// This call back function is called a predicate function. This means that the function
//  executes on items that satisfy a particular condition set by the programmer.
// The filter function returns an array of all the items that satisfy the said condition
//  FILTER DOIES NOT MUTATE THE STATE OF THE ORIGINAL ARRAY

// HOW TO USE THE ARRAY FILTER Function

let array3 = [0,5,7,10,6,9,26,45];
//  wew want to get all even numbers from this array
// for(let i = 0; i<array3.length; i++){
//     if(array3[i] % 2 == 0){
//         console.log(array3[i]);
//     }
// }
array3.filter(function(arrayElement){
    let i;
    if(array3[i] % 2 == 0){
        console.log(array3[i]); 
    } 
});

let array4 = [5,9,6,3,7];
let evenNum = array4.find(arrayElement => arrayElement%2==0?evenNum:"not even");


// Array methods
// they are different from array higher order functions in the sense that they perform
// predefined operations on the array and may or may not require any extra parameters
//to get their operations done whereas higher order functions always expect callback functions
//  and can perform custom operations defined by the programmer on the array element.


//  Examples of Array Methods
/*
    1) the push method
    => pushes or inserts a new element at the end of the array
*/ 
let users =  ['Kambang','Ismael','Treasure','Megane'];
users.push('Bale');//this line of code adds Bale as the last item in the array

// 2) pop method
// => it removes the last element in the array
users.pop()//this removes the recently added item (bale) from the array

//  3) Reverse() method
// this reverses the array elements

// search on the following
// join,splice,shift,unshift,sort,includes,concat etc

// map, and reduce




// More es6 features
/**
  Destructuring
 */
let people = [
    {userName:'aimee',age:12,gender:'F'},
    {userName:'bob',age:15,gender:'M'},
    {userName:'bale',age:17,gender:'F'},
]
// let aimee = people[0];
// let lboy = people[1];
// let lbuti = people[2];

let [aimee,lboy,lbuti] = people;
console.log(aimee);

let teams = {
    bayern:true,
    liverpool:false,
    man_city:'best',
    man_united:0
}

// when desctructuring objects, the keys are very important

let {bayern,liverpool} = teams;
console.log(bayern,liverpool);

users = {

}
let newUser = {};
for(let [key, value] of Object.entries(users)){
    newUser[key] = {[value]:true}
}
console.log(newUser);


//  Optional or default parameters
//Write a function that can be used to calculate the area of a circle
function circleArea(r, pi = 3.14){
     return pi*r*r;
}
console.log( circleArea(2));



// working with strings in js
// in js a string can be written with single or double quotes.

let userName = 'juice';
let fruit = "apple";

// he's a good guy
// 'He said "go home"'
let complement = "He's a good guy";
let instruction = 'he said "go home"'

// stings have methods and properties

// 1) length property
console.log(instruction.length);

// 2) split () method
// This method splits a string based on the condition specified. It returns an array
// of the characters of the string

let result = instruction.split('');
console.log(result);

// 3) startWith/endsWith ()
//  These methods check if a string starts or ends with a particular character

// 4) includes 
//  it checks if a character stream exists in a string

let word = 'hello people';
let included = word.includes('bad');
console.log(included);


// Exercise 
// write a function that can be used to reverse a string
function stringReverse(string){
    let revWord  = string.split('');
    let newRevWord = revWord.reverse();
    let joint = newRevWord.join('');
    return joint;
}
console.log(stringReverse('manna')); ;
