console.log("Hey there!");
startTime();




function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    
    m = checkTime(m);
    s = checkTime(s);

    $("#clock").html(h + ":" + m + ":" + s);

    setTimeout(startTime, 500);
}

function checkTime(number){
    if(number < 10){
        number = "0"+number;
    }
    return number;
}

function startBomb() {
    var bombSeconds = 11;
    tick(bombSeconds);
}

function tick(bombSeconds) {
   bombSeconds = bombSeconds - 1;
   setTimeout(function(){
        if (bombSeconds === 0){
            $("#bomb").html("BOOM!");
        } else {
            tick(bombSeconds);
            $("#bomb").html(bombSeconds);
        }
    }, 1000)
}

