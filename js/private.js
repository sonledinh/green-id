 
$('.slide-banner').slick({
    autoplay: false,
    arrow: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
});  



if($(window).innerWidth() >= 1024){
    $(document).ready(function(){
       $(window).bind('scroll', function() {
             if ($(window).scrollTop() > 37) {
                 $('.header-menu, main').addClass('fixed');
             }
             else {
                 $('.header-menu, main').removeClass('fixed');
             }
        });
    });
}


jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
}); 