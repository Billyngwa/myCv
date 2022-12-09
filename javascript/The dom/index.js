/**
 * The DOM (The document object model)
 * 
 * DOM functions => These are functions accessed using the document object
 * The document object is a global property of the global window object (window)
 * 
 * 
 */
//getElementById => this function returns an HTMLElement
let body = window.document.getElementById('body-container');
console.log(typeof body);

// getElementsByClassname
let inputs = document.getElementsByClassName('form-controls');
console.log(inputs);

//querySelector => this returns a single DOM NODE .it returns the first element it will find
let newBody = document.querySelector('#body-container');

// //querySelectorAll this returns a nodelist of all elements that match the pattern specified

let newInputs = document.querySelectorAll('input.form-controls');

// manipulating element text in js
let h1Ele = document.querySelector('h1#title-element');

h1Ele.innerHTML = "Billy's GOAT sign up Form";
h1Ele.textContent = "Randys form";

h1Ele.style.textAlign = 'center';
h1Ele.setAttribute('id','boo');
h1Ele.setAttribute('class','badguy');
h1Ele.classList.add('bufallo');

// How to dynamically add and create elements to the DOM
let startBtn = window.document.createElement('button');
let stopBtn = window.document.createElement('button');
startBtn.textContent = 'Start';
stopBtn.textContent = 'Stop';
startBtn.classList.add('controlBtns');
stopBtn.classList.add('controlBtns');
startBtn.setAttribute('id','startBtn');
stopBtn.setAttribute('id','stopBtn');
let formContainer = document.querySelector('form.form-container');
formContainer.appendChild(startBtn);
formContainer.appendChild(stopBtn);


// DOM events
// 1) AddEventListener method
// The AddEventListener is a method in the dom which receives two parameters. one
// been an even and the other a call back function
window.addEventListener('scroll',(event)=>{
    console.log('bad boy');
});

// getting the input elements
textInput = document.querySelector('input#text-input');
emailInput = document.querySelector('input#email-input');
passwordInput = document.querySelector('input#password-input');

textInput.setAttribute ('placeholder','Enter Username');
emailInput.setAttribute ('placeholder','Enter email');
passwordInput.setAttribute ('placeholder','Enter password');

textInput.addEventListener('keyup', function(event) {
    let val = event.target.value;
   let bob =  localStorage.getItem('start');
   if(bob=='true'){
        if(val == ''){
            h1Ele.textContent = 'No data changed';
        }else{
            h1Ele.textContent = val;
        }
   }

});
passwordInput.addEventListener('keyup', function(event) {
    let val = event.target.value;
    if(val){
        stopBtn.textContent = val;
    }else{
        stopBtn.textContent = 'stop';
    }

});

startBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    localStorage.setItem('start',true);
});
stopBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    localStorage.setItem('start',false);
});