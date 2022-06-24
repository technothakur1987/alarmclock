console.log("Welcome to the alarm clock ");









//var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
var audio = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');

const alarmSubmit = document.getElementById("alarmSubmit");
alarmSubmit.addEventListener("click", setAlarm);


function setAlarm(e) {
    e.preventDefault();//for preventing defaulting refreshing of the page 

    var alarmtime = alarm.value;
    console.log(`setting alarm for ${alarmtime}`);
    //console.log(alarmtime);
    alarmdate = new Date(alarmtime);
    console.log(`the alarm is set for ${alarmdate}`)

    //current date
    currentdate = new Date();
    console.log(`current date is ${currentdate}`);

    //milliseconds after which the alarm will ring
    let difference = alarmdate - currentdate;
    console.log(`alarm will ring after ${difference}`);

    //alarm will ring after this time diffrence
    const myTimeout = setTimeout(ringAlarm, difference);


    function ringAlarm() {
        console.log("Alarm is ringing");
        
            audio.play();
            

        
        
        
        

    }


    //to stop the alarm after 1min after ringing alarm 

    let stopAlarmTime = difference + 128000;
    console.log(`the alarm will be  stopped after ${stopAlarmTime}`)

    const closeTimeout = setTimeout(stopAlarm, stopAlarmTime);
    function stopAlarm() {
        console.log("the alarm is stopped");
        audio.pause();
    }

}

     const snoozeAlarm = document.getElementById("snoozeAlarm")
     snoozeAlarm.addEventListener("click",stopAudio)
     


     function stopAudio(){
         console.log("alarm is snoozed")
         audio.pause();
     }








