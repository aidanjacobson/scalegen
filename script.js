var regionalScales = ["C", "G", "D", "A", "E", "F", "Bb", "Eb", "Ab", "Am", "Em", "Bm", "F#m", "C#m", "Dm", "Gm", "Cm", "Fm"];
var allStateScales = ["Db", "Gb/F#", "B", "Bbm", "Eb/D#m", "G#m"];

function generateScaleArray() {
    return allstatemode.checked ? regionalScales.concat(allStateScales) : regionalScales;
}

function generateNewScale() {
    var scales = generateScaleArray();
    var i = 0;
    var maxI = 90;
    var iInit = Math.floor(Math.random()*scales.length);
    function frame() {
        i++;
        scaleOutput.innerText = scales[(i + iInit) % scales.length];
        if (i < maxI) requestAnimationFrame(frame);
    }
    frame();
}

var timeout;
var ready = false;
window.ontouchstart = function() {
    if (!mobilemode.checked) return;
    document.body.style.backgroundColor = "red";
    ready = false;
    timeout = setTimeout(function() {
        document.body.style.backgroundColor = "green";
        ready = true;
    }, 1000);
}

window.ontouchend = function() {
    if (!mobilemode.checked) return;
    document.body.style.backgroundColor = "white";
    if (!ready) {
        clearTimeout(timeout);
    } else {
        ready = false;
        generateNewScale();
    }
}

window.onload = function() {
    mobilemode.onchange = function() {
        if (mobilemode.checked) {
            alert("Hold your finger on the screen for 1 second to generate a new scale.");
        }
    }
}