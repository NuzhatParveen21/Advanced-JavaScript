
let name;   // name is not defined here
console.log(name);

//if any function doesn't return explicitly, then the result is undefined.
function add1(num1, num2) {
    console.log(num1 + num2);
    return;         //what will be returned is not mentioned, hence its undefined
}
const result1 = add1(15, 82);
console.log(result1);

// if the parameter doesn't pass, it's undefined
function add2(num1, num2) {
    console.log(num1, num2);
}

const result2 = add2(13);
console.log(result2);

const teacher = { name: "ruma majumder", phone: 017118532};
console.log(teacher.student);         //property "student" is not defined in the object

//  In order to check if the object has any property, we have to use if-else condition. 

let fun = undefined;
console.log(fun);

let ages = [2, 5, 8];
console.log(ages[11]);

// null = non-existent

function doSomething(x, y = 4) {
    console.log(y);

}
doSomething(3, 2);