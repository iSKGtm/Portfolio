//DOM CONNECT

let mainHome = document.querySelector('#mainHome');
let mainFooter = document.querySelector('#mainFooter');
let footerAtribution = document.querySelector('#footerAtribution');
let navbarNews = document.querySelector('#navbarNews');
let mainSelectNews = document.querySelector('#mainSelectNews');

let homeSelectionTitleIMG = document.querySelector('.homeSelectionTitleIMG');
let sectionDevButton = document.querySelector('#sectionDevButton');
let sectionMusicasButton = document.querySelector('#sectionMusicasButton');
let sectionProducoesButton = document.querySelector('#sectionProducoesButton');
let sectionSobreButton = document.querySelector('#sectionSobreButton');

let sectionHome = document.querySelector('#sectionHome');
let sectionDev = document.querySelector('#sectionDev');
let sectionMusicas = document.querySelector('#sectionMusicas');
let sectionProducoes = document.querySelector('#sectionProducoes');
let sectionSobre = document.querySelector('#sectionSobre');

//DOM EVENTS

function showNews() {
    mainHome.style.animation = "animOutSection 125ms ease-out";
    document.body.style.overflow = 'hidden';
    mainFooter.style.display = 'flex';
    mainFooter.style.animation = "animOutSection 125ms ease-out";
  
    function delayedAnimIn() {
        window.location.href = "noticias";
    }
    setTimeout(delayedAnimIn, 100);
  }
  navbarNews.addEventListener('click', showNews);

function showSectionButtons(){
    mainFooter.style.display = 'none';
    homeSelectionTitleIMG.style.animation = "fadeInSemear 300ms";
    sectionDevButton.style.animation = "fadeInSemear 300ms";
    sectionMusicasButton.style.animation = "fadeInSemear 300ms";
    sectionProducoesButton.style.animation = "fadeInSemear 300ms";
    sectionSobreButton.style.animation = "fadeInSemear 300ms";
}

function hideSectionButtons(){
    mainFooter.style.display = 'flex';
    homeSelectionTitleIMG.style.animation = "fadeOutSemear 300ms";
    sectionDevButton.style.animation = "fadeOutSemear 300ms";
    sectionMusicasButton.style.animation = "fadeOutSemear 300ms";
    sectionProducoesButton.style.animation = "fadeOutSemear 300ms";
    sectionSobreButton.style.animation = "fadeOutSemear 300ms";
}

function showSectionHome(){
    showSectionButtons();
    document.body.style.overflow = 'hidden';
    sectionHome.style.animation = "animInSection 0ms ease-in";
    sectionDev.style.animation = "animOutSection 125ms ease-out";
    sectionMusicas.style.animation = "animOutSection 125ms ease-out";
    sectionProducoes.style.animation = "animOutSection 125ms ease-out";
    sectionSobre.style.animation = "animOutSection 125ms ease-out";

    navbarHome.classList.add('ToolbarIconActive');

    function delayedAnimIn() {
        document.body.style.overflow = 'auto';
        sectionHome.style.display = 'flex';
        sectionDev.style.display = 'none';
        sectionMusicas.style.display = 'none';
        sectionProducoes.style.display = 'none';
        sectionSobre.style.display = 'none';
    }
    setTimeout(delayedAnimIn, 100);
}
navbarHome.addEventListener('click', showSectionHome);
addEventListener('load', showSectionHome);

function showSectionDev(){
    hideSectionButtons();
    document.body.style.overflow = 'hidden';
    sectionHome.style.animation = "animOutSection 0ms ease-out";
    sectionDev.style.animation = "animInSection 125ms ease-in";
    sectionMusicas.style.animation = "animOutSection 125ms ease-out";
    sectionProducoes.style.animation = "animOutSection 125ms ease-out";
    sectionSobre.style.animation = "animOutSection 125ms ease-out";

    navbarHome.classList.remove('ToolbarIconActive');

    function delayedAnimIn() {
        document.body.style.overflow = 'auto';
        sectionHome.style.display = 'none';
        sectionDev.style.display = 'flex';
        sectionMusicas.style.display = 'none';
        sectionProducoes.style.display = 'none';
        sectionSobre.style.display = 'none';
    }
    setTimeout(delayedAnimIn, 100);
}
sectionDevButton.addEventListener('click', showSectionDev);

function showSectionMusicas(){
    hideSectionButtons();
    document.body.style.overflow = 'hidden';
    sectionHome.style.animation = "animOutSection 0ms ease-out";
    sectionDev.style.animation = "animOutSection 125ms ease-out";
    sectionMusicas.style.animation = "animInSection 125ms ease-in";
    sectionProducoes.style.animation = "animOutSection 125ms ease-out";
    sectionSobre.style.animation = "animOutSection 125ms ease-out";

    navbarHome.classList.remove('ToolbarIconActive');

    function delayedAnimIn() {
        document.body.style.overflow = 'auto';
        sectionHome.style.display = 'none';
        sectionDev.style.display = 'none';
        sectionMusicas.style.display = 'flex';
        sectionProducoes.style.display = 'none';
        sectionSobre.style.display = 'none';
    }
    setTimeout(delayedAnimIn, 100);
}
sectionMusicasButton.addEventListener('click', showSectionMusicas);

function showSectionProducoes(){
    hideSectionButtons();
    document.body.style.overflow = 'hidden';
    sectionHome.style.animation = "animOutSection 0ms ease-out";
    sectionDev.style.animation = "animOutSection 125ms ease-out";
    sectionMusicas.style.animation = "animOutSection 125ms ease-out";
    sectionProducoes.style.animation = "animInSection 125ms ease-in";
    sectionSobre.style.animation = "animOutSection 125ms ease-out";

    navbarHome.classList.remove('ToolbarIconActive');

    function delayedAnimIn() {
        document.body.style.overflow = 'auto';
        sectionHome.style.display = 'none';
        sectionDev.style.display = 'none';
        sectionMusicas.style.display = 'none';
        sectionProducoes.style.display = 'flex';
        sectionSobre.style.display = 'none';
    }
    setTimeout(delayedAnimIn, 100);
}
sectionProducoesButton.addEventListener('click', showSectionProducoes);

function showSectionSobre(){
    hideSectionButtons();
    document.body.style.overflow = 'hidden';
    sectionHome.style.animation = "animOutSection 0ms ease-out";
    sectionDev.style.animation = "animOutSection 125ms ease-out";
    sectionMusicas.style.animation = "animOutSection 125ms ease-out";
    sectionProducoes.style.animation = "animOutSection 125ms ease-out";
    sectionSobre.style.animation = "animInSection 125ms ease-in";

    navbarHome.classList.remove('ToolbarIconActive');

    function delayedAnimIn() {
        document.body.style.overflow = 'auto';
        sectionHome.style.display = 'none';
        sectionDev.style.display = 'none';
        sectionMusicas.style.display = 'none';
        sectionProducoes.style.display = 'none';
        sectionSobre.style.display = 'flex';
    }
    setTimeout(delayedAnimIn, 100);
}
sectionSobreButton.addEventListener('click', showSectionSobre);