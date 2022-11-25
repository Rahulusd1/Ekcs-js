/**
 * 1. Create 2 variables and perform their addition, sub, multiply,divide and log it to the console.
 * 
 * 2. Take input from the user using prompt and alert the value inputed.
 * 
 * 3. Take two inputs from the user using prompt and add those two value and log the result to the console
 */

 

var num1 = 10;
var num2 = 20;
var num3 = 2;
var sum = num1 + num2;
var sub = num2 - num3;
var div = num2 / num3;
var mul = num2 * num3;
//console.log(sum);
//console.log(sub);
//console.log(div);
//console.log(mul);


// var input = prompt("Please enter any value");
// alert(input);


// var num1 = Number(prompt('Enter the first number'));
// var num2 = Number(prompt('Enter the second number'));
// var sum = num1 + num2;
// console.log(sum);

var num1 = prompt('Enter the first number');
var num2 = prompt('Enter the second number');
var sum = parseInt((num1) + parseInt(num2));
console.log(sum);
