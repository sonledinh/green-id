 
$('.slide-banner').slick({
    autoplay: false,
    arrow: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '<a href="javascript:void(0)" class="prev"><i class="fa fa-angle-left"></i></a>',
    nextArrow: '<a href="javascript:void(0)" class="next"><i class="fa fa-angle-right"></i></a>',
}); 

 
$('.slide-new-home').slick({
    autoplay: false,
    arrow: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1, 
    prevArrow: '<a href="javascript:void(0)" class="prev"><i class="fa fa-angle-left"></i></a>',
    nextArrow: '<a href="javascript:void(0)" class="next"><i class="fa fa-angle-right"></i></a>',
    responsive: [
        {
            breakpoint: 1023, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            } 
        }, 
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            } 
        }, 
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});  
 
$('.slide-memb').slick({
    autoplay: false,
    arrow: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 1023, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            } 
        }, 
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            } 
        }, 
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});  
  
$('.slide-part').slick({
    autoplay: false,
    arrow: false,
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 1023, 
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            } 
        }, 
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            } 
        }, 
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
});  


$('.counter-count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
      
      //chnage count up speed here
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

if($(window).innerWidth() >= 768){
    new WOW().init();
}

jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
}); 