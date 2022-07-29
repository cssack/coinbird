$(document).ready(function() {
  $('#header .holder .menu-icon .hj8l52-3').click(function() {
      $('#header .holder .menu-icon .hj8l52-3').toggleClass('JGHjp');
      $('#header .holder .menu-icon .hj8l52-0').toggleClass('gMWLqb');
      $('#header .holder .menu-icon .hj8l52-1').toggleClass('hlQdsO');
      $('#header .holder .menu-icon .hj8l52-2').toggleClass('ezCxEq');
      $('#header .main-menu').toggleClass('open');
      $('#wrapper').toggleClass('open');
  });
});

$(document).ready(function () {
  $(".img-text .img-hold").hover(
    function () {
      $(this).addClass("box-open");
    },
    function () {
      $(this).removeClass("box-open");
    }
  );
});