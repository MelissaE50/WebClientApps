"use strict";

let again = "y";

do {
    // prompt user to enter investment amount and loop until user enters a number
    let investment = 0;
    do {
        investment = parseFloat(
            prompt("Enter investment amount as xxxxx.xx", 10000));
    }
    while ( isNaN(investment) || investment <= 0 );

    // prompt user to get interest rate and loop until user enters a number
    let rate = 0;
    do {
        rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
    }
    while ( isNaN(rate)  || rate <= 0 || rate >= 15);

    // prompt user to enter number of years and loop
    let years = 0;
    do {
        years = parseInt(prompt("Enter number of years", 10));
    }
    while ( isNaN(years) || years <= 0 );

    // write entries
    document.write(`<h4>Investment amount = ${investment} Interest rate = ${rate} Years = ${years}</h4>`);

    // calulate future values
    let futureValue = investment;
    for (let i = 1; i <= years; i++ ) {
            const interest = futureValue * rate / 100;
            futureValue = futureValue + interest;

        //  results
        document.write(`<p>Year=${i} Interest=${interest.toFixed(2)} Value=${futureValue.toFixed(2)}</p>`);
    }
 
    again = prompt("Repeat entries? (y/n)", "y");
}
while (again=="y");

// display results
document.write(html);