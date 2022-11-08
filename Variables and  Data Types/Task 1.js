//Home Assignment: Variables and Datatypes Task #1

let Cal_Per_Hour = 225*2;                      //calories burnt per 30 minutes
let HoursPerDay = 0.5;                           //number of hours spent on cycling per day
let Cal_Per_day =  Cal_Per_Hour * HoursPerDay;   //actual calories burnt per day
let DaysPerWeek = 7;                             //number of days spent on cycling per week
let Cal_Per_Week = Cal_Per_day * DaysPerWeek;       //total calories burnt in requested number of weeks
let Cal_Per_15D = Cal_Per_day * 15
console.log(`Great work, Sam! After ${HoursPerDay} hours of running everyday for a week, you may lose a total of ${Cal_Per_Week} calories.`);
console.log(`Great work, Sam! After ${HoursPerDay} hours of running everyday for a 15 days, you may lose a total of ${Cal_Per_15D} calories.`);

/*NOTE: I'm sorry I had to print two outputs as the example in the website was quite confusing. The sentence mentioned "in a week".
        But the total calories shown was for 15 days. Hence I printed the output for one week(7days) and for the 15 days.*/