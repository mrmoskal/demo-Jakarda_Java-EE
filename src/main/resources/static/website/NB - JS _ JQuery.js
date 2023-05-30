/*For the NavBar itsalf:*/

//Change the arrow indicator (up and down) in dropdown:
function changeUpDown(){
    const pointer = document.getElementById("pointer");
    if (pointer.innerHTML == "▼"){
        pointer.innerHTML = "▲";
    }
    else{
        pointer.innerHTML = "▼";
    }
}
//Show and hide dropdown:
function dropDownToggle(){
    document.getElementById("dd").classList.toggle("show");
}
//To do both at the same time:
function ddToggle(){
    dropDownToggle()
    changeUpDown();
}
//To open NavBar:
function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").style.opacity = "1";
}
//To close NavBar:
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("myNav").style.opacity = "0";
}
/*For the clock in the NavBar:*/
//Full clock:
function Clock(){
    const date = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let today = date.getDay();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    month = (month < 10 ? "0" : "") + month;
    let h = date.getHours();
    let m = date.getMinutes();
    let daytime; 
    h = (h > 12 ? h - 12 : h);
    h = (h < 10 ? "0" : "") + h;
    m = (m < 10 ? "0" : "") + m;
    if (date.getHours() < 12){
        daytime = "in the morning";
    }
    else if (date.getHours() >= 12 && date.getHours() < 18){
        daytime = "in the afternoon";
    }
    else if (date.getHours() >= 18 && date.getHours() < 20){
        daytime = "in the evening";
    }
    else{
        daytime = "at night";
    }
    document.getElementById('time').innerHTML = days[today] + ", " + day + "/" + month + "/" + year + ", " + h + ":" + m + " " + daytime;
}

//Display:
window.onload = () =>{
    Clock();
    setInterval(Clock, 100);
    ToggleRight();
    setInterval(ToggleRight, 6000);
}

/*For The Scroll Indicator:*/ 

function ScrollIndicator(){
    var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (windowScroll / scrollHeight) * 100;
    document.querySelector('.progress-bar').style.width = scrolled + "%";
}

window.onscroll = () =>{
    ScrollIndicator();
}

/*
//An text reading AI:

const btn = document.querySelector('.talk');
const text = document.querySelector('.row').textContent;

btn.addEventListener('click', () =>{
    readOutLoud(text)
});

function readOutLoud(massage){
    const speech = new SpeechSynthesisUtterance();
    speech.text = massage;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1; 
    window.speechSynthesis.speak(speech);
}
*/

/*For A Starting Animation To The Nav Bar:*/

const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo-contaner");
const pbarContener = document.querySelector(".progress-container");

const timeline = new TimelineMax();
timeline.fromTo(
    nav,
    1,
    {y: -100, opacity: 0},
    {y: 0, opacity: 1, ease: Power2.easeInOut }
)
.fromTo(
    pbarContener,
    1,
    {width: "0%", opacity: 0},
    {width: "100%", opacity: 1, ease: Power2.easeInOut },
    "-=1"
)
.fromTo(
    logo,
    1.2,
    {opacity: 0, x: 30},
    {opacity: 1, x: 0, ease: Power2.easeInOut }
);

