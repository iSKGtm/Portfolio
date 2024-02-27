(function() {
    "use strict";
    let countdown = document.querySelector('.countdown');
    let output = countdown.innerHTML;
    let textCount = document.querySelector('#titLabelCount');
    let titLabel = document.querySelector('.titLabel1');
    let countdownOFF = document.querySelector('#countdownCSS');
    let fixOpacity = document.querySelector('.d-flex');

    const countDownDate = function() {
      const targetDate = new Date(countdown.dataset.count);
      const offset = 6e4 * targetDate.getTimezoneOffset();
      let timeleft = targetDate.getTime() - Date.now() + offset;
      let days = ~~(timeleft / 864e5);
      let hours = ~~((timeleft % 864e5) / 36e5);
      let minutes = ~~((timeleft % 36e5) / 6e4);
      let seconds = ~~((timeleft % 6e4) / 1e3);

      countdown.innerHTML = output.replace('%d', days).replace('%h', hours).replace('%m', minutes).replace('%s', seconds);
      
      if(timeleft > 0) {
        titLabel.style.display = "none";
        textCount.classList.remove('textOFF');
        countdownOFF.style.transform = 'scale(1.0)';
        fixOpacity.style.opacity = '1';
        textCount.style.opacity = '1';
      }else {
        countdownOFF.style.transform = 'scale(0.0)';
        textCount.classList.add('textOFF');
        titLabel.style.display = "flex";
        fixOpacity.style.opacity = '0';
        textCount.style.opacity = '0';
      }
    }
    countDownDate();
    setInterval(countDownDate, 1e3);
  })()