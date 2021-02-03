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
// Initialize array
var names = ['johnny', 'mark', 'jane'];
var years = new Array(1990, 1993, 1995);

console.log(names[0]);
console.log(names);
console.log('total items in array is ' + names.length);

// mutate array data
names[5] = 'Mary';
names[1] = 'Ben';
names[names.length] = 'Lewis'
console.log(names);

// different data types
var john = ['John', 'Smith', 1990, 'teacher'];

// push to add new item to end of array
john.push('Anita');
john.unshift('Mr.')
console.log(john);

// remove last item
john.pop();
console.log(john);

// remove first item
john.shift();
console.log(john);

console.log(john.indexOf(1990))

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'john is a designer';
console.log(isDesigner);

// coding challenge
function tipCalculator(bill) {
    if (bill < 50) {
        var lessThan50 = 0.2 * bill;
        return lessThan50;
    } else if (bill >= 50 && bill < 200) {
        var btwn50_200 = 0.15 * bill;
        return btwn50_200;
    } else {
        var greaterThan200 = 0.1 * bill;
        return greaterThan200;
    }
}

var newArray = new Array();

newArray.push(tipCalculator(124));
newArray.push(tipCalculator(48));
newArray.push(tipCalculator(268));
console.log(newArray);

function tipTotalCalculator(bill) {
    if (bill < 50) {
        var lessThan50 = (0.2 * bill) + bill;
        return lessThan50;
    } else if (bill >= 50 && bill < 200) {
        var btwn50_200 = (0.15 * bill) + bill;
        return btwn50_200;
    } else {
        var greaterThan200 = (0.1 * bill) + bill;
        return greaterThan200;
    }
}
var totalBill = new Array();
totalBill.push(tipTotalCalculator(124));
totalBill.push(tipTotalCalculator(48));
totalBill.push(tipTotalCalculator(268));
console.log(totalBill);

// Objects and properties
var john = {
    firstName: 'john',
    lastName: 'Doe',
    birthYear: 1990,
    family: ['jane', 'bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john);
console.log(john['lastName']);

john.job = 'designer';
console.log(john);

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);


// Object methods
// ****************************
var lewis = {
    firstName: 'Lewis',
    lastName: 'Doe',
    birthYear: 1993,
    family: ['jane', 'bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function () {
        this.age = 2021 - this.birthYear;
    }
};

lewis.calcAge();
console.log(lewis);


// Coding challenge
// *******************
var marks = {
    fullName: 'Mark smith',
    mass: 230,
    height: 12,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var jonathan = {
    fullName: 'Jonathan wesley',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

marks.calcBMI();
jonathan.calcBMI();
console.log(marks, jonathan);


if (marks.bmi > jonathan.bmi) {
    console.log(marks.fullName + ' has the highest BMI');
} else if (jonathan.bmi > marks.bmi) {
    console.log(jonathan.fullName + ' has the highest BMI');
} else {
    console.log('they have the same bmi');
}

// Loops and Iteration
// ********************************

// for loop
for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}

// var danty = ['Danty', 'Smith', 1990, 'teacher', false, 'blue'];

// for (var i = 0; i < danty.length; i++) {
//     console.log(danty[i]);
// }


// While loop
// var i = 0;
// while (i < danty.length) {
//     console.log(danty[i]);
//     i++;
// }

// continue and break
var danty = ['Danty', 'Smith', 1990, 'teacher', false, 'blue'];

for (var i = 0; i < danty.length; i++) {
    if (typeof danty[i] !== 'string') {
        continue;
    }
    console.log(danty[i]);
}

for (var i = 0; i < danty.length; i++) {
    if (typeof danty[i] !== 'string') {
        break;
    }
    console.log(danty[i]);
}

// reverse loop
for (var i = danty.length - 1; i >= 0; i--) {
    console.log(danty[i]);
}

// coding challenge
var johnFamily = {
    bills: [124, 48, 268, 180, 42],
    tipArray: new Array(),
    totalBill: new Array(),
    calcTip: function () {
        var amount;
        var total;
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                amount = this.bills[i] * 0.2;
                total = this.bills[i] + amount;
                this.tipArray.push(amount);
                this.totalBill.push(total);
            } else if (this.bills[i] > 50 && this.bills < 200) {
                amount = this.bills[i] * 0.15;
                total = this.bills[i] + amount;
                this.tipArray.push(amount);
                this.totalBill.push(total);
            } else if (this.bills[i] > 100) {
                amount = this.bills[i] * 0.1;
                total = this.bills[i] + amount;
                this.tipArray.push(amount);
                this.totalBill.push(total);
            }
        }
    }
}
johnFamily.calcTip();
console.log(johnFamily.tipArray);
console.log(johnFamily.totalBill);