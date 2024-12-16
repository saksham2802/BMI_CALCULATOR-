
var height = prompt("Enter Your height in cm ");
var weight = prompt("Enter Your weight in kg ");

height = parseFloat(height);
weight = parseFloat(weight);

height = height / 100;

console.log("Your weight is " + weight + " kg");
console.log("Your height is " + height + " meters");

var bmi_check = bmi_index(height, weight);
console.log("Your BMI is: " + bmi_check.toFixed(2)); // To show BMI up to 2 decimal places

function bmi_index(height, weight) {
    var bmi = weight / Math.pow(height, 2);
    return bmi;
}