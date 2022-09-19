$('.owl-carousel, .loop').owlCarousel({
    center: true,
    items:5,
    loop:true,
    margin:10,
    dots:true,
    nav:true,
    responsive:true,
    /*navText:[
        '<i class="fa-solid fa-angle-left"></i>',
        '<i class="fa-solid fa-angle-right"></i>'
    ],*/
    responsive:{
        600:{
            items:5
        }
    }
});

jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

