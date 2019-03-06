var start = new Date().getTime();
let points = 0;

var timeLeft = 30;
var elem = document.getElementById('timeLeft');

var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft === 0) {
        clearTimeout(timerId);
    } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
    }
}



function getRandomColor() {
    let letters = "123456789ABCDEF".split("");
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function shapeAppear() {
    var top = Math.random() * 400;
    var left = Math.random() * 1000;
    var width = (Math.random() * 200) + 100;
    shape.style.left = left + "px";
    shape.style.top = top + "px";
    shape.style.width = width + "px";
    shape.style.height = width + "px";
    shape.style.backgroundColor = getRandomColor();
    shape.style.display = "block";
    start = new Date().getTime();
}

function appearAfterDelay() {
    setTimeout(shapeAppear, Math.random * 200);
}
appearAfterDelay();

shape.addEventListener("click", appearShape = () => {
    if (shape.style.display = "none") {
        points++;

    };
    console.log(points);

    shape.style.display = "none";
    let end = new Date().getTime();
    let timeTaken = (end - start) / 1000;

    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    appearAfterDelay();
});

function shapeDissapear() {
    var shape = document.querySelector("#shape");
    shape = setTimeout(alertFunc, 32000);
}

function alertFunc() {
    if (timeLeft === 0) {
        alert(`time out, your points ${points}`);
        alert(`try again?`)
        window.location.reload(true);
    }

}
shapeDissapear();