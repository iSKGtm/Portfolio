var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nbaranim").style.top = "0";
    } else {
      document.getElementById("nbaranim").style.top = "-76px";
    }
    prevScrollpos = currentScrollPos;
  }
  
  // Barra de navegação responsiva, com scroll up após rolar a pagina para baixo, acontece ao efeito reverso também.