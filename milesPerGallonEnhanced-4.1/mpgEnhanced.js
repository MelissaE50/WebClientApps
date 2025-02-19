"use strict";

const $ = selector => document.querySelector(selector);

const getNumericErrorMsg = lbl => `${lbl} must be a valid number.`; //error message if not a valid number
const getRangeErrorMsg = lbl => `${lbl} must be greater than zero.`; //error message if number is zero or less

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if (isNaN(miles)) {
        alert(getNumericErrorMsg("Miles driven"));
        focusAndSelect("#miles");
    } else if (miles <= 0) {
        alert(getRangeErrorMsg("Miles driven"));
        focusAndSelect("#miles");
    }
    else if (isNaN(gallons)) {
        alert(getNumericErrorMsg("Gallons of gas used"));
        focusAndSelect("#gallons");
    } else if (gallons <= 0) {
        alert(getRangeErrorMsg("Gallons of gas used"));
        focusAndSelect("#gallons");
    }
    else {
        $("#mpg").value = (miles / gallons).toFixed(2);
    }
};

const clearEntries = () => {
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";
    $("#miles").focus(); //clears entries to start over
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#miles").addEventListener("dblclick", clearEntries);
    $("#miles").focus(); //causes clear button to work in all fields
});