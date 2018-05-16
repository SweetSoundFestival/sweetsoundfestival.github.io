$(document).ready(function(){



  $("input.submit").click(function(){
    alert ( $("input.q1").val() );
    $.getScript("https://docs.google.com/forms/d/1NtTN7Y9CgedNU5uXQ6mr3_7AUunGKrsdR-bBbGxcT3Q/formResponse?entry.1847439294=" + $("input.q1").val());
  });

});

// Set the date we're counting down to
var countDownDate = new Date("June 8, 2018 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("day").innerHTML = days ;
    document.getElementById("hour").innerHTML = hours ;
    document.getElementById("minute").innerHTML = minutes ;
    document.getElementById("second").innerHTML = seconds ;


    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("s1__counter").innerHTML = "府城開唱";
    }
}, 1000);

// progressive-image.js
if (window.addEventListener && window.requestAnimationFrame && document.getElementsByClassName) window.addEventListener('load', function() {

  // start
  var pItem = document.getElementsByClassName('progressive replace'), timer;

  window.addEventListener('scroll', scroller, false);
  window.addEventListener('resize', scroller, false);
  inView();


  // throttled scroll/resize
  function scroller(e) {

    timer = timer || setTimeout(function() {
      timer = null;
      requestAnimationFrame(inView);
    }, 300);

  }


  // image in view?
  function inView() {

    var wT = window.pageYOffset, wB = wT + window.innerHeight, cRect, pT, pB, p = 0;
    while (p < pItem.length) {

      cRect = pItem[p].getBoundingClientRect();
      pT = wT + cRect.top;
      pB = pT + cRect.height;

      if (wT < pB && wB > pT) {
        loadFullImage(pItem[p]);
        pItem[p].classList.remove('replace');
      }
      else p++;

    }

  }


  // replace with full image
  function loadFullImage(item) {

    if (!item || !item.href) return;

    // load image
    var img = new Image();
    if (item.dataset) {
      img.srcset = item.dataset.srcset || '';
      img.sizes = item.dataset.sizes || '';
    }
    img.src = item.href;
    img.className = 'reveal';
    if (img.complete) addImg();
    else img.onload = addImg;

    // replace image
    function addImg() {

      // disable click
      item.addEventListener('click', function(e) { e.preventDefault(); }, false);

      // add full image
      item.appendChild(img).addEventListener('animationend', function(e) {

        // remove preview image
        var pImg = item.querySelector && item.querySelector('img.preview');
        if (pImg) {
          e.target.alt = pImg.alt || '';
          item.removeChild(pImg);
          e.target.classList.remove('reveal');
        }

      });

    }

  }

}, false);
