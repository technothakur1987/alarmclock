console.log("Welcome to stopwatch ");
var audio = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');


/*timercycle function whwere */

function timerCycle(){
  console.log("timer is running")
  


refresh = setInterval(()=>{
    let stopWatchDiv3 = document.getElementById("stopWatchDiv3");
    stopWatchDiv3.innerText = sec;
    sec++;

    console.log(sec);

   if(sec==60){
      min++
      
      sec = 0;
      console.log(`min is ${min} and seconds is ${sec}`);

      let stopWatchDiv1 = document.getElementById("stopWatchDiv1");
      stopWatchDiv1.innerText = min;
     

    }

  },1000)
    
}


var timer= false;
var hh = 0; 
var min = 0;
var sec = 0;
 function startTimer(){
   console.log("Start the timer");
   timer = true;
   if(timer == true){
    audio.play(); 
    timerCycle();
   }
   
   
   
   
   

 }
 function stopTimer(){
  console.log("stop the timer");
  audio.pause();
  timer = false;
  if(timer==false){
    clearInterval(refresh);
    console.log(refresh);

  }
  


}
function resetTimer(){
  console.log("reset the timer");
  let stopWatchDiv1 = document.getElementById("stopWatchDiv1");
      stopWatchDiv1.innerText = "00";
  let stopWatchDiv3 = document.getElementById("stopWatchDiv3");
  stopWatchDiv3.innerText = "00"  ;
  location.reload(true);
  



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
  document.querySelector("#stopWatchBtn").style.background = "white";
  document.querySelector("#stopWatchBtn").style.color = "red";
  document.querySelector("#startWatchBtn").style.background = "white";
  document.querySelector("#startWatchBtn").style.color = "red";
  document.querySelector("#resetWatchBtn").style.background = "white";
  document.querySelector("#resetWatchBtn").style.color = "red";
  
  
  
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
  timezone.style.padding = "20px";
}
function privacy() {
  console.log("privacy function activate");
  let timezone = document.getElementById("timezone");
  timezone.innerHTML = "<h1>Privacy Policy</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus numquam explicabo corrupti quas omnis facilis quae iusto eum minima, hic nam ut perspiciatis.</p> <br><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, reprehenderit ipsa! Eaque laboriosam molestiae quia nemo placeat distinctio dolorum nostrum beatae a! At, nobis magnam provident quam libero quia itaque vel repellat inventore ad molestias laborum error maiores totam, et voluptatem autem! Excepturi in aliquam molestias placeat vero sapiente reiciendis! Culpa, odio nisi? Sapiente atque voluptatem enim asperiores at, voluptates natus dolor iure tempora. Quaerat et, iure quos maxime natus esse, eaque aspernatur animi nisi laborum inventore culpa earum error aliquid. Praesentium cum autem id magnam sunt fuga aliquam dolores asperiores, at quaerat ducimus est inventore sequi explicabo nobis nulla ratione deleniti reiciendis provident maxime aperiam. Qui quisquam minus quos, cum aperiam voluptatibus recusandae officia maiores nostrum distinctio, voluptatum ut in, mollitia asperiores voluptatem! Reiciendis facilis sapiente unde. Quo fuga voluptate unde quasi totam in eum molestias at amet dolorum ratione, tenetur odit consectetur architecto mollitia ipsum laudantium culpa, ea numquam cum. Hic et quam nesciunt dolores quae, numquam, mollitia aliquid repellat ratione, enim architecto veniam. Dolorum libero, quae labore perspiciatis suscipit dolor voluptatibus vero velit, possimus voluptatum est nesciunt quasi facere excepturi quisquam quia magnam nulla hic, in praesentium nisi nostrum mollitia! Illo facilis quam exercitationem, reiciendis voluptate possimus?</p>"
  timezone.style.padding = "20px";

}
function copyright(){
  console.log("copyright activated");
  location.href = "index.html"
}









