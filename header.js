console.log("this is header js ")

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
    
setTimeout(showAbbreviation,1000);