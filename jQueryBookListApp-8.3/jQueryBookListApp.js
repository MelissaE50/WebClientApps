"use strict";
$(document).ready( () => {

    // set event handler for all h2 tags
    $("#categories h2").click( evt => {
        // get clicked h2 tag
        const h2 = evt.currentTarget;

        // toggle minus class for h2 tag
        $(h2).toggleClass("minus");

        // show or hide related div
        if ($(h2).attr("class") !== "minus") {
            $(h2).next().hide();
        }
        else {
           $(h2).next().show();
        }
        $("#image").attr("src", "");
    
    });

    $("#web_images a, #language_images a, #database_images a").each( (index, img) => {
        //preload images
        var imageURL = $(img).attr("href");
        var bookImage = new Image();
        bookImage.src = imageURL;
        //set event handlers			
        $(img).click( evt => {
            $("#image").attr("src", imageURL);

    //cancel default action of the links        
    evt.preventDefault(); });

    // set focus on first h2 tag's <a> tag
    //$("#faqs").find("a:first").focus();
    });
});
