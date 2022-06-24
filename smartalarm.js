console.log("Welcome to Smart Alarm ");








//var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
var audio = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');

const alarmSubmit = document.getElementById("alarmSubmit");
alarmSubmit.addEventListener("click", setAlarm);

function setAlarm(e) {
    e.preventDefault();//for preventing defaulting refreshing of the page


    console.log("Setting the alarm ");

    console.log(`Setting the alarm for ${alarm.value}`);

    //get alarmDate date 
    let alarmDate = new Date(alarm.value);
    console.log(`The alarm is set for  ${alarmDate}`);

    //getcurrentdate
    let currentDate = new Date();
    console.log(`the current date is ${currentDate}`)



    //Time after which the alarm will ring 
    let difference = alarmDate - currentDate;
    console.log(difference);
    /*     if the diffrence between alarm date and current date is negative it will prompt a alert e
    the bell will ring */
    if (difference > 0) {
        console.log("correct time ")

        setTimeout(ringBell, difference)
        function ringBell() {
            console.log("the bell is ringing");
            audio.play();

        }

    } else {
        console.log("incorrect time ");
        alert("plz Enter the correct alarm data!!!")
    }


    //time after which the the alarm will automatically stop after 2 min approx  ;
    let stopAlarmTime = difference + 128000;
    console.log(`the alarm will be  stopped after ${stopAlarmTime}`)

    const closeTimeout = setTimeout(stopAlarm, stopAlarmTime);
    function stopAlarm() {
        console.log("the alarm is stopped");
        audio.pause();
    }



}
const snoozeAlarm = document.getElementById("snoozeAlarm")
snoozeAlarm.addEventListener("click", stopAudio)



function stopAudio(e) {
    e.preventDefault();
    console.log("alarm is snoozed");
    audio.pause();

}

//javascript for holiday page

function holiday(){
    console.log("holiday package activated");
    location.href = "holiday.html";
}

//javascript for toolsdropdown menu 

function showDropDownMenu(){
    console.log("dopdown function activatd");
    let dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display = "block";
    console.log("displayed");
    let arr1 = document.getElementById("arr1");
    arr1.style.display= "none";
    console.log("arrowdown hidden")
}

function goToAlarm(){
    console.log("goToAlarm activated");
    location.href = "zzz.html";
}
function goToTimer(){
    console.log("goToTimer activated");
    location.href = "zz1.html";
}
function goToStopWatch(){
    console.log("goToStopWatch activated");
    location.href = "zz2.html";
}
function goToTime(){
    console.log("goToTime activated");
    location.href = "zz3.html";
}
function hideDropDownMenu(){
    console.log("hidedropdown function activatd");
    let dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display = "none";
    console.log("hidden");
    let arr1 = document.getElementById("arr1");
    arr1.style.display= "inline";
    console.log("arrowdown shown")
}



// javascript for nightmode

function nightMode(){
    console.log("night mode activatd");
    let header = document.getElementById("header")
    header.style.background = "grey";
    let footer = document.getElementById("footer")
    footer.style.background = "grey";
    document.querySelector(".center").style.background = "black";
    document.querySelector(".center").style.color = "gold";
    let arr2 = document.getElementById('arr2')
    arr2.style.display = "none"
    let arr22 = document.getElementById('arr22')
    arr22.style.display= "block"
    document.querySelector("#alarmSubmit").style.background = "white"
    document.querySelector("#alarmSubmit").style.color = "red"
    document.querySelector("#snoozeAlarm").style.background = "white"
    document.querySelector("#snoozeAlarm").style.color = "red"
    
}

function showAbbreviation(){
    console.log("showAbbreviation activatd")
   let nightMode = document.getElementById('nightMode');
   nightMode.style.display = "block";
   console.log("showing display block ")
   setTimeout(hideAbbrevation,2000)
}
function hideAbbrevation(){
    let nightMode = document.getElementById('nightMode');
   nightMode.style.display = "none";}


function normalMode(){
    console.log("normal mode activated")
   
    let header = document.getElementById("header")
    header.style.background = "#4eaadb";
    let footer = document.getElementById("footer")
    footer.style.background = "#4eaadb";
    document.querySelector(".center").style.background = "white";
    document.querySelector(".center").style.color = "black";
    let arr22 = document.getElementById('arr22')
    arr22.style.display= "none";
    let arr2 = document.getElementById('arr2')
    arr2.style.display= "block"
    
    
}




