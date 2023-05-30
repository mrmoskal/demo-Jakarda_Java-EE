var gallery = [
"https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_3DS_Terraria_image1600w.jpg",
"https://cdn.mos.cms.futurecdn.net/ftCURjzcqaaxNdsfUVLiDj.jpg",
"https://cdn1-www.gamerevolution.com/assets/uploads/2020/04/Terraria-1.4-update-release-date-Eye-of-Cthulhu.jpg",
"https://res.cloudinary.com/lmn/image/upload/c_limit,e_sharpen:150,f_auto,fl_lossy,h_360,q_80,w_640/v1/gameskinnyc/t/e/r/terraria-5133c.jpg",
"https://i.redd.it/ku4uwhwo2i7z.jpg",
"https://thumbs.gfycat.com/DamagedGloomyLark-size_restricted.gif"
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