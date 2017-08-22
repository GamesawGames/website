var currentId = 0;
function next() {
    currentId++;
    if (currentId > 1) {
        currentId = 0;
    }
    setSlide();
}

function prev() {
    currentId--;
    if (currentId < 0) {
        currentId = 1;
    }
    setSlide();
}

function setSlide() {
    var img = document.getElementById("slideshow_img");
    img.style.animation = "";
    if (currentId == 0) {
        img.src = "assets/thumb-tlodb.png";
    }
    if (currentId == 1) {
        img.src = "assets/thumb-tlodbonline.png";
    }

    img.style.animation = "fade ease-in-out 0.5s forwards";
    setTimeout(fadeEnd, 500);
}
function begin() {
    setTimeout(setSlide, 1);
}

function fadeEnd() {
    var img = document.getElementById("slideshow_img");
    img.style.animation = "";
}

window.onload = begin();