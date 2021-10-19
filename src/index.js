// Import all plugins
import * as bootstrap from 'bootstrap';

// Or import only needed plugins
// import { Tooltip as Tooltip, Toast as Toast, Popover as Popover } from 'bootstrap';

// Or import just one
// import Alert as Alert from '../node_modules/bootstrap/js/dist/alert';






// Then add additional custom code here

$(function () {

    // Using '$' instead of 'jQuery' in WordPress
    // jQuery( function($) {

    feather.replace();

    /* Client Logo slider with Adaptive height */
    $('.client-logo-slider').slick({
        dots: false,
        infinite: true,
        centerPadding: '60px',
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: '<i class="bi bi-arrow-right-short slick-next slick-arrow"></i>',
        prevArrow: '<i class="bi bi-arrow-left-short slick-prev slick-arrow"></i>'
    });

    /* Article slider with Adaptive height */
    $('.article-slider').slick({
        dots: false,
        infinite: true,
        centerPadding: '60px',
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: '<i class="bi bi-arrow-right-short slick-next slick-arrow"></i>',
        prevArrow: '<i class="bi bi-arrow-left-short slick-prev slick-arrow"></i>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    if ($(window).width() >= 590) { dotCustomSlider(); }

    $(window).on('resize', function () {

        console.log("resized");

        if ($(window).width() >= 590) { dotCustomSlider(); }

    });

    function dotCustomSlider() {

        /* Homepage slider with Adaptive height */
        $('.full-slider').on('init', function (event, slick) {
            var dots = $('.slick-dots li');
            console.log('SRANZAN VEE');
            dots.each(function (k, v) {
                $(this).find('button').addClass('heading' + k);
            });
            var items = slick.$slides;
            items.each(function (k, v) {
                var text = $(this).find('h2').text();
                $('.heading' + k).text(text);
            });

        });


    }

    $('.full-slider').slick({
        dots: true,
        infinite: true,
        focusOnSelect: true,
        arrows: true,
        speed: 500,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<i class="bi bi-arrow-right-short slick-next slick-arrow"></i>',
        prevArrow: '<i class="bi bi-arrow-left-short slick-prev slick-arrow"></i>'
    });

});