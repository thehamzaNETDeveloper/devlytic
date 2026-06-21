(function ($) {
    "use strict";
     /*********************************
     * Table of Context
     * *******************************/
    
     /*********************************
    /* Preloader Start
    *********************************/
    $(window).on('load', function() {
        $('#web__preloader').addClass('loaded');
        setTimeout(function() {
            $('#preloader').remove();
        }, 1000); // 1 second delay to remove preloader
    });
    
    /*********************************
    /* Sticky Navbar
    *********************************/
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var stikey = $(".header");

        if (scrolling >= 50) {
            $(stikey).addClass("nav-bg");
        } else {
            $(stikey).removeClass("nav-bg");
        }
    });


    /*********************************
    /*  Mobile Menu Flyout Menu
    *********************************/
    $(".header__toggle").on("click", function (event) {
        event.preventDefault();
        $(".flyoutMenu").toggleClass("active");
    });
    $(".closest__btn").on("click", function (event) {
        event.preventDefault();
        $(".flyoutMenu").toggleClass("active");
    });

    $(document).on("click", function (e) {
        if ($(e.target).closest(".flyout__flip").length === 0 && $(e.target).closest(".header__toggle").length === 0) {
            $(".flyoutMenu").removeClass("active");
        }
    });

    /*********************************
    /*  Mobile Menu Expand
    *********************************/
   $(".flyout-main__menu .nav__link").on("click", function (event) {
       event.preventDefault();
    //    $(".has__dropdown").find(".sub__menu").slideUp();
        $(this).parent(".has__dropdown").find(".sub__menu").slideToggle();
    });


    /*********************************
    /*  Banner Slider Carousel
    *********************************/
    if ($(".banner__slider").length > 0) {
        var swiper = new Swiper(".banner__slider", {
            direction: "horizontal",
            loop: true,
            grabCursor: true,
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 500,
            effect: 'fade',
            centeredSlides: false,
            freeMode: false,
            autoplay: {
                enabled: true,
            },
            navigation: {
                nextEl: ".banner-swipe-next",
                prevEl: ".banner-swipe-prev",
            },
            pagination: {                       //pagination(dots)
                el: '.swiper-pagination',
            },
        });
    }


    /*********************************
    /*  Project Slider Carousel
    *********************************/
    if ($(".project__slider").length > 0) {
        var swiper = new Swiper(".project__slider", {
            direction: "horizontal",
            loop: true,
            grabCursor: true,
            slidesPerView: "auto",
            spaceBetween: 20,
            speed: 500,
            centeredSlides: false,
            freeMode: false,
            autoplay: {
                enabled: true,
            },
            navigation: {
                nextEl: ".project-swipe-next",
                prevEl: ".project-swipe-prev",
            },
            
            breakpoints: {
                300: {
                    slidesPerView: 1.2,
                },
                479: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 2.2,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 2.3,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3.2,
                    spaceBetween: 20,
                },
                1199: {
                    slidesPerView: 3.8,
                },
                
            },
        });
    }

    /*********************************
    /*  Testimonial Slider Carousel
    *********************************/
    if ($(".testimonial__slider").length > 0) {
        var mySwiper = new Swiper ('.testimonial__slider', {
            direction: 'vertical',
            effect: 'slide',
            slidesPerView: 'auto',
            spaceBetween: 30,
            centeredSlides: true,
            grabCursor: true,
            loop: true,
            autoplay: {
                delay: 2000,
                reverseDirection: true,
                disableOnInteraction: false,
            },
            breakpoints: {
                300: {
                    direction: 'horizontal',
                    slidesPerView: 1,
                },
                479: {
                    direction: 'horizontal',
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                767: {
                    direction: 'horizontal',
                    centeredSlides: false,
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    direction: 'vertical',
                    slidesPerView: 2.3,
                    spaceBetween: 20,
                },
            },
        })
    }

    /*********************************
    /*  Testimonial Slider Carousel
    *********************************/
    if ($(".testimonial__slider-v2").length > 0) {
        var mySwiper = new Swiper ('.testimonial__slider-v2', {
            // direction: 'vertical',
            effect: 'slide',
            slidesPerView: 'auto',
            spaceBetween: 30,
            centeredSlides: true,
            grabCursor: true,
            loop: true,
            autoplay: {
                delay: 2000,
                reverseDirection: true,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".testimonial-swipe-next",
                prevEl: ".testimonial-swipe-prev",
            },
            breakpoints: {
                300: {
                    direction: 'horizontal',
                    slidesPerView: 1,
                },
                479: {
                    direction: 'horizontal',
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                767: {
                    direction: 'horizontal',
                    centeredSlides: false,
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    // direction: 'vertical',
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            },
        })
    }

	
    /*********************************
    /*  Partner Slider Carousel
    *********************************/
    if ($(".partner__slider").length > 0) {
        var swiper = new Swiper(".partner__slider", {
            direction: "horizontal",
            loop: true,
            grabCursor: true,
            slidesPerView: "auto",
            spaceBetween: 30,
            speed: 500,
            centeredSlides: false,
            freeMode: false,
            autoplay: {
                enabled: true,
                // delay: 1,
                // pauseOnMouseEnter: true,
                // disableOnInteraction: false,
            },
            // centerInsufficientSlides: true,
            
            breakpoints: {
                300: {
                    slidesPerView: 2,
                },
                375: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                479: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 3.5,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1199: {
                    slidesPerView: 5,
                },
                
            },
        });
    }
    
     /*********************************
    /*  Accordion
    *********************************/
    
    $("#my-accordion").accordionjs({
        // Allow self close.(data-close-able)
        closeAble   : true,
        // Close other sections.(data-close-other)
        closeOther  : true,
        // Animation Speed.(data-slide-speed)
        slideSpeed  : 250,
        // The section open on first init. A number from 1 to X or false.(data-active-index)
        activeIndex : 1,

    });

    /**********************************
     *  Odometer Conter
     **********************************/
    $('.counter__count').appear(function (e) {
        var odo = $(".counter__count");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    /**********************************
     *  Mixitup
     **********************************/

    if ($(".filter").length > 0) {
        mixitup(".filter");

    }
    
    /**********************************
     *  Wow animation
     **********************************/
    const wow = new WOW({
        animateClass: "animated",
        offset: -100,
    });
    wow.init();


    /**********************************
     *  Back to Top JS 
     **********************************/
    $('body').append('<div id="toTop" class="back__icon"><i class="fa-solid fa-arrow-up"></i></div>');
    $(window).on('scroll', function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').addClass('active');
        } else {
            $('#toTop').removeClass('active');
        }
    });
    $('#toTop').on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 0);
        return false;
    });

    /**********************************
     *  Toolbar JS 
     **********************************/
    $(".toolbar__btn").on("click", function (event) {
        event.preventDefault();
        $(".toolbar__sidebar").toggleClass("active");
    });

    // $(window).on("scroll", function () {
    //     $(".toolbar__sidebar").removeClass("active");
    // });

    $(document).on("click", function (e) {
        if ($(e.target).closest(".toolbar__sidebar").length === 0 && $(e.target).closest(".toolbar__btn").length === 0) {
            $(".toolbar__sidebar").removeClass("active");
        }
    });


    $(document).ready(function() {
        $(document).on('click', ".color__boxed a", function(event) {
            event.preventDefault();
            $(".color__boxed a").removeClass("clr-active");
            $(this).addClass("clr-active");
        });
    });



})(jQuery);
