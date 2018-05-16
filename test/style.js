$(document).ready(function(){



  $("input.submit").click(function(){
    alert ( $("input.q1").val() );
    $.getScript("https://docs.google.com/forms/d/1NtTN7Y9CgedNU5uXQ6mr3_7AUunGKrsdR-bBbGxcT3Q/formResponse?entry.1847439294=" + $("input.q1").val());
  });

  /*if($(document).width > "768px") {

    $("#sj__pic").hover(function() {
      $("#sj__word").toggle();
    });

    $("#bug__pic").hover(function() {
      $("#bug__word").toggle();
    });

    $("#os__pic").hover(function() {
      $("#os__word").toggle();
    });

    $("#byg__pic").hover(function() {
      $("#byg__word").toggle();
    });

    $("#egg__pic").hover(function() {
      $("#egg__word").toggle();
    });

    $("#cons__pic").hover(function() {
      $("#cons__word").toggle();
    });

  }*/






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
        document.getElementById("s1__counter").innerHTML = "開唱啦";
    }
}, 1000);