function contact() {
    console.log("contact function activate");
    location.href = "contact.html";
    /*let timezone = document.getElementById("timezone");
    timezone.innerHTML = "<h1>I am Don </h1>"*/

}
function termsOfUse() {
    console.log("termsOfUse function activate");
   let timezone = document.getElementById("timezone");
    timezone.innerHTML = "<h1>Terms and Conditions</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus numquam explicabo corrupti quas omnis facilis quae iusto eum minima, hic nam ut perspiciatis.</p> <br><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, reprehenderit ipsa! Eaque laboriosam molestiae quia nemo placeat distinctio dolorum nostrum beatae a! At, nobis magnam provident quam libero quia itaque vel repellat inventore ad molestias laborum error maiores totam, et voluptatem autem! Excepturi in aliquam molestias placeat vero sapiente reiciendis! Culpa, odio nisi? Sapiente atque voluptatem enim asperiores at, voluptates natus dolor iure tempora. Quaerat et, iure quos maxime natus esse, eaque aspernatur animi nisi laborum inventore culpa earum error aliquid. Praesentium cum autem id magnam sunt fuga aliquam dolores asperiores, at quaerat ducimus est inventore sequi explicabo nobis nulla ratione deleniti reiciendis provident maxime aperiam. Qui quisquam minus quos, cum aperiam voluptatibus recusandae officia maiores nostrum distinctio, voluptatum ut in, mollitia asperiores voluptatem! Reiciendis facilis sapiente unde. Quo fuga voluptate unde quasi totam in eum molestias at amet dolorum ratione, tenetur odit consectetur architecto mollitia ipsum laudantium culpa, ea numquam cum. Hic et quam nesciunt dolores quae, numquam, mollitia aliquid repellat ratione, enim architecto veniam. Dolorum libero, quae labore perspiciatis suscipit dolor voluptatibus vero velit, possimus voluptatum est nesciunt quasi facere excepturi quisquam quia magnam nulla hic, in praesentium nisi nostrum mollitia! Illo facilis quam exercitationem, reiciendis voluptate possimus?</p>"
    timezone.style.padding = "20px"
}
function privacy() {
    console.log("privacy function activate");
    let timezone = document.getElementById("timezone");
    timezone.innerHTML = "<h1>Privacy Policy</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus numquam explicabo corrupti quas omnis facilis quae iusto eum minima, hic nam ut perspiciatis.</p> <br><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, reprehenderit ipsa! Eaque laboriosam molestiae quia nemo placeat distinctio dolorum nostrum beatae a! At, nobis magnam provident quam libero quia itaque vel repellat inventore ad molestias laborum error maiores totam, et voluptatem autem! Excepturi in aliquam molestias placeat vero sapiente reiciendis! Culpa, odio nisi? Sapiente atque voluptatem enim asperiores at, voluptates natus dolor iure tempora. Quaerat et, iure quos maxime natus esse, eaque aspernatur animi nisi laborum inventore culpa earum error aliquid. Praesentium cum autem id magnam sunt fuga aliquam dolores asperiores, at quaerat ducimus est inventore sequi explicabo nobis nulla ratione deleniti reiciendis provident maxime aperiam. Qui quisquam minus quos, cum aperiam voluptatibus recusandae officia maiores nostrum distinctio, voluptatum ut in, mollitia asperiores voluptatem! Reiciendis facilis sapiente unde. Quo fuga voluptate unde quasi totam in eum molestias at amet dolorum ratione, tenetur odit consectetur architecto mollitia ipsum laudantium culpa, ea numquam cum. Hic et quam nesciunt dolores quae, numquam, mollitia aliquid repellat ratione, enim architecto veniam. Dolorum libero, quae labore perspiciatis suscipit dolor voluptatibus vero velit, possimus voluptatum est nesciunt quasi facere excepturi quisquam quia magnam nulla hic, in praesentium nisi nostrum mollitia! Illo facilis quam exercitationem, reiciendis voluptate possimus?</p>"
    timezone.style.padding = "20px";

}
function copyright(){
    console.log("copyright activated");
    location.href = "index.html";
}
    


















