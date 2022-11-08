//Home Assignment: String Methods Task #1
function checkForUpperCase(text){
var newText = text.replace(/[^A-Za-z]/g, '');
var upperString = newText.toUpperCase();
const textLength = upperString.length;
for(i=0;i<textLength;i++){
if(newText[i] == upperString[i]){
return console.log("This first letter in uppercase is: "+ upperString[i]);}
}
console.log("There are no uppercases in the text '"+ text +"'");}

checkForUpperCase("there is a storm coming to the East of the Philippines");