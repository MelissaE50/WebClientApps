"use strict";

const $ = selector => document.querySelector(selector);

const calculateFV = (investment, rate, years) => {
    let futureValue = investment;
    for (let i = 1; i <= years; i++ ) {
        futureValue += futureValue * rate / 100; //for loop to take values
    }
    futureValue = futureValue.toFixed(2); //calculate future value
    return futureValue;
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", () => {
        const investment = parseFloat($("#investment").value);
        const rate = parseFloat($("#rate").value);
        const years = parseInt($("#years").value);
        let errorMessage = "";
    
        if (isNaN(investment) || investment <= 0 || investment > 100000) {
            errorMessage = "Investment must be a number greater than 0 and less than or equal to 100,000"; //create error message if number is less than zero or over 100,000
            $("#investment").focus();
        } else if (isNaN(rate) || rate <= 0 || rate > 15) {
            errorMessage = "Rate must be a number greater than 0 and less than or equal to 15"; //create error message if number is less than zero or over 15
            $("#rate").focus();
        } else if (isNaN(years) || years <= 0 || years > 50) {
            errorMessage = "Years must be a number greater than 0 and less than or equal to 50"; //create error message if number is less than zero or over 50
            $("#years").focus();
        }
        if (errorMessage == "") {
            $("#future_value").value = calculateFV(investment, rate, years);        
        } else {
            alert(errorMessage);
        }
    });
    $("#investment").focus();
});

/* const processEntries = () => {
     const investment = parseFloat($("#investment").value);
     const rate = parseFloat($("#rate").value);
     const years = parseInt($("#years").value);
     let errorMessage = "";

     if (isNaN(investment) || investment <= 0 || investment > 100000) {
         errorMessage = "Investment must be a number greater than 0 and less than or equal to 100,000";
         $("#investment").focus();
     } else if (isNaN(rate) || rate <= 0 || rate > 15) {
         errorMessage = "Rate must be a number greater than 0 and less than or equal to 15";
         $("#rate").focus();
     } else if (isNaN(years) || years <= 0 || years > 50) {
         errorMessage = "Years must be a number greater than 0 and less than or equal to 50";
         $("#years").focus();
     }
     if (errorMessage == "") {
         $("#future_value").value = calculateFV(investment, rate, years);        
     } else {
         alert(errorMessage);
     }

} */