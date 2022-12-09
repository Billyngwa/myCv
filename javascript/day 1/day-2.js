
function myGame(){
    var newTitle = "myGame";
    window.document.title = newTitle;
    var questionOne = ("Who is the most influencial?\n a). Bill Gates\n b). Elon Musk \nc). Donald Trump\nd). Nelson Mandela");
    var questionTwo = ("Who goes by the name Broda Shaggi\n a). ojuwale Borun\n b). Mark Tyson \nc). Emmanuel Babu\nd). Larry Pearl?");
    var questionThree = ("When did queen Elizabeth die?\n a). 12th March 2020\n b). 8th september 2022 \nc). 17th September 2022\nd). None of the answers are correct");
    var questionFour = ("\"i have a dream i have a dream\"\n a). Martin Luther king Junior\n b). Martin luter King .Jr\nc). Abraham Lincoln\nd). Nelson Mandela");
    var questionFive = ("who is the president of U.N.O?\n a). Nshom Shallman\n b). Adams Ban\nc). Abdulla Shahid\nd). Csaba Korosi");
    var questionSix = ("give the full meaning of SASS? \n a). Syntactically Awesome styling Sheet\n b). Synchronous and Assynchronous Styling Sheet \nc). Simple Assynchronous Styling Sheet\nd). Scalable Assynchronous styling sheet");
    var questionSeven = ("what aspect of javascript makes it object-based?\n a). Everything in Javascript is an object \n b). Javascript was created uniquely for objects \nc). Javascript uses objects to resolve problems\nd). Javscript has in-built methods which are considered as objects");
    var questionEight = ("Give the difference between object-based programming and structural programming ?");

    var answerOne = "b"||"B"||"Elon Musk";
    var answerTwo = "d"||"D"||"Larry Pearl";
    var answerThree = "c"||"C"||"8th september 2022";
    var answerFour = "a"||"A"||"Martin Luther king Junior";
    var answerFive = "d"||"D"||"Csaba Korosi";
    var answerSix = "a"||"A"||"Syntactically Awesome styling Sheet";
    var answerSeven = "a"||"A"||" Everything in Javascript is an object";
    var answerEight = "";
    failcount = 0;
    userAnswer = false;
    trials = 7;
    correctAnswers = 8;
    wrongAnswers = 0;
    var gameStatus = 'GAME OVER';


    for(;1;){
        userAnswer = prompt(questionOne);
        if(userAnswer != answerOne){
            failcount++;
            trials--;
            wrongAnswers++;
            alert('wrong Answer '+ 'You have '+trials+' trials left');
            if (failcount>=7) {
                alert(gameStatus);
                break;
            }
        }
        userAnswer = prompt(questionTwo);
        if(userAnswer != answerTwo){
            failcount++;
            trials--;
            wrongAnswers++;
            alert('wrong Answer '+ 'You have '+trials+' trials left');
            if (failcount>=7) {
                alert(gameStatus);
                break;
            }
        }
        userAnswer = prompt(questionThree);
        if(userAnswer != answerThree){
            failcount++;
            trials--;
            wrongAnswers++;
            alert('wrong Answer '+ 'You have '+trials+' trials left');
            if (failcount>=7) {
                alert(gameStatus);
                break;
            }
        }
        userAnswer = prompt(questionFour);
        if(userAnswer != answerFour){
            failcount++;
            trials--;
            wrongAnswers++;
            alert('wrong Answer '+ 'You have '+trials+' trials left');
            if (failcount>=7) {
                alert(gameStatus);
                break;
            }
        }
        userAnswer = prompt(questionFive);
        if(userAnswer != answerFive){
            failcount++;
            trials--;
            wrongAnswers++;
            alert('wrong Answer '+ 'You have '+trials+' trials left');
            if (failcount>=7) {
                alert(gameStatus);
                break;
            }
        }
        userAnswer = prompt(questionSix);
        if(userAnswer != answerSix){
            failcount++;
            trials--;
            wrongAnswers++;
            alert('wrong Answer '+ 'You have '+trials+' trials left');
            if (failcount>=7) {
                alert(gameStatus);
                break;
            }
        }
        userAnswer = prompt(questionSeven);
        if(userAnswer != answerSeven){
            failcount++;
            trials--;
            wrongAnswers++;
            alert('wrong Answer '+ 'You have '+trials+' trials left');
            if (failcount>=7) {
                alert(gameStatus);
                break;
            }
        }
        userAnswer = prompt(questionEight);
        if(userAnswer != answerEight){
            failcount++;
            trials--;
            wrongAnswers++;
            alert('wrong Answer '+ 'You have '+trials+' trials left');
            if (failcount>=7) {
                alert(gameStatus);
                break;
            }
        }
        alert('You scored '+(correctAnswers-wrongAnswers)+' points');
        break;
    }
}
function greenLight(){
    var myArray = [1,2,3,4,5,7,8,9,10];
    var head = 0;
    var tail = myArray.length-1;
}

//javascript objects

var obj1 = {}; // object literal function
var obj2 = {
    name:'kambang',
    age:12,
    isMarried:true,
    languages: ['Eng','Fr'],
    schools:{
        highSchool:'Douala',
    }
};
// objects are mutable and versaltile
// objects are REFFERENCE types



// access properties of an object
// Dot (.) notation

console.log('this is the name prop of obj2 ', obj2.name);
// you can use this dot notation to acces all properties of an object except lfor some properties


// square bracket notation

console.log('this is the age prop of obj2 ', obj2['age']);

//use cases that permit us to the square bracket notation
// when properties or key value pairs contain hyphens, or are seperated by space

var obj3 = {
    'first-name':'kambang',
    'place of birth':'somewhere',
    'max-height':40,
};

console.log('this is a test',obj3['first-name']);

var obj4 = {
    man2: 'billy',
    man:'the man',
    5:'randy',
};

console.log('this is a unique test ', obj4['ma'+'n']);

// Refference Types

var obj5 = {
    name:'Billy',
    age:12,
};
var obj6 = obj5;
obj6.name = 'randy';

console.log(obj5);
console.log(obj6);

// object Methods 
var staticObject = {
    name:'Aimee',
    age:22,
};
Object.freeze(staticObject); // object becomes immutable that is it can no longer be changed
staticObject.age = 15;

console.log('this trial verion of staticobject', staticObject);

// keys method  return the keys of an object as an array of string

let staticKeys = Object.keys(staticObject);
console.log('staticKeys =  ', staticKeys);

// returns the values of an object
let staticValues = Object.values(staticObject);
console.log('staticValues =  ', staticValues);


//object entries 
let staticEntries = Object.entries(staticObject); // loops
console.log('this is '+staticEntries);

/*Exercise 1. Write a program that displays all 
the prop keys of the object that are multiples of 5*/

var exer1 = {
    a:25,
    b:3,
    c:4,
    j:73,
    z:60,
    y:75,
    q:7,
};
// var keyPairs = Object.keys(exer1);
// var valuePairs = Object.values(exer1);
// var mulltiple5 = [];
// mulltiple5 = [keyPairs,valuePairs];
// var i;
// for(i=0;i<valuePairs.length;i++){
//     if(mulltiple5[1][i]%5==0){
//         console.log(mulltiple5[0][i],mulltiple5[1][i]);
//     }
// }


