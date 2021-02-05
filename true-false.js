
// If the value of a variable is any number other than 0, then condition is always true.

const age1 = -4;
if(age1){
    console.log("condition is true");
}                                           //condition is true
else{
    console.log("condition is false");
}

const age2 = 0; 
if(age2){
    console.log("condition is true");
}                                           //condition is false.
else{
    console.log("condition is false");
}

const age3 = 4;
if(age3 > 0){
    console.log("condition is true");
}                                           //condition is true.
else{
    console.log("condition is false");
}

// Any string other than empty one will be always true.

const name1 = "Nuzhat";
if(name1.length > 0 ){
    console.log("condition is true");
}                                           
else{
    console.log("condition is false");
}

const name2 = "Ishrat";
if(name2.length){
    console.log("condition is true");
}                                           
else{
    console.log("condition is false");
}

const name3 = ""; //Empty string
if(name3){
    console.log("condition is true");
}                                           
else{
    console.log("condition is false");
}

const name4 = " ";  //there is a white space in the string and it's considered as a string. 
if(name4){
    console.log("condition is true");
}                                           
else{
    console.log("condition is false");
}

const name5 = "0"; //it's not 0 as it's inside "", hence its a string. 
if(name5){
    console.log("condition is true");
}                                           
else{
    console.log("condition is false");
}

// If the value of a variable undefined, then it is always false. 

let price1;
console.log(price1);
if(price1){
    console.log("condition is true");
}                                           
else{
    console.log("condition is false");
}

let price2 = null;        //null means negative; false
console.log(price2);
if(price2){
    console.log("condition is true");
}                                           
else{
    console.log("condition is false");
}

let price3 = NaN;      //NaN = Not a Number; false
console.log(price3);
if(price3){
    console.log("condition is true");
}                                           
else{
    console.log("condition is false");
}

let price4 = [];         //the value is defined as an object, true
console.log(price4);
if(price4){
    console.log("condition is true");
}                                           
else{
    console.log("condition is false");
}

let price5 = false;
console.log(price5);
if(price5){
    console.log("condition is true");
}                                           
else{
    console.log("condition is false");
}

let price6 = 0;    //condition is already set as true if it is equal to 0.

if(price6 || price6 == 0){
    console.log("condition is true");
}                                           
else{
    console.log("condition is false");
}

let price7 = 12;   // when first condition is fulfilled, it stops there. 

if(price7 || price7 == 0){
    console.log("condition is true");
}                                           
else{
    console.log("condition is false");
}

