//An togglable image gallery:
//the vars:
var gallery = [
"https://www.nintendo.com/content/dam/noa/en_US/games/switch/e/enter-the-gungeon-switch/enter-the-gungeon-switch-hero.jpg",
"https://steamcdn-a.akamaihd.net/steam/apps/311690/ss_de49a9579b13337e98719d39df0f5bc46b9fe886.1920x1080.jpg?t=1575923806",
"https://i.ytimg.com/vi/19fYivyDNyc/maxresdefault.jpg",
"https://images.cgmagonline.com/wp-content/uploads/2017/12/enter-the-gungeon-switch-mini-review-gungeon-crawling-on-the-go-7.jpg",
"https://dodgeroll.com/gungeon/images/screenshots/screenshot4.png",
"https://i.pinimg.com/originals/5f/42/d4/5f42d44d03ed5c97c0d248d03f614e83.gif"
];
var i = 0;
//the functions:
function ToggleRight(){
    //toggles right.
    i++;
    if(i == 6){
        i = 0;
    }
    DisplayGallery(i);
}
function ToggleLeft(){
    //toggles left.
    i--;
    if(i == 6){
        i = 0;
    }
    else if(i == -1){
        i = 5;
    }
    DisplayGallery(i);
}
function DisplayGallery(x){
    //displays the current img and its number.
    document.getElementById("currImg").src = gallery[x];
    document.getElementById("index").textContent = x + 1;
}