//Home Assignment: Closures and Callbacks Task #2
var bal = 0;
function createNewAccount (name){
    var current = name;
    console.log(`\nCongratualtions ${name}! You have successfully created a new account with current balance of ₱${bal}.`);
   // return "Congratulations "+ name +"! You have successfully created a new account with current balance of ₱"+bal+".";
   return current;
}

function depositAmount(amount,current){
    bal+= amount;
    console.log("Hi "+ current +"! You have deposited an amount of ₱"+ amount +". Your current balance is ₱"+ bal +".");
    }

    function withdrawAmount(amount,current){
        if (amount>bal){
            console.log("WITHDRAWAL ERROR: Your current balance is less than ₱"+ amount + "!");
        }
        else{
        bal-= amount;
        console.log("Hi "+ current +"! You have withdrawn an amount of ₱"+amount+". Your current balance is ₱"+ bal +".");
        }
        }

const currentUser = createNewAccount("Matt");
depositAmount(500,currentUser);
withdrawAmount(150,currentUser);