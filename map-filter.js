const numbers1 = [3, 5, 7, 9, 11, 13];

const square = [];   //Declare of Array 
for (let i = 0; i < numbers1.length; i++) {
    const element = numbers1[i];
    const result = element * element;  
    square.push(result);   //Show result in the array
}
console.log(square); //when a variable is declared inside the function, it cant be accessed from outside. 


const numbers2 = [2, 4 , 6 , 8, 10, 12];

const square2 = numbers2.map(x => x * x); //map transform elements in an array
const largeNum = numbers2.filter (x => x >5); //filter returns the array with less items
const specific = numbers2.find(x => x > 5); //find returns the first item in the array that fulfills the condition

console.log (square2);
console.log(largeNum);
console.log(specific);

function square2 (element){
    return element * element
}

// Map is applied to array only and the output can be shown in the array as well. 
// When a function is passed inside the map, that function can have 3 parameters- element, index and array.

// numbers2.map(function(element){
//     console.log(element);
// })

// const result2 = numbers2.map(function(element){
//     return element * element 
// })

