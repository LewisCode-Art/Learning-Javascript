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

var isMarkGreaterThan = markBMI>johnBMI;
console.log('Is Mark\'s BMI higher than John\'s?' + isMarkGreaterThan);