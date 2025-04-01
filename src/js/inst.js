let section1Background = document.querySelector('.section1Background');

let section3ChooseMusicButton = document.querySelector("#section3ChooseMusicButton");
let section3ChooseProdButton = document.querySelector("#section3ChooseProdButton");
let section3ChooseDevButton = document.querySelector("#section3ChooseDevButton");

let section3Music = document.querySelector("#section3Music");
let section3Prod = document.querySelector("#section3Prod");
let section3Dev = document.querySelector("#section3Dev");

function headerScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100

    section1Background.style.filter = "blur(" + scrolled / 2 + "px)";
    section1Background.style.transform = "translateY(-" + scrolled / 1.8 + "%)";
}

window.addEventListener("scroll", headerScroll);

function showSection3ButMusic() {
    section3ChooseMusicButton.classList.add("section3ChooseButtonActive");
    section3ChooseProdButton.classList.remove("section3ChooseButtonActive");
    section3ChooseDevButton.classList.remove("section3ChooseButtonActive");

    section3Music.style.animation = "fadeInChoose 125ms ease-out";
    section3Prod.style.animation = "fadeOutChoose 125ms ease-in";
    section3Dev.style.animation = "fadeOutChoose 125ms ease-in";
  
    function delayedAnimIn() {
        section3Music.style.display = "flex";
        section3Prod.style.display = "none";
        section3Dev.style.display = "none";
    }
    setTimeout(delayedAnimIn, 100);
}

function showSection3ButProd() {
    section3ChooseMusicButton.classList.remove("section3ChooseButtonActive");
    section3ChooseProdButton.classList.add("section3ChooseButtonActive");
    section3ChooseDevButton.classList.remove("section3ChooseButtonActive");

    section3Music.style.animation = "fadeOutChoose 125ms ease-in";
    section3Prod.style.animation = "fadeInChoose 125ms ease-out";
    section3Dev.style.animation = "fadeOutChoose 125ms ease-in";
  
    function delayedAnimIn() {
        section3Music.style.display = "none";
        section3Prod.style.display = "flex";
        section3Dev.style.display = "none";
    }
    setTimeout(delayedAnimIn, 100);
}

function showSection3ButDev() {
    section3ChooseMusicButton.classList.remove("section3ChooseButtonActive");
    section3ChooseProdButton.classList.remove("section3ChooseButtonActive");
    section3ChooseDevButton.classList.add("section3ChooseButtonActive");

    section3Music.style.animation = "fadeOutChoose 125ms ease-in";
    section3Prod.style.animation = "fadeOutChoose 125ms ease-in";
    section3Dev.style.animation = "fadeInChoose 125ms ease-out";
  
    function delayedAnimIn() {
        section3Music.style.display = "none";
        section3Prod.style.display = "none";
        section3Dev.style.display = "flex";
    }
    setTimeout(delayedAnimIn, 100);
}

section3ChooseMusicButton.addEventListener("click", showSection3ButMusic);
section3ChooseProdButton.addEventListener("click", showSection3ButProd);
section3ChooseDevButton.addEventListener("click", showSection3ButDev);