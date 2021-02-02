/*
Variables and data types
*/
// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Doe';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'teacher';
// console.log(job);


/***************
*Variables mutation and type coercion
*/

var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

// Basic Operators
var year, yearJohn, yearMark;
var now = 2018;
var ageJohn = 28;
var ageMark = 33;

// Math Operators
var yearJohn = now - 28;
var yearMark = now - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageMark);
console.log(typeof 'Mark is older than john');
var x;
console.log(x);

// operator precedence
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average)

// Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More Operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);


// Coding Challenge
var markHeight = 10;
var johnHeight = 20;

var markMass = 80;
var johnMass = 60;

// Mark BMI
var markBMI = markMass / (markHeight * markHeight);
console.log(markBMI);

// John BMI
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);

var isMarkGreaterThan = markBMI > johnBMI;
console.log('Is Mark\'s BMI higher than John\'s?' + isMarkGreaterThan);