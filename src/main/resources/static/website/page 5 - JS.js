//for a cool display appone click on img:
//the vars.
var linksInGallery = [
    "https://steamcdn-a.akamaihd.net/steam/apps/433340/extras/Slimerancher_HeroArt.png?t=1586456962",
    "https://www.nintendo.com/content/dam/noa/en_US/games/switch/e/enter-the-gungeon-switch/enter-the-gungeon-switch-hero.jpg",
    "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_3DS_Terraria_image1600w.jpg",
    "https://alintrx.com/wp-content/uploads/2019/12/H2x1_NSwitchDS_RocketLeague_image1600w.jpg",
    "https://store-images.s-microsoft.com/image/apps.61010.14114766795216147.2000000000007964186.64215b50-e544-4e39-8bbc-3effb8935df4",
    "https://i.ytimg.com/vi/he3yYFJPeGQ/maxresdefault.jpg",
    "https://steamcdn-a.akamaihd.net/steam/apps/264710/capsule_616x353.jpg?t=1572421550",
    "https://store-images.s-microsoft.com/image/apps.37905.13670972585585116.7f29dc82-c969-4e89-aaf9-7c0e3f52d890.2e5a9c92-cf00-4c10-ae28-264c564478c3",
    "https://www.topmarket.co.il/images/detailed/27/overwatch-is-the-new-esports-shooter-game-from-blizzard.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/2/26/Undertale-logo.jpg",
    "https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_sword_shield/sword-shield-169-en.jpg",
    "https://xn--e1awd7f.com/wp-content/uploads/Satisfactory-Review.jpg"
];
var headlinesInGallery = [
    "Slime Rancer",
    "Enter The Gungeon", 
    "Terraria",
    "Rocket League",
    "Minecraft",
    "Tuber Simulator",
    "Subnotica",
    "Cuphead",
    "Overwatch",
    "Undertale",
    "Pokemon - sword and shield",
    "Satisfactory"
];
var textsInGallery = [
    "a nice game about ranching a farm of slimes, and having fun. (more info about this game is in its own page called: 'Slime Rancher')",
    "a bullet hell game of wich is both fun, pretty, and nerve-racking. (more info about this game is in it's own page called: 'Enter The Gungeon')",
    "a both building and fighting game with lots of bosses, enemies, event, and strategy. (more info about this game is in it's own page called: 'Terraria')",
    "a game all about driving and flying sport cars, while useing them to play soccer.",
    "a game that's made to bring the joy of journeying around the world, discovering new and exiciting things, and having fun.",
    "what? you never played tuber simulator befor?!? ppppssshhh.....",
    "a game filled with stories, scares, and an ocean to explore.",
    "a very, very hard game designed to look like an old cartoon",
    "a nice sooting game with both team and solo play modes of which's always fun to play",
    "a unique game with an amazing story.",
    "the 8th generation out of the pokemon games. (you probably herd alredy about pokemon...)",
    "a very satisfying game about building a humongous factory"
];
//a function for opening it.
function OpenInfoDisplay(i){
    document.querySelector(".bigshow").style.width = "100%";
    document.querySelector(".bigshow").style.opacity = "1";
    document.querySelector(".bsImg").src = linksInGallery[i];
    document.querySelector(".bsH1").textContent = headlinesInGallery[i];
    document.querySelector(".bsTxt").textContent = textsInGallery[i];
}
////a function for clossing it.
function CloseInfoDisplay(){
    document.querySelector(".bigshow").style.width = "0%";
    document.querySelector(".bigshow").style.opacity = "0";
}

/*For A Starting Animation To Tis Page:*/
const row = document.querySelector(".row");

const tl = new TimelineMax();
tl.fromTo(
    row,
    1,
    {y: -30, opacity: 0},
    {y: 0, opacity: 1, ease: Power2.easeInOut }
);