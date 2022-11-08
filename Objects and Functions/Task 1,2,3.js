//Home Assignment: Objects and Functions Task 1,2, and 3
var NoOfUsers = 0;
const UserAccount = {
    "bankAccount" : {
        "bankAccountID": function generateID(){NoOfUsers+=1; return NoOfUsers;},
        "accountNumber": "0000001",
        "credentials" : ["popo","matt123","1234"],
        "balance" : 500,
        "createdAt": "11/06/2022"    },
    "debitCard" : "0123456789",
    "firstName" : "Matt",
    "lastName" : "Laguinday",
    "birthDate" : "01/01/1992",
    "validID" : ["Driver's License","055005" ],
    "address" : "Canlubang, Calamba, Laguna"
}


function getBankAccountDetails (username,password){
if (username == UserAccount.bankAccount.credentials[0] && password == UserAccount.bankAccount.credentials[1] ){
    console.log("Account ID: "+ UserAccount.bankAccount.bankAccountID());
    console.log("Account Number: "+ UserAccount.bankAccount.accountNumber);
    console.log("Debit Card: "+ UserAccount.debitCard);
    console.log("Date Created: "+ UserAccount.bankAccount.createdAt);
    console.log("Name: "+ UserAccount.firstName + " " + UserAccount.lastName);
    console.log("Date of Birth: "+ UserAccount.birthDate);
    console.log("Address: "+ UserAccount.address);
    console.log("Valid ID: "+ UserAccount.validID[0] + " (" + UserAccount.validID[1] + ")");
    console.log("Username: "+ UserAccount.bankAccount.credentials[0]);
    console.log("Balance: "+ UserAccount.bankAccount.balance);
    console.log("\n");
}
else{
    console.log("Incorrect Username or Password!\n")
}
}

function withdrawMoney (username,password,amount){
    
      if (username == UserAccount.bankAccount.credentials[0] && password == UserAccount.bankAccount.credentials[1]){
      if(UserAccount.bankAccount.accountNumber == "0000001"){
        if (amount<=UserAccount.bankAccount.balance){
            UserAccount.bankAccount.balance -= amount;
            console.log("You have successfully withdrawn ₱"+ amount +"! Your current balance is ₱"+ UserAccount.bankAccount.balance +".\n")
          }
          else{
            console.log("Your current balance is below  ₱"+ amount +". Withdrawal failed!\n")
          }
       }
       else{
        console.log("Invalid Bank Account! Withdrawal failed!\n")
       }
    }
    else{
        console.log("Incorrect Username or Password! Withdrawal failed!\n")
    }
       }

function depositMoney(accNo,amount){
if(UserAccount.bankAccount.accountNumber == accNo){
    UserAccount.bankAccount.balance += amount;
    console.log("You have succefully deposited an amount of ₱"+ amount +" into your bank account! Your current balance is ₱"+ UserAccount.bankAccount.balance +".\n")
}

}

getBankAccountDetails("popo","matt123");
depositMoney("0000001",200);
withdrawMoney("popo","matt123",150);
