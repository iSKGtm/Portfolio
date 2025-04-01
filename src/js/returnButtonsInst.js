//DOM CONNECT
let mainHome = document.querySelector('#mainHome');
let navbarHome = document.querySelector('#navbarHome');
let navbarNews = document.querySelector('#navbarNews');
let mainSelectNews = document.querySelector('#mainSelectNews');

let mainFooter = document.querySelector('#mainFooter');
let footerAtribution = document.querySelector('#footerAtribution');

//DOM EVENTS

function showAtribution () {
    mainFooter.style.animation = "animOutSection 125ms ease-out forwards";
    mainHome.style.animation = "animOutSection 125ms ease-out forwards";
    document.body.style.overflow = 'hidden';
  
    function delayedAnimIn() {
        window.location.href = "/atribuicoes.html";
    }
    setTimeout(delayedAnimIn, 100);
}

footerAtribution.addEventListener('click', showAtribution);

function showPage(){
    mainFooter.style.display = "flex";
    mainFooter.style.animation = "animInSection 125ms ease-in";
}

addEventListener("load", showPage);

function showHome() {
    mainFooter.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    mainHome.style.animation = "animOutSection 125ms ease-out forwards";
    mainFooter.style.animation = "animOutSection 125ms ease-out forwards";
    butScroll.style.animation = "animOutSection 125ms ease-out forwards";
    
    function delayedAnimIn() {
        window.location.href = "/home.html";
    }
    setTimeout(delayedAnimIn, 100);
}

function showNews() {
    mainFooter.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    mainHome.style.animation = "animOutSection 125ms ease-out forwards";
    mainFooter.style.animation = "animOutSection 125ms ease-out forwards";
    
    function delayedAnimIn() {
        window.location.href = "/noticias.html";
    }
    setTimeout(delayedAnimIn, 100);
    }
    navbarNews.addEventListener('click', showNews);

navbarHome.addEventListener('click', showHome);
