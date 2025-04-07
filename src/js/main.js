/* FLUID UI */
/* NAV SYS */

function uianimated() {
    var uianimateds = document.querySelectorAll('.uianimated');
  
    for (var i = 0; i < uianimateds.length; i++) {
      var windowheight = window.innerHeight;
      var uianimatedtop = uianimateds[i].getBoundingClientRect().top;
      var uianimatedpoint = 40;
  
      if (uianimatedtop < windowheight - uianimatedpoint) {
        uianimateds[i].classList.add('active');
      } else {
        uianimateds[i].classList.remove('active');
      }
    }
  }
  
  function onPageload() {
    uianimated();
    window.addEventListener('scroll', uianimated);
  }
  
  window.addEventListener('load', onPageload);
  let butScroll = document.getElementById("butScroll");
  window.addEventListener('scroll', scrollFunction);
  
  var prevScrollpos = window.pageYOffset;
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      butScroll.style.display = "block";
      butScroll.style.right = "0px";
    } else {
      butScroll.style.right = "-100px";
    }
  
    var currentScrollPos = window.pageYOffset;
  
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nbaranim").style.bottom = "0px";
      document.getElementById("butScroll").style.bottom = "100px";
    } else {
      document.getElementById("nbaranim").style.bottom = "-70px";
      document.getElementById("butScroll").style.bottom = "40px";
    }
    prevScrollpos = currentScrollPos;
    
    if (currentScrollPos == 0) {
      document.getElementById("nbaranim").style.bottom = "0px";
      document.getElementById("butScroll").style.bottom = "100px";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  topFunction();


/* Video Background Institucional (NÃO UTILIZADO) */

let video = document.getElementById("videoBack");        
let btn = document.getElementById("videoBackBtn");

function videoBG() {
  if (video.paused) {
    video.play();
    btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    video.pause();
    btn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
}

/* Tematização */
/* Tema padrão (0 & 1) */

let themeSet = 1;
var css = function(url, callback) {

  var head = document.getElementsByTagName('head')[0];
  var cssnode = document.createElement('link');

  cssnode.type = 'text/css';
  cssnode.rel = 'stylesheet';
  cssnode.href = url;

  cssnode.onreadystatechange = callback;
  cssnode.onload = callback;

  head.appendChild(cssnode);
}

function setTheme () {
  if (themeSet == 1 || themeSet == null) {
    css('./src/css/themes/theme.css');
  } else if (themeSet == 0) {
    css('./src/css/themes/themeLegacy.css');
  //} else if (themeSet == 2) {
  //  css('./src/css/themes/themeSantWeek.css');
  //} else if (themeSet == 3) {
  //  css('./src/css/themes/themeJuneCelebration.css');
  //} else if (themeSet == 4) {
  //  css('./src/css/themes/themeOctubreISKGTM.css');
  //} else if (themeSet == 5) {
  //  css('./src/css/themes/themeXMAS.css');
  //} else if (themeSet == 10) {
  //  css('./src/css/themes/theme10YEARS.css');
  }
  
}

addEventListener("load", setTheme);


/* Footer */

if (document.title !== "Home | iSKGtm") {

  let mainFooter = document.querySelector('#mainFooter');
  let footerAtribution = document.querySelector('#footerAtribution');

  function showFooter() {
    mainFooter.style.display = "flex"
  }

  addEventListener('load', showFooter);

  function showAtribution() {
    mainFooter.style.animation = "animOutSection 125ms ease-out forwards";
    document.body.style.overflow = 'hidden';
  
    function delayedAnimIn() {
        window.location.href = "/atribuicoes.html";
    }
    setTimeout(delayedAnimIn, 100);
}

  footerAtribution.addEventListener('click', showAtribution);

} else {
  
  function showAtribution () {
    mainHome.style.animation = "animOutSection 125ms ease-out forwards";
    document.body.style.overflow = 'hidden';
    mainFooter.style.display = 'flex';
    mainFooter.style.animation = "animOutSection 125ms ease-out forwards";
  
    function delayedAnimIn() {
        window.location.href = "/atribuicoes.html";
    }
    setTimeout(delayedAnimIn, 100);
}

footerAtribution.addEventListener('click', showAtribution);
}

/* Ano Copyright */

function copyrightYear() {
  const data = new Date();
  document.getElementById("copy").innerText = data.getFullYear();
}

copyrightYear();