// Old way of using var
// var arr = [1, 2, 3, 4];

// Array with "let"
let arr = [1,2,3,4];
console.log(arr[0]);
// Below produces error; can't change assignment of a "const"
// const x = 10;
// x = 5;

// Object (or dictionary)
const student = {
    name:"John",
    email:"j@j.com",
    cohort:"Jun-6"
};

console.log(student.name);
console.log(student["email"]);