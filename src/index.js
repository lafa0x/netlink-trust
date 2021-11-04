// Import all plugins
// window.$ = require('jquery');
// window.jQuery = require('jquery');

import * as bootstrap from '../node_modules/bootstrap';

// import '../node_modules/bootstrap-select';
// import '../node_modules/bootstrap-select/dist/js/i18n/defaults-am_ET';
// import '../node_modules/slick-carousel';



// window.$ = require('jquery');
// window.jQuery = require('jquery');

// import * as jQuery from 'jquery';

// // Import all plugins
// import * as bootstrap from 'bootstrap';

// import 'slick-carousel';
// import * as mmenu from '../node_modules/mmenu-js/dist/mmenu';
// import * as polyfill from '../node_modules/mmenu-js/dist/mmenu.polyfills';


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


//Mmenu Integration Code
document.addEventListener(
    "DOMContentLoaded", () => {

        var w = $(this).width();


        function initMmenu() {
            new Mmenu("#navbarSupportedContent");
        }

        $(window).on('resize', function () {

            w = $(this).width();

            if (w < 769) {

                initMmenu();
            }

        });

        (w < 769) ? initMmenu() : 0;


        // make it as accordion for smaller screens
        if (window.innerWidth > 769) {

            document.querySelectorAll('.navbar .nav-item').forEach(function (everyitem) {

                everyitem.addEventListener('mouseover', function (e) {

                    let el_link = this.querySelector('span[data-bs-toggle]');

                    if (el_link != null) {
                        let nextEl = el_link.nextElementSibling;
                        el_link.classList.add('show');
                        nextEl.classList.add('show');

                        el_link.style = "color: #1697d9!important";


                    }

                });
                everyitem.addEventListener('mouseleave', function (e) {
                    let el_link = this.querySelector('span[data-bs-toggle]');

                    if (el_link != null) {
                        let nextEl = el_link.nextElementSibling;
                        el_link.classList.remove('show');
                        nextEl.classList.remove('show');

                        el_link.style.color = "";

                    }


                })
            });

        } // end if innerWidth


        // BS tabs hover (instead - hover write - click) - Contact Page
        $('.nav-pills a').hover(function (e) {
            e.preventDefault()
            $(this).tab('show')
        })

        // To style all selects
        // $('select').selectpicker();


        var x, i, j, l, ll, selElmnt, a, b, c;

        /*look for any elements with the class "custom-select":*/
        x = document.getElementsByClassName("custom-select");
        l = x.length;
        for (i = 0; i < l; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
            ll = selElmnt.length;

            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected form-control");
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);

            /*for each element, create a new DIV that will contain the option list:*/
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");

            for (j = 1; j < ll; j++) {
                /*for each option in the original select element,
                create a new DIV that will act as an option item:*/
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener("click", function (e) {
                    /*when an item is clicked, update the original select box,
                    and the selected item:*/
                    var y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    sl = s.length;
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < sl; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            yl = y.length;
                            for (k = 0; k < yl; k++) {
                                y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }

            x[i].appendChild(b);
            a.addEventListener("click", function (e) {

                /*when the select box is clicked, close any other select boxes,
                and open/close the current select box:*/
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");

            });

        }

        function closeAllSelect(elmnt) {
            /*a function that will close all select boxes in the document,
            except the current select box:*/
            var x, y, i, xl, yl, arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected");
            xl = x.length;
            yl = y.length;

            for (i = 0; i < yl; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i)
                } else {
                    y[i].classList.remove("select-arrow-active");
                }
            }

            for (i = 0; i < xl; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide");
                    x[i].parentElement.classList.add("added")
                }
            }

        }

        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);

    });


// Load More Articels Posts
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
                breakpoint: 769,
                settings: {
                    // rows: 2,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    if ($(window).width() >= 590) {

        dotCustomSlider();

    }

    // else {

    //     console.log("slider initialized ");

    //     /* Home Slider with Adaptive height */
    //     $('.full-slider').slick({
    //         dots: true,
    //         infinite: true,
    //         focusOnSelect: true,
    //         speed: 500,
    //         autoplaySpeed: 5000,
    //         fade: true,
    //         cssEase: 'linear',
    //         slidesToShow: 1,
    //         slidesToScroll: 1,

    //         nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><g id="arrow-right-circle-fill" transform="translate(-10.125 -10.124)"><path id="Path_2" data-name="Path 2" d="M21.359,32.072A1.788,1.788,0,1,0,23.888,34.6L34.6,23.888a1.785,1.785,0,0,0,0-2.528L23.888,10.648a1.788,1.788,0,1,0-2.528,2.528l7.665,7.662H11.91a1.785,1.785,0,0,0,0,3.571H29.025l-7.667,7.664Z" fill="#1697d9" fill-rule="evenodd"/></g></svg>',
    //         prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="24.998" height="25" viewBox="0 0 24.998 25"><g id="arrow-left-circle-fill" transform="translate(0 -10.124)"><path id="Path_1" data-name="Path 1" d="M23.888,32.072A1.788,1.788,0,0,1,21.36,34.6L10.648,23.888a1.785,1.785,0,0,1,0-2.528L21.36,10.648a1.788,1.788,0,1,1,2.528,2.528l-7.667,7.662H33.336a1.785,1.785,0,0,1,0,3.571H16.222l7.667,7.664Z" transform="translate(-10.123 0)" fill="#1697d9" fill-rule="evenodd"/></g></svg> '
    //     });   

    // }

    $(window).on('resize', function () {

        console.log("resized");

        if ($(window).width() >= 769) {

            dotCustomSlider();
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
                $('.heading' + k).html("<span>" + text + "</span>");
            });

        });


    }


    /* Home Slider with Adaptive height */
    $('.full-slider').slick({
        dots: true,
        infinite: true,
        focusOnSelect: true,
        autoplay: true, /* this is the new line */
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
            'class': 'btn btn-outline',
            'text': 'Load More'
        }

    });

    document.addEventListener("DOMContentLoaded", function () {
        // make it as accordion for smaller screens
        if (window.innerWidth > 992) {

            document.querySelectorAll('.navbar .nav-item').forEach(function (everyitem) {

                everyitem.addEventListener('mouseover', function (e) {

                    let el_link = this.querySelector('a[data-bs-toggle]');

                    if (el_link != null) {
                        let nextEl = el_link.nextElementSibling;
                        el_link.classList.add('show');
                        nextEl.classList.add('show');
                    }

                });
                everyitem.addEventListener('mouseleave', function (e) {
                    let el_link = this.querySelector('a[data-bs-toggle]');

                    if (el_link != null) {
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

    $('.full-slider button').on("click", function (event) {

        console.log("opended");

        setTimeout(function () {
            $(".ytp-large-play-button").click();
        }, 20000);

    });

    $('#exampleModalCenter .btn-close').on("click", function (event) {

        console.log("closed");
        $(".ytp-large-play-button").click();

    });

    // $('#bs-example-navbar-collapse-1')
    // .on('shown.bs.collapse', function() {
    //   $('#navbar-hamburger').addClass('hidden');
    //   $('#navbar-close').removeClass('hidden');    
    // })
    // .on('hidden.bs.collapse', function() {
    //   $('#navbar-hamburger').removeClass('hidden');
    //   $('#navbar-close').addClass('hidden');        
    // });



});

