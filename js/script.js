$(document).ready(function () {

$('[data-toggle="tooltip"]').tooltip();

  $(".down-arrow").click(function() {
      $('html, body').animate({
          scrollTop: $("#skills-section").offset().top
      }, 1500);
  });

  $("#contactme").click(function() {
      $('html, body').animate({
          scrollTop: $("#contact-section").offset().top
      }, 1500);
  });

});
