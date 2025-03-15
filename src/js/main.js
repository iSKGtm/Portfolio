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


/* Video Background */

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