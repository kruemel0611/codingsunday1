console.log("Hey there!");
startTime();




function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    
    $("#clock").html(h + ":" + m + ":" + s);

    
}

function changeColor() {
    console.log("I clicked!");
    $("body").css("background-color", "pink");
}