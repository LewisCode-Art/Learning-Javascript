// If/Else Statement

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon');
}

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

if (markBMI > johnBMI) {
    console.log('Is Mark\'s BMI higher than John\'s');
} else {
    console.log('Is John\'s BMI higher than John\'s');
}

// Boolean Logic
var firstName = 'John';
var age = 26;

if (age < 13) {
    console.log(firstName + ' is a boy.');
}
else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
}
else {
    console.log(firstName + ' is a man.');
}

// Truthy and falsey values

// falsey values: undefined, null, 0, ', NaN
// Truthy values : Not falsy values

var height;
height = 23;

if (height || height === 0) {
    console.log('the variable is defined');
} else {
    console.log('the variable NOT is defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
}

// coding challenge
var team1 = 'Team John';
var team2 = 'Team Mike';

var averageTeamJohn, averageTeamMike;

averageTeamJohn = (89 + 120 + 103) / 3;
averageTeamMike = (116 + 94 + 123) / 3;

console.log(averageTeamJohn);
console.log(averageTeamMike);

if (averageTeamJohn > averageTeamMike) {
    console.log(team1 + ' won with an average score of ' + averageTeamJohn);
} else {
    console.log(team2 + ' won with an average score of ' + averageTeamMike);
}

// Functions
function calculateAge(birthYear) {
    return 2021 - birthYear;
}

var ageJohn = calculateAge(1993);
var ageMike = calculateAge(1994);
var ageJane = calculateAge(1996);

console.log(ageJohn, ageMike, ageJane);

function yearUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + 'is already retired.')
    }
}

yearUntilRetirement(1993, 'Lewis');
yearUntilRetirement(1994, 'Charles');
yearUntilRetirement(1996, 'Godsway');


// function statements and expressions

// Below is a function decleration
// function whatDoYouDo(job, firstName) {}


// function expression
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code'

        case 'designer':
            return firstName + ' designs beautiful websites'

        case 'driver':
            return firstName + ' drives a cab in lisbon.'

        default:
            return firstName + ' does something else'
    }

}

console.log(whatDoYouDo('teacher', 'Larbo'));
console.log(whatDoYouDo('designer', 'Lewis'));
console.log(whatDoYouDo('driver', 'Mark'));
console.log(whatDoYouDo('fisherman', 'Shuwa'));


// Arrays********************

var names =['john', 'mark','jane'];
var years = new Array();