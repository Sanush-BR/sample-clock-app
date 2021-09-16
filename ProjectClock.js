//Digital-Clock(12-hours Clock)

//setInterval(displayClock,500);
setInterval(function(){
//function displayClock()
{
    var time = new Date();//in-built method for time
    var hrs = time.getHours(); //in-built for getting hours,Minutes,Seconds
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var en='AM';

    if(hrs>=12){
        en='PM';
    }

    if(hrs>12){
        hrs-=12;
    }
    

    if(hrs==0){
        hrs=12;
    }

    if(hrs<10){
        hrs="0"+hrs;
    }
    if(min<10){
        min="0"+min;
    }
    if(sec<10){
        sec="0"+sec;
    }
    document.getElementById("clock").innerHTML = hrs+":"+min+":"+sec;
    document.getElementById("indicate").innerHTML=en;
}

},500);
