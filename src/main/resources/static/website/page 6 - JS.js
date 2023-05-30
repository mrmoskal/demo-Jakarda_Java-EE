const row = document.querySelector(".row");

const tl = new TimelineMax();
tl.fromTo(
    row,
    1,
    {y: -30, opacity: 0},
    {y: 0, opacity: 1, ease: Power2.easeInOut }
);