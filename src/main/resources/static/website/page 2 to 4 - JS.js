/*For A Starting Animation To Pages Two To Four:*/
const hero = document.querySelector(".hero");
const hero_profile = document.querySelector('.heroProfile');
const headline = document.querySelector(".headline");
const row = document.querySelector(".row");
const miny_gallery = document.querySelector(".minyGallery");

const tl = new TimelineMax();
tl.fromTo(
    hero,
    1,
    {height: "0%"},
    {height: "100%", ease: Power2.easeInOut }
)
.fromTo(
    hero,
    1.2,
    {width: "75%"},
    {width: "100%", ease: Power2.easeInOut }
)
.fromTo(
    hero_profile,
    1.2,
    {opacity: 0, x: -30},
    {opacity: 1, x: 0, ease: Power2.easeInOut },
    "-=1.2"
)
.fromTo(
    headline,
    1,
    {opacity: 0},
    {opacity: 1, ease: Power2.easeInOut },
    "-=1"
)
.fromTo(
    row,
    1,
    {opacity: 0, y: -30},
    {opacity: 1, y: 0, ease: Power2.easeInOut },
    "-=1"
)
.fromTo(
    miny_gallery,
    1,
    {opacity: 0, y: -30},
    {opacity: 1, y: 0, ease: Power2.easeInOut },
    "-=1"
);

