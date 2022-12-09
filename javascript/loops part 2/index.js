// while loops
var arr = [2,3,9,0,6,7]; // [7,6,0,9,3,2]
var i = 0;
var newArr = [];
while(i<arr.length){
    newArr[i] = arr[arr.length - (i+1)];
    i++;
}
console.log(newArr);

// the for....in loop
var user = {
    name:"kelly",
    age:23,
    gender:"m",

};
for(information in user){
    console.log(information);
}
// the for....of loop


var scores = [2,3,9,0,6,7];
for(var score of scores){
    console.log(score);
}