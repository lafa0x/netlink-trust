// Import all plugins
import * as bootstrap from 'bootstrap';

// Or import only needed plugins
// import { Tooltip as Tooltip, Toast as Toast, Popover as Popover } from 'bootstrap';

// Or import just one
// import Alert as Alert from '../node_modules/bootstrap/js/dist/alert';

/* loadMoreResult */
/**
	*	Load More Results v1.0.0
	* Author: Cenk Çalgan
	* 
	* Options:
	* - tag (object):
	*		- name (string)
	*		- class (string)
	* - displayedItems (int)
	*	- showItems (int)
	* - button (object):
	*		- class (string)
	*		- text (string)
*/

(function ($) {
	'use strict';

	$.fn.loadMoreResults = function (options) {

		var defaults = {
			tag: {
				name: 'div',
				'class': 'item'
			},
			displayedItems: 6,
			showItems: 6,
			button: {
				'class': 'btn btn-outline mb-5',
				text: 'Load More'
			}
		};

		var opts = $.extend(true, {}, defaults, options);

		var alphaNumRE = /^[A-Za-z][-_A-Za-z0-9]+$/;
		var numRE = /^[0-9]+$/;

		$.each(opts, function validateOptions(key, val) {
			if (key === 'tag') {
				formatCheck(key, val, 'name', 'string');
				formatCheck(key, val, 'class', 'string');
			}
			if (key === 'displayedItems') {
				formatCheck(key, val, null, 'number');
			}
			if (key === 'showItems') {
				formatCheck(key, val, null, 'number');
			}
			if (key === 'button') {
				formatCheck(key, val, 'class', 'string');
			}
		});

		function formatCheck(key, val, prop, typ) {
			if (prop !== null && typeof prop !== 'object') {
				if (typeof val[prop] !== typ || String(val[prop]).match(typ == 'string' ? alphaNumRE : numRE) === null) {
					opts[key][prop] = defaults[key][prop];
				}
			} else {
				if (typeof val !== typ || String(val).match(typ == 'string' ? alphaNumRE : numRE) === null) {
					opts[key] = defaults[key];
				}
			}
		};

		return this.each(function (index, element) {
			var $list = $(element),
					lc = $list.find(' > ' + opts.tag.name + '.' + opts.tag.class).length,
					dc = parseInt(opts.displayedItems),
					sc = parseInt(opts.showItems);
			
			$list.find(' > ' + opts.tag.name + '.' + opts.tag.class + ':lt(' + dc + ')').css("display", "inline-block");
			$list.find(' > ' + opts.tag.name + '.' + opts.tag.class + ':gt(' + (dc - 1) + ')').css("display", "none");

			$list.parent().append('<div class="col-md-12 mb-5 text-center"><button class="btn-view ' + opts.button.class + '">' + opts.button.text + '</button></div>');
			$list.parent().on("click", ".btn-view", function (e) {
				e.preventDefault();
				dc = (dc + sc <= lc) ? dc + sc : lc;
				
				$list.find(' > ' + opts.tag.name + '.' + opts.tag.class + ':lt(' + dc + ')').fadeIn();
				if (dc == lc) {
					$(this).hide();
				}
			});
		});

	};
})(jQuery);





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

    /* Home Slider with Adaptive height */
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


    $('.media-lists').loadMoreResults({
        displayedItems: 6,
        tag: {
            name: 'div',
            'class': 'col-md-4'
        },
        button: {
            'class':'btn btn-outline',
            'text':'Load More'
        }
            
    });

    //changeToogle - Bento Menu
    // $('#bentoToggle').click(function() {

    //     $('#navbarBento').toggleClass('d-none');
    //     $('#navbarClose').toggleClass('d-none');  
      
    // });

});