// Import all plugins
import * as bootstrap from 'bootstrap'
// import * as jQuery from 'jquery'


//import mmenu
// import * as mmenu from 'mmenu';

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
				'class': 'btn btn-outline',
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

			$list.parent().append('<div class="col-md-12 text-center"><button class="btn-view ' + opts.button.class + '">' + opts.button.text + '</button></div>');
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
    // $('.client-logo-slider').slick({
    //     dots: false,
    //     infinite: true,
    //     centerPadding: '60px',
    //     speed: 300,
    //     slidesToShow: 4,
    //     adaptiveHeight: true,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><g id="arrow-right-circle-fill" transform="translate(-10.125 -10.124)"><path id="Path_2" data-name="Path 2" d="M21.359,32.072A1.788,1.788,0,1,0,23.888,34.6L34.6,23.888a1.785,1.785,0,0,0,0-2.528L23.888,10.648a1.788,1.788,0,1,0-2.528,2.528l7.665,7.662H11.91a1.785,1.785,0,0,0,0,3.571H29.025l-7.667,7.664Z" fill="#1697d9" fill-rule="evenodd"/></g></svg>',
    //     prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="24.998" height="25" viewBox="0 0 24.998 25"><g id="arrow-left-circle-fill" transform="translate(0 -10.124)"><path id="Path_1" data-name="Path 1" d="M23.888,32.072A1.788,1.788,0,0,1,21.36,34.6L10.648,23.888a1.785,1.785,0,0,1,0-2.528L21.36,10.648a1.788,1.788,0,1,1,2.528,2.528l-7.667,7.662H33.336a1.785,1.785,0,0,1,0,3.571H16.222l7.667,7.664Z" transform="translate(-10.123 0)" fill="#1697d9" fill-rule="evenodd"/></g></svg> ',
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 4,
    //                 slidesToScroll: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 769,
    //             settings: {
    //                 // rows: 2,
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 375,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }

    //     ]
    // });

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
        nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><g id="arrow-right-circle-fill" transform="translate(-10.125 -10.124)"><path id="Path_2" data-name="Path 2" d="M21.359,32.072A1.788,1.788,0,1,0,23.888,34.6L34.6,23.888a1.785,1.785,0,0,0,0-2.528L23.888,10.648a1.788,1.788,0,1,0-2.528,2.528l7.665,7.662H11.91a1.785,1.785,0,0,0,0,3.571H29.025l-7.667,7.664Z" fill="#1697d9" fill-rule="evenodd"/></g></svg>',
        prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="24.998" height="25" viewBox="0 0 24.998 25"><g id="arrow-left-circle-fill" transform="translate(0 -10.124)"><path id="Path_1" data-name="Path 1" d="M23.888,32.072A1.788,1.788,0,0,1,21.36,34.6L10.648,23.888a1.785,1.785,0,0,1,0-2.528L21.36,10.648a1.788,1.788,0,1,1,2.528,2.528l-7.667,7.662H33.336a1.785,1.785,0,0,1,0,3.571H16.222l7.667,7.664Z" transform="translate(-10.123 0)" fill="#1697d9" fill-rule="evenodd"/></g></svg> ',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
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

    /* Article slider with Adaptive height */
    $('.notice-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });    

    if ($(window).width() >= 590) { 
        
        dotCustomSlider(); 
    
    }else {

        console.log("slider initialized ");

        /* Home Slider with Adaptive height */
        $('.full-slider').slick({
            dots: true,
            infinite: true,
            focusOnSelect: true,
            speed: 500,
            autoplaySpeed: 5000,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,

            nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><g id="arrow-right-circle-fill" transform="translate(-10.125 -10.124)"><path id="Path_2" data-name="Path 2" d="M21.359,32.072A1.788,1.788,0,1,0,23.888,34.6L34.6,23.888a1.785,1.785,0,0,0,0-2.528L23.888,10.648a1.788,1.788,0,1,0-2.528,2.528l7.665,7.662H11.91a1.785,1.785,0,0,0,0,3.571H29.025l-7.667,7.664Z" fill="#1697d9" fill-rule="evenodd"/></g></svg>',
            prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="24.998" height="25" viewBox="0 0 24.998 25"><g id="arrow-left-circle-fill" transform="translate(0 -10.124)"><path id="Path_1" data-name="Path 1" d="M23.888,32.072A1.788,1.788,0,0,1,21.36,34.6L10.648,23.888a1.785,1.785,0,0,1,0-2.528L21.36,10.648a1.788,1.788,0,1,1,2.528,2.528l-7.667,7.662H33.336a1.785,1.785,0,0,1,0,3.571H16.222l7.667,7.664Z" transform="translate(-10.123 0)" fill="#1697d9" fill-rule="evenodd"/></g></svg> '
        });   
         
    }

    $(window).on('resize', function () {

        console.log("resized");

        if ($(window).width() >= 590) { 
            
            dotCustomSlider(); 
        }else {
                    
            /* Home Slider with Adaptive height */
            $('.full-slider').slick({
                dots: true,
                infinite: true,
                focusOnSelect: true,
                speed: 500,
                autoplaySpeed: 5000,
                fade: true,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: 1,

                nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><g id="arrow-right-circle-fill" transform="translate(-10.125 -10.124)"><path id="Path_2" data-name="Path 2" d="M21.359,32.072A1.788,1.788,0,1,0,23.888,34.6L34.6,23.888a1.785,1.785,0,0,0,0-2.528L23.888,10.648a1.788,1.788,0,1,0-2.528,2.528l7.665,7.662H11.91a1.785,1.785,0,0,0,0,3.571H29.025l-7.667,7.664Z" fill="#1697d9" fill-rule="evenodd"/></g></svg>',
                prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="24.998" height="25" viewBox="0 0 24.998 25"><g id="arrow-left-circle-fill" transform="translate(0 -10.124)"><path id="Path_1" data-name="Path 1" d="M23.888,32.072A1.788,1.788,0,0,1,21.36,34.6L10.648,23.888a1.785,1.785,0,0,1,0-2.528L21.36,10.648a1.788,1.788,0,1,1,2.528,2.528l-7.667,7.662H33.336a1.785,1.785,0,0,1,0,3.571H16.222l7.667,7.664Z" transform="translate(-10.123 0)" fill="#1697d9" fill-rule="evenodd"/></g></svg> '
            });  
        }

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
                var text = $(this).find('h1').text();
                $('.heading' + k).html("<span>"+ text + "</span>");
            });

        });


    }

            
        /* Home Slider with Adaptive height */
        $('.full-slider').slick({
            dots: true,
            infinite: true,
            focusOnSelect: true,
            speed: 500,
            autoplaySpeed: 5000,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,

            nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><g id="arrow-right-circle-fill" transform="translate(-10.125 -10.124)"><path id="Path_2" data-name="Path 2" d="M21.359,32.072A1.788,1.788,0,1,0,23.888,34.6L34.6,23.888a1.785,1.785,0,0,0,0-2.528L23.888,10.648a1.788,1.788,0,1,0-2.528,2.528l7.665,7.662H11.91a1.785,1.785,0,0,0,0,3.571H29.025l-7.667,7.664Z" fill="#1697d9" fill-rule="evenodd"/></g></svg>',
            prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="24.998" height="25" viewBox="0 0 24.998 25"><g id="arrow-left-circle-fill" transform="translate(0 -10.124)"><path id="Path_1" data-name="Path 1" d="M23.888,32.072A1.788,1.788,0,0,1,21.36,34.6L10.648,23.888a1.785,1.785,0,0,1,0-2.528L21.36,10.648a1.788,1.788,0,1,1,2.528,2.528l-7.667,7.662H33.336a1.785,1.785,0,0,1,0,3.571H16.222l7.667,7.664Z" transform="translate(-10.123 0)" fill="#1697d9" fill-rule="evenodd"/></g></svg> '
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

    document.addEventListener("DOMContentLoaded", function(){
        // make it as accordion for smaller screens
        if (window.innerWidth > 992) {
        
            document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
        
                everyitem.addEventListener('mouseover', function(e){
        
                    let el_link = this.querySelector('a[data-bs-toggle]');
        
                    if(el_link != null){
                        let nextEl = el_link.nextElementSibling;
                        el_link.classList.add('show');
                        nextEl.classList.add('show');
                    }
        
                });
                everyitem.addEventListener('mouseleave', function(e){
                    let el_link = this.querySelector('a[data-bs-toggle]');
        
                    if(el_link != null){
                        let nextEl = el_link.nextElementSibling;
                        el_link.classList.remove('show');
                        nextEl.classList.remove('show');
                    }
        
        
                })
            });
        
        }
        // end if innerWidth
        
    }); 
    // DOMContentLoaded  end

    $('.full-slider button').on( "click", function (event) {

        console.log("opended");

        setTimeout(function(){ 
            $(".ytp-large-play-button").click();
        }, 20000);
        
    });

    $('#exampleModalCenter .btn-close').on( "click",  function (event) {

        console.log("closed");
        $(".ytp-large-play-button").click();

    });


    /* Client Logo slider with Adaptive height */

    let rows, slides;
    function fixResponsiveClientSlider() {
        var viewportWidth = $(window).width();
        if( viewportWidth > 1024 ){
            rows = 1;
            slides = 4;
          
        } else if( viewportWidth > 768 ){
            rows = 1;
            slides = 3;
            
        } else {
            rows = 2;
            slides = 2;
            
        }
    }
    
    fixResponsiveClientSlider();
    window.addEventListener('resize', fixResponsiveClientSlider);
    
    $('.client-logo-slider').slick({
        dots: true,
        nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><g id="arrow-right-circle-fill" transform="translate(-10.125 -10.124)"><path id="Path_2" data-name="Path 2" d="M21.359,32.072A1.788,1.788,0,1,0,23.888,34.6L34.6,23.888a1.785,1.785,0,0,0,0-2.528L23.888,10.648a1.788,1.788,0,1,0-2.528,2.528l7.665,7.662H11.91a1.785,1.785,0,0,0,0,3.571H29.025l-7.667,7.664Z" fill="#1697d9" fill-rule="evenodd"/></g></svg>',
        prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="24.998" height="25" viewBox="0 0 24.998 25"><g id="arrow-left-circle-fill" transform="translate(0 -10.124)"><path id="Path_1" data-name="Path 1" d="M23.888,32.072A1.788,1.788,0,0,1,21.36,34.6L10.648,23.888a1.785,1.785,0,0,1,0-2.528L21.36,10.648a1.788,1.788,0,1,1,2.528,2.528l-7.667,7.662H33.336a1.785,1.785,0,0,1,0,3.571H16.222l7.667,7.664Z" transform="translate(-10.123 0)" fill="#1697d9" fill-rule="evenodd"/></g></svg> ',
        slidesToShow: slides,
		slidesPerRow: 1,
		rows: rows,
		
    });


    $('#bs-example-navbar-collapse-1')
    .on('shown.bs.collapse', function() {
      $('#navbar-hamburger').addClass('hidden');
      $('#navbar-close').removeClass('hidden');    
    })
    .on('hidden.bs.collapse', function() {
      $('#navbar-hamburger').removeClass('hidden');
      $('#navbar-close').addClass('hidden');        
    });



});