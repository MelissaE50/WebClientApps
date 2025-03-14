const $ = selector => document.querySelector(selector);

const userEntry =
prompt("This is a test of the prompt method", 100);

let entryA = prompt("Enter any value", 12345.6789);
alert(entryA);
entryA = parseInt(entryA);
alert(entryA);
 
const joinList = evt => {
    // get user entries from text boxes
    const email1 = $("#email_1").value;
    const email2 = $("#email_2").value;
    const firstName = $("#first_name").value;
 
    // check user entries
    let isValid = true;
    if (email1 == "") { 
        $("#email_1_error").textContent = "Email is required.";
        isValid = false;
    } else { 
        $("#email_1_error").textContent = ""; 
    }
    if (email1 != email2) { 
        $("#email_2_error").textContent = "Emails must match.";
        isValid = false;
    } else { 
        $("#email_2_error").textContent = ""; 
    }
    if (firstName == "") {
        $("#first_name_error").textContent =
            "First name is required.";
        isValid = false;
    } else { 
        $("#first_name_error").textContent = ""; 
    }
 
    // cancel form submit if any user entries are invalid
    if ( !isValid ) {
        evt.preventDefault(); 
    }
};
const clearForm = () => {
    // clear text boxes
    $("#email_1").value = "";
    $("#email_2").value = "";
    $("#first_name").value = "";
 
    // clear span elements
    $("#email_1_error").textContent = "*";
    $("#email_2_error").textContent = "*";
    $("#first_name_error").textContent = "*"; 
 
    // set focus on first text box after resetting the form
    $("#email_1").focus();
};
let sum = 0;
for (let i = 1; i <= 5; i++)
{
    sum += i;
}
alert(sum);
 
document.addEventListener("DOMContentLoaded", () => {
    // hook up click events for both buttons
    $("#join_list").addEventListener("click", joinList);
    $("#clear_form").addEventListener("click", clearForm);
 
    // set focus on first text box after the form loads
    $("#email_1").focus();
});

