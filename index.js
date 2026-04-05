const clickArea = document.getElementById("click-area");
const counter = document.getElementById("counter");
const clickSound = new Audio("assets/sounds/click.mp3");

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

let clicks = 0;

const onClick = () => {
    clicks += 1;

    const ran = Math.round(Math.random(0, 1))

    clickSound.currentTime = 0
    clickSound.play();

    if (ran == 1) {
        clickArea.animate([
            {transform: "scale(1)"},
            {transform: "scale(1.075) rotate(-5deg)"},
            {transform: "scale(1)"}
        ], {duration: 100});
    } else {
        clickArea.animate([
            {transform: "scale(1)"},
            {transform: "scale(1.075) rotate(5deg)"},
            {transform: "scale(1)"}
        ], {duration: 100});
    }
};

setInterval(() => {
  clicks = clamp(clicks / 1.1, 0, Infinity);
  counter.innerText = Math.round(clicks);
}, 100);