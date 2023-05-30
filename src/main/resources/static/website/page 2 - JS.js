//An togglable image gallery:
//the vars:
var gallery = [
"https://steamcdn-a.akamaihd.net/steam/apps/433340/extras/Slimerancher_HeroArt.png?t=1586456962",
"https://i.ytimg.com/vi/jV7frFjrUEA/maxresdefault.jpg",
"https://i.ytimg.com/vi/_j-wwJC9rlc/maxresdefault.jpg",
"https://images.cgmagonline.com/wp-content/uploads/2017/08/slime-rancher-pc-review-heckin-cute-2-1280x720.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3yn6rovBnDkW3zixYDFkjRQCcwgbAhLYnLbwZNmgeNtr_6eP7&usqp=CAU",
"https://66.media.tumblr.com/c552564b9a2cf653468480fcec835f9b/tumblr_pvx78kUHaH1x0745ao1_640.gif"
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