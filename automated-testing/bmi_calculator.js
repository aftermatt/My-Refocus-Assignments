//Home Assignment: Git & GitHub Task #2

function calculateBMI(weightInKg,heightInCentimeters){
var heightInMeters = heightInCentimeters/100;
var bmi = weightInKg / Math.pow(heightInMeters,2)
return bmi.toFixed(2);
}
console.log("Your Body Mass Index is: "+ calculateBMI(68,165));
module.exports = calculateBMI;
