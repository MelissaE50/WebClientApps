"use strict";
$(document).ready( () => {

    //$("#startup_message").delay(5000).fadeOut(1000);

    $("#faqs h1").animate(
		{ fontSize: "275%", opacity: 1, left: "+=175" }, 
		2000,
		() => $("#faqs h2").next().fadeIn(1000).fadeOut(1000)
	);
    

    // set event handler for all h2 tags
    //$("#faqs h2").click( evt => {
        // get clicked h2 tag
        //const h2 = evt.currentTarget;
        $("#faqs h2").click( evt => {
            const target = evt.currentTarget;
            $(target).toggleClass("minus");
            if ($(target).attr("class") == "minus") {
                $(target).next().slideDown(
                    1000, "easeOutBounce");
            }
            else {
                $(target).next().slideUp(
                    1000, "easeInBounce");
            }
        });
        

        // toggle minus class for h2 tag
        $(h2).toggleClass("minus");

        // show or hide related div
        if ($(h2).attr("class") !== "minus") {
            $(h2).next().hide();
        }
        else {
           $(h2).next().show();
        }

        evt.preventDefault();
    });

    // set focus on first h2 tag's <a> tag
    $("#faqs").find("a:first").focus();
});

