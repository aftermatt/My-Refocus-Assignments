//Home Assignment: Recursion and Array Methods Task #1

const arr = ["Web Developer","Refocus","Web Developer","Web Developer","Refocus","Awesome"];
var uniqueWords = [];
const output = {};
var found = 0;
arr.forEach(element => {
const sample =uniqueWords.some(words => {return element == words;});
if (!sample){
    uniqueWords.push(element);
    output.element = 0;
       }
});
delete output.element;
uniqueWords.forEach(words => {
    found = 0;
    arr.forEach(element => {
        if (element == words){
            found+=1;
        }
       });
     output[words] = found;
     });
console.log(output);
