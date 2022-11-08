//Home Assignment: Variables and Datatypes Task #2

let client_name = "Sam";                                             //client name
let current_savings = 7500;                                          //current savings amount
let savings_goal = 10000;                                            // current Savings Goal

let current_progress = current_savings / savings_goal;               //current progress towards Savings Goal in percentage
let remaining_progress = (1-current_progress)*100;                   //remaining progress towards Savings Goal in percentage

//------------------------------------------------------------------
function converted_goal (){                                          //start of function to for conversion (self experiment)
let Str_savings_goal = savings_goal + "";                            //converts saving_goal into string
let savings_strlen = Str_savings_goal.length;                         //get the number of characters/numbers in the Savings Goal
let savings_Final = "";                                              //gets the actual amount of Savings Goal with proper punctation (,)
let temp_saving_str = "";                                            //temporary storage for each number in Saving Goal in reverse order
let i = 0;                                                           //tracks the current index
let cnt=1;                                                           //detects whether to put a coma in any amount
for(i=Str_savings_goal.length-1;i>=0;i--,cnt++){ 
    temp_saving_str += Str_savings_goal.charAt(i);                   //gets the each number in Savings Goal in reverse order
      if (cnt==3){                                                   //detects coma insertions (every 3 digits)
        temp_saving_str += ",";                                      //puts coma
        cnt=0;                                                       //resets the counter to zero
    } 
         }
     if (temp_saving_str.charAt(temp_saving_str.length-1) == ",") {  //removes excess coma at the end of the string
        temp_saving_str = temp_saving_str.slice(0,-1);
        }
           for(i=temp_saving_str.length-1;i>=0;i--){                 //reverts the string back into proper order (now with coma)
            savings_Final+= temp_saving_str.charAt(i); 
           }
return savings_Final;
}                                                                    //end of function
//------------------------------------------------------------------

console.log(`Thank you for your discipline and hardwork, ${client_name}! 
You are now ${remaining_progress}% away from your goal of saving ₱${converted_goal()}.`); //program output