$("#arrow").on("click", function() {
  $("body, html").animate(
    {
      scrollTop: $(".offer").offset().top
    },
    700
  );
});

$("#offer").on("click", function() {
  $("body, html").animate(
    {
      scrollTop: $(".offer").offset().top
    },
    500
  );
  $("menu").fadeOut();
});

$("#about").on("click", function() {
  $("body, html").animate(
    {
      scrollTop: $(".about").offset().top
    },
    500
  );
  $("menu").fadeOut();
});

$("#contact").on("click", function() {
  $("body, html").animate(
    {
      scrollTop: $(".contact").offset().top
    },
    500
  );
  $("menu").fadeOut();
});

$(document).ready(function() {
  $(".menu-icon").click(function() {
    $("menu").fadeToggle();
  });
});

$(document).ready(function() {
  $("body")
    .hide()
    .fadeIn();
});
