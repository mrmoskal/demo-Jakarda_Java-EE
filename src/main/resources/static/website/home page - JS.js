
//A cool idea for a speech recognition AI:
/*
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () =>{
    console.log('you can talk now');
};

recognition.onresult = (event) =>{
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

//add the listener to the button.
btn.addEventListener('click', () =>{
    recognition.start();
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

//Real page's JavaScript:

const hero = document.querySelector(".hero");
const headline = document.querySelector(".headline");
const row = document.querySelector('.row');

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
    {width: "80%"},
    {width: "100%", ease: Power2.easeInOut }
)
.fromTo(
    headline,
    1.2,
    {y: -90, color: "black", border: "5px solid black"},
    {y: 0, color: "white", border: "5px solid white", ease: Power2.easeInOut },
    "-=1.2"
)
.fromTo(
    row,
    1.2,
    {y: -30, opacity: 0, color: "black"},
    {y: 0, opacity: 1, color: "white", ease: Power2.easeInOut },
    "-=1.2"
);
