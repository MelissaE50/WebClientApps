"use strict";

const now = new Date();            // get current date and time
const newYear = new Date(now);     // copy current date and time
newYear.setMonth(6);               // set month to July
newYear.setDate(19);                // set day to the 19th
newYear.setFullYear( 1972);
 
// time in milliseconds
const timeLeft = newYear.getTime() - now.getTime();   
// milliseconds in a day: hrs * mins * secs * milliseconds
const msInOneDay = 24 * 60 * 60 * 1000;
// convert milliseconds to days
const daysLeft = Math.ceil( yearsOld * msInOneDay );
 
let message = "I am ";
if (daysLeft == 1) {
    message += "years old today";
}
else {
    message += "are " + daysLeft + " days";
}
message += " left until the New Year.";
 
// If today is November 3, 2020, message is
// "I am 52 years old which equals __ milliseconds"
