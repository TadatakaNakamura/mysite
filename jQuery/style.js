
$(function() {
  　$('.down1').hover(
  　　function(){
  　　　$('.submenu1 li').slideDown(230);
  　　},
  　　function(){
  　　　$('.submenu1 li').hide();
  　});
});

$(function() {
  　$('.down2').hover(
  　　function(){
  　　　$('.submenu2 li').slideDown(230);
  　　},
  　　function(){
  　　　$('.submenu2 li').hide();
  　});
});

$(function() {
  　$('.down3').hover(
  　　function(){
  　　　$('.submenu3 li').slideDown(230);
  　　},
  　　function(){
  　　　$('.submenu3 li').hide();
  　});
});

$(function() {
  　$('.down4').hover(
  　　function(){
  　　　$('.submenu4 li').slideDown(230);
  　　},
  　　function(){
  　　　$('.submenu4 li').hide();
  　});
});

$(function() {
  　$('.down5').hover(
  　　function(){
  　　　$('.submenu5 li').slideDown(230);
  　　},
  　　function(){
  　　　$('.submenu5 li').hide();
  　});
});

$(function() {
  　$('.down6').hover(
  　　function(){
  　　　$('.submenu6 li').slideDown(230);
  　　},
  　　function(){
  　　　$('.submenu6 li').hide();
  　});
});

$(window).on('resize', function () {
  　if (window.matchMedia('(min-width:1202px)').matches) {
  　　$(".h-nav").slideUp(200);
  　}
  });

$(function() {
  　$('.h-down1').hover(
  　　function(){
  　　　$('.h-submenu1 li').slideDown(230);
  　　},
  　　function(){
  　　　$('.h-submenu1 li').hide();
  　});
});

$(function() {
  　$('.h-down2').hover(
  　　function(){
  　　　$('.h-submenu2 li').slideDown(230);
  　　},
  　　function(){
  　　　$('.h-submenu2 li').hide();
  　});
});

$(function() {
  　$('.h-down3').hover(
  　　function(){
  　　　$('.h-submenu3 li').slideDown(230);
  　　},
  　　function(){
  　　　$('.h-submenu3 li').hide();
  　});
});

$(function() {
  　$('.h-down4').hover(
  　　function(){
  　　　$('.h-submenu4 li').slideDown(230);
  　　},
  　　function(){
  　　　$('.h-submenu4 li').hide();
  　});
});

$(function() {
  　$('.h-down5').hover(
  　　function(){
  　　　$('.h-submenu5 li').slideDown(230);
  　　},
  　　function(){
  　　　$('.h-submenu5 li').hide();
  　});
});

$(function() {
  　$('.h-down6').hover(
  　　function(){
  　　　$('.h-submenu6 li').slideDown(230);
  　　},
  　　function(){
  　　　$('.h-submenu6 li').hide();
  　});
});

$(function() {
  $('button').on('click',function() {
    $('.p-hamburger').toggleClass('is-open');
    $('.h-nav').slideToggle(230);
  });
});

$(function() {
  $('.h-down1').hover(
    function() {
      $('.close1').toggleClass('is-open');
  });
});

$(function() {
  $('.h-down2').hover(
    function() {
      $('.close2').toggleClass('is-open');
  });
});

$(function() {
  $('.h-down4').hover(
    function() {
      $('.close4').toggleClass('is-open');
  });
});

$(function() {
  $('.h-down5').hover(
    function() {
      $('.close5').toggleClass('is-open');
  });
});

$(function() {
  $('.h-down6').hover(
    function() {
      $('.close6').toggleClass('is-open');
  });
});

