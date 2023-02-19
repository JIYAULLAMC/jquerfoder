

// jQuery('button').click(function(){
//     console.log("Button Clicked !")
// });


jQuery.noConflict();


jQuery(document).ready(function($){
    // confirm("Document is ready !")
    $("p").click(function(){
        alert("this is PARAGRAPHA TAG !");
    });

    $("#btn-id").click(function(){
        alert("this is ID ELEMENT!");
    });
    console.log("+++++")

    $(".btn-class").click(function(){
        alert("this is CLASS ELEMENT!");
    });

});

// hide ro show the image or html element





jQuery.noConflict();


jQuery(document).ready(function($){

    $("#image-btn").click(function(){
        $("#image-id").toggle(function(){
            console.log("this image is hided or shown !")
        });
    });

});



// how to add and remove the css properties useing jquery



jQuery(document).ready(function($){
    console.log("document is loaded!")

    $("#addcss").click(function(){
        console.log("came inside the addcss function")

        // to which element need to add
        $("#heading").css({"color":"red","background-color": "yellow", "font-size": "200%"});

    })

   

});































