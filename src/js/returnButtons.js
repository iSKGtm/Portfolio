//DOM CONNECT
let mainHome = document.querySelector('#mainHome');
let navbarHome = document.querySelector('#navbarHome');
let navbarNews = document.querySelector('#navbarNews');
let mainNews = document.querySelector('#mainNews');
let mainSelectNews = document.querySelector('#mainSelectNews');

let mainFooter = document.querySelector('#mainFooter');
let footerAtribution = document.querySelector('#footerAtribution');

//DOM EVENTS

function showAtribution () {
    mainNews.style.animation = "animOutSection 125ms ease-out forwards";
    mainFooter.style.animation = "animOutSection 125ms ease-out forwards";
    document.body.style.overflow = 'hidden';
  
    function delayedAnimIn() {
        window.location.href = "/atribuicoes.html";
    }
    setTimeout(delayedAnimIn, 100);
}

footerAtribution.addEventListener('click', showAtribution);

if(document.title !== "Home | iSKGtm" || window.location.href !== "Noticias | iSKGtm") {
    function showPage(){
        mainNews.style.display = 'flex';
        mainFooter.style.display = "flex";
        mainNews.style.animation = "animInSection 125ms ease-in";
        mainFooter.style.animation = "animInSection 125ms ease-in";
    }
    
    addEventListener("load", showPage);
    
    function showHome() {
        mainNews.style.animation = "animOutSection 125ms ease-out forwards";
        mainFooter.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        mainFooter.style.animation = "animOutSection 125ms ease-out forwards";
        butScroll.style.animation = "animOutSection 125ms ease-out forwards";
      
        function delayedAnimIn() {
            window.location.href = "/home.html";
        }
        setTimeout(delayedAnimIn, 100);
    }
    
    function showNews() {
        mainNews.style.animation = "animOutSection 125ms ease-out forwards";
        mainFooter.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        mainFooter.style.animation = "animOutSection 125ms ease-out forwards";
      
        function delayedAnimIn() {
            window.location.href = "/noticias.html";
        }
        setTimeout(delayedAnimIn, 100);
      }
      navbarNews.addEventListener('click', showNews);
    
    navbarHome.addEventListener('click', showHome);
} else {
    function showPage(){
        mainNews.style.display = 'flex';
        mainFooter.style.display = "flex";
        mainNews.style.animation = "animInSection 125ms ease-in";
        mainFooter.style.animation = "animInSection 125ms ease-in";
    }
    
    addEventListener("load", showPage);
    
    function showHome() {
        mainNews.style.animation = "animOutSection 125ms ease-out forwards";
        mainFooter.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        mainFooter.style.animation = "animOutSection 125ms ease-out forwards";
        butScroll.style.animation = "animOutSection 125ms ease-out forwards";
      
        function delayedAnimIn() {
            window.location.href = "/home.html";
        }
        setTimeout(delayedAnimIn, 100);
    }
    
    function showNews() {
        mainNews.style.animation = "animOutSection 125ms ease-out forwards";
        mainFooter.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        mainFooter.style.animation = "animOutSection 125ms ease-out forwards";
      
        function delayedAnimIn() {
            window.location.href = "/noticias.html";
        }
        setTimeout(delayedAnimIn, 100);
      }
      navbarNews.addEventListener('click', showNews);
    
    navbarHome.addEventListener('click', showHome);
}

if (document.title == "Noticias | iSKGtm") {

    function showHomeSelect() {
        mainFooter.style.animation = "animOutSection 125ms ease-out forwards";
        document.body.style.overflow = 'hidden';
    
        function delayedAnimIn() {
            window.location.href = "/home.html";
        }
        setTimeout(delayedAnimIn, 100);
    }

    navbarHome.addEventListener('click', showHomeSelect);

}