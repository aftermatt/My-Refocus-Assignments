//Home Assignment: Closures and Callbacks Task #1

function createBankAccount(name){
let bal=0;
console.log(`\nCongratualtions ${name}! You have successfully created a new account with current balance of ₱${bal}.`);


function depositAmount(amount){
bal+= amount;
return "You have deposited an amount of ₱"+ amount +". Your current balance is ₱"+ bal +".";
}

function withdrawAmount(amount){
if (amount>bal){
return "WITHDRAWAL ERROR: Your current balance is less than ₱"+ amount + "!";
}
else{
bal-= amount;
return "You have withdrawn an amount of ₱"+amount+". Your current balance is ₱"+ bal +".";
}
}
   return {depositAmount,withdrawAmount};
} 

const createAccount = createBankAccount("Matt");
const makeDeposit = createAccount.depositAmount(500);
const makeWithdrawal = createAccount.withdrawAmount(175);
console.log(makeDeposit);
console.log(makeWithdrawal);

