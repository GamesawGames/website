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
    setTimeout(start, 1);
}

function fadeEnd() {
    var img = document.getElementById("slideshow_img");
    img.style.animation = "";
}



function start() {
    createNav();
    setTimeout(setupSelectedBtn, 20);
}
function createNav() {
    document.getElementById("navbarNav").innerHTML = '<a class="btn btn-light" id="home" href="index.html">Home<span class="sr-only"></span></a>'+
        '<a class="btn btn-light" id="about" href="about.html">About<span class="sr-only">(current)</span></a>'+
        '<div class="btn-group">'+
           '<a href="games.html" id="games" class="btn btn-light">Games</a>'+
            '<button type="button" id="gamesdrop" class="btn btn-light dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle Dropdown</span></button>'+
            '<div class="dropdown-menu">'+
                '<a class="dropdown-item" href="game-tlodb.html">The Legend of Diamondback</a>'+
                '<a class="dropdown-item" href="game-tlodbonline.html">TLoDb Online</a>'+
            '</div>' +
        '</div>'
}
function setupSelectedBtn() {

    if (document.URL.endsWith('index.html')) { document.getElementById("home").className = "btn btn-primary" }
    if (document.URL.endsWith('about.html')) { document.getElementById("about").className = "btn btn-primary" }
    if (document.URL.endsWith('games.html')) { document.getElementById("games").className = "btn btn-primary" }
    if (document.URL.endsWith('game-tlodb.html')) { document.getElementById("gamesdrop").className = "btn btn-primary dropdown-toggle dropdown-toggle-spli" }
    if (document.URL.endsWith('game-tlodbonline.html')) { document.getElementById("gamesdrop").className = "btn btn-primary dropdown-toggle dropdown-toggle-spli" }
}
function bigData1() {
    document.getElementById("credits").innerHTML = " BIG DATA";
    setTimeout(bigData2, 1000);
}

function bigData2() {
    document.getElementById("credits").innerHTML = " By Jason Gleba, Drew Ciaramitaro, Evan Foster, and Sam Dubrule";
    setTimeout(bigData1, 1000);
}



window.onload = begin();