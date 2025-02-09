//DOM CONNECT
let newsProgress = document.querySelector('#newsProgress');
let newsProgressDev = document.querySelector('#newsProgressDev');
let newsProgressMusicas = document.querySelector('#newsProgressMusicas');
let newsProgressProducoes = document.querySelector('#newsProgressProducoes');
let newsProgressSobre = document.querySelector('#newsProgressSobre');

//DOM EVENTS

function resetNewsProgressHome() {
    function delayedReset() {
        newsProgressDev.style.width = "0%";
        newsProgressMusicas.style.width = "0%";
        newsProgressProducoes.style.width = "0%";
        newsProgressSobre.style.width = "0%";
    }
    setTimeout(delayedReset, 300);
}

function resetNewsProgress() {
    function delayedReset() {
        newsProgress.style.width = "0%";
    }
    setTimeout(delayedReset, 300);
}


function countNewsProgressHome() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    
    newsProgressDev.style.width = scrolled + "%";
    newsProgressMusicas.style.width = scrolled + "%";
    newsProgressProducoes.style.width = scrolled + "%";
    newsProgressSobre.style.width = scrolled + "%";

    if (winScroll == 0) {
        resetNewsProgressHome();
    }
}

function countNewsProgress() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    
    newsProgress.style.width = scrolled + "%";

    if (winScroll == 0) {
        resetNewsProgress();
    }
}


if (document.title == "Home | iSKGtm") {
    window.addEventListener("scroll", countNewsProgressHome);
} else {
    window.addEventListener("scroll", countNewsProgress);
}