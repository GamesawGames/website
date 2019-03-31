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
    document.getElementById("navbarNav").innerHTML = '<a class="navbarbutton" id="home" href="index.html">Home<span class="sr-only"></span></a>'+
        '<a class="navbarbutton" id="about" href="about.html">About<span class="sr-only">(current)</span></a>'+
        '<div class="btn-group">'+
           '<a href="games.html" id="games" class="navbarbutton">Games</a>'+
            '<button type="button" id="gamesdrop" class="navbarbutton dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle Dropdown</span></button>'+
            '<div class="dropdown-menu">'+
                '<a class="dropdown-item navbarbutton" href="game-tcc.html">LOTO: The Game</a>'+
                '<a class="dropdown-item navbarbutton" href="game-lototss.html">LOTO: The Second Season</a>'+
            '</div>' +
        '</div>'
}
function setupSelectedBtn() {

    if (document.URL.endsWith('index.html')) { document.getElementById("home").className = "navbarbutton-cur" }
    if (document.URL.endsWith('about.html')) { document.getElementById("about").className = "navbarbutton-cur" }
    if (document.URL.endsWith('games.html')) { document.getElementById("games").className = "navbarbutton-cur" }
    if (document.URL.endsWith('game-tcc.html')) { document.getElementById("gamesdrop").className = "navbarbutton-cur dropdown-toggle dropdown-toggle-spli" }
    if (document.URL.endsWith('game-lototss.html')) { document.getElementById("gamesdrop").className = "navbarbutton-cur dropdown-toggle dropdown-toggle-spli" }
}


$(document).on('scroll', function (e) {
    if ($(document).scrollTop() > 12) {
        $('.navbar').addClass("scrolled");
    }
    else {
        $('.navbar').removeClass("scrolled");
    }
});

window.onload = begin();