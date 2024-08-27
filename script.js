(function ($) {
    "use strict";

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
        // Initiate the wowjs
        new WOW().init();

        // Back to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });
        $('.back-to-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
            return false;
        });
   // scroll smooth
    $('a[href^="#"]').on('click',function(e) {e.preventDefault(); var target = $ (this.getAttribute('href'));
        if (target.length) { $('html,body').animate({scrollTop:target.offset().top },1000); }
    });
})(jQuery);




