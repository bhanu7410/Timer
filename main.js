let msec = 0;
let sec = 0;
let min = 0;
let mintag = document.getElementById("min")
let sectag = document.getElementById("sec")
let msectag = document.getElementById("msec")
let star = document.getElementById("start")
let pau = document.getElementById("pause")
let rese = document.getElementById("reset")
let interval
let r = 0
let g = 0
let b = 0
star.addEventListener("click", start)
pau.addEventListener("click", pause)
rese.addEventListener("click", reset)


function Timer() {
    // ranColor(Math.floor(Math.random() * 3));
    if (msec < 9) {
        msectag.innerHTML = "0" + (++msec);

    }
    else {
        msectag.innerHTML = ++msec;
    }
    if (msec >= 99) {
        sec++;
        if (sec < 10) {
            sectag.innerHTML = "0" + sec
        } else {
            sectag.innerHTML = sec
        } msec = 0
    }
    if (sec >= 59) {
        min++;
        if (min < 10) {
            mintag.innerHTML = "0" + min
        } else {
            mintag.innerHTML = min
        }
        sec = 0;
        console.log("there");

    }
}
function start() {
    interval = setInterval(Timer, 10)

    star.disabled = true;
}
function pause() {
    clearInterval(interval)
    star.disabled = false;

}
function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    msectag.innerHTML = "0" + msec
    sectag.innerHTML = "0" + sec
    mintag.innerHTML = "0" + min
    pause()
    star.disabled = false;
}
// function ranColor(p) {
//     switch (p) {
//         case p === 1:
//             ++r;
//             break;
//         case 2:
//             ++g
//             break;
//         case 0:
//             ++b
//             break
//     }
//     if (r, g, b === 255) {
//         b = 0;
//         r = 0;
//         g = 0;
//     }
//     const newColor = `rgb(${r},${g},${b})`
//     document.body.style.backgroundColor = newColor;
// }
