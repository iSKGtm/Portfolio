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

let mybutton = document.getElementById("butScroll");

window.onscroll = function() {scrollFunction()};

var prevScrollpos = window.pageYOffset;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nbaranim").style.top = "0";
  } else {
    document.getElementById("nbaranim").style.top = "-85px";
  }
  prevScrollpos = currentScrollPos;
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}