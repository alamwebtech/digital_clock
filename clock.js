


function digitalClock (){
let time = new Date();

let localTime = document.getElementById("clock");

// // Souurce for method : " toLocaleTimeString ": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString

localTime.innerHTML= time.toLocaleTimeString("en-GB");

// Greetings

let theHour = time.getHours();

let say;

if (theHour< 12){
    say = "GOOD MORNING";
} else if (theHour >= 12 && theHour <= 17){
    say = "GOOD AFTERNOON";
}else if (theHour >= 17 && theHour <= 24){
    say = "GOOD EVENING";
}
let  myTime = document.getElementById("greetings");
myTime.innerHTML= say;


}

// End of digitalClock function

let  digitalTime = setInterval(digitalClock, 1000);


//  Starting image background

var Time = new Date().getHours();


    if(Time < 12){
        if (document.body) {
            document.body.background = "mnsun.gif";

}

} else if (Time >= 12 && Time <= 17){
    if (document.body){
      document.body.background = "noon.gif";

}
    } else if (Time >= 17 && Time <= 24)


  { if (document.body){
        document.body.background = "ev.gif";

    }
}
