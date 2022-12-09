var myArray = [1,2,3,4,5,7,8,9,10];
var i;

alert('initial array is '+myArray);
for(i=0; i<myArray.length; i++){
    myArray[i] = myArray[i]*myArray[i];
}
alert('squared array is '+myArray);