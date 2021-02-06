
/* array.slice(from, until); 
From- slice the array starting from an element index
Until- slice the array until another element index  */

const nums = [1, 2, 3, 4, 5, 6 , 7 , 8];
console.log(nums.slice(2,5));

console.log(nums.splice(2,3, 77)); //inserting 77 in the array
console.log(nums);

console.log(nums.join(","));

const number = [80, 82, 84, 86, 88, 90];
console.log(number.slice(2,4));

console.log(number.splice (2,4, 92, 95));
console.log(number);

console.log(number.join(","));