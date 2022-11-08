//Home Assignment: Conditional and Loops Task #1 and #2

var oxygen = 96;                                                //variable declarations
var pulse_rate = 40;

function check_oxygen_lvl(oxygen){                              //start of Oxygen Level Check function
console.log(`Oxygen Level: ${oxygen}`);                         //program output
if (oxygen>=96){
        console.log(`Normal reading.`);                         //program output
}
else if (oxygen===95){
      console.log(`Acceptable to continue home monitoring.`);   //program output
}
else if ((oxygen===93 || oxygen===94)){
console.log(`Seek advice from health professionals.`);          //program output
}
else if (oxygen<=92){
console.log(`Seek urgent medical advice.`);                     //program output
}
else{
console.log(`Invalid readings`);                                //program output
}    
}                                                               //end of function

/*-------------------------------------------------------------------------------------------------------------*/

function check_pulse_rate(pulse_rate){                          //start of Pulse Rate Check function
console.log(`Pulse Rate    : ${pulse_rate}`);                   //program output
if (pulse_rate>=40 && pulse_rate<=100){
        console.log(`Normal reading.`);                         //program output
}
else if (pulse_rate>=101 && pulse_rate<=109){
      console.log(`Acceptable to continue home monitoring.`);   //program output
}
else if (pulse_rate>=110 && pulse_rate<=130){
console.log(`Seek advice from health professionals.`);          //program output
}
else if (pulse_rate>=131){
console.log(`Seek urgent medical advice.`);                     //program output
}
else{
console.log(`Invalid readings`);                                //program output
}    
}                                                               //end of function

check_oxygen_lvl(oxygen);
console.log()
check_pulse_rate(pulse_rate);