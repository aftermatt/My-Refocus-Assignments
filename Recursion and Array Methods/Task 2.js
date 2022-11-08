//Home Assignment: Recursion and Array Methods Task #2

var InvoiceStack = ["Invoice 008", "Invoice 007", "Invoice 006", "Invoice 005"];
function insertToBottom (newArray) {
    if(InvoiceStack.length == 0){
        InvoiceStack.push(newArray);
    }
    else{
    var ReversedStack = [InvoiceStack.pop()];
    insertToBottom(newArray);
    InvoiceStack.push(ReversedStack);
     }
}

function reverseList () {
var newArray = [];
if (InvoiceStack.length > 0){
        newArray.push(InvoiceStack.pop());
               reverseList();
    insertToBottom(newArray);
}
}

InvoiceStack.push("Invoice 004");
InvoiceStack.push("Invoice 003");
InvoiceStack.push("Invoice 002");
InvoiceStack.push("Invoice 001");

console.log(InvoiceStack.join(" "));
reverseList();
console.log(InvoiceStack.join(" "));

