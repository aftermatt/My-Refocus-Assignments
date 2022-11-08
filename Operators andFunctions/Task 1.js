//Home Assignment: Operators and Functions Task #1

function CToK(Celsius){                             //Celsius to Kelvin conversion
let kelvin = Celsius + 273.15;                      //formula
return kelvin;                                      //returns value
}

function FToK(fahrenheit){                          //Fahrenheit to Kelvin conversion
let kelvin = ((fahrenheit-32)*0.5555556) + 273.15;  //formula
return kelvin;                                      //returns value
}

console.log(`${CToK(35)}°K`);                              //program output
console.log(`${FToK(32)}°K`);                              //program output
