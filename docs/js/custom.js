function burgerMenuClicked(sender){
  sender.classList.toggle('active');
  document.querySelector('#main-menu').classList.toggle('show');
}

// $(document).ready(function() {
//   $('#header .holder .menu-icon .hj8l52-3').click(function() {
//       $('#header .holder .menu-icon .bars').toggleClass('JGHjp');
//       $('#header .holder .menu-icon .bar1').toggleClass('gMWLqb');
//       $('#header .holder .menu-icon .bar2').toggleClass('hlQdsO');
//       $('#header .holder .menu-icon .bar3').toggleClass('ezCxEq');
//       $('#header .main-menu').toggleClass('open');
//       $('#wrapper').toggleClass('open');
//   });
// });

// $(document).ready(function () {
//   $(".img-text .img-hold").hover(
//     function () {
//       $(this).addClass("box-open");
//     },
//     function () {
//       $(this).removeClass("box-open");
//     }
//   );
// });