/* -------------------------------------------------------
 
 Theme Name: Crafto - The Multipurpose HTML5 Template
 Theme URL: https://craftohtml.themezaa.com/
 Description: Elevate your online presence with Crafto - a modern, versatile, multipurpose Bootstrap 5 responsive HTML5, SCSS template using highly creative 48+ ready demos.
 Author: ThemeZaa - https://www.themezaa.com/
 Author ThemeForest URL: https://themeforest.net/user/themezaa
 Copyright(c) 2024 themezaa.com
 Version: 1.0
 
 ------------------------------------------------------- */

(function ($) {

    "use strict";
   
    var menuBreakPoint = 991;
    var sliderBreakPoint = 991; // It will effect when you have used attribute "data-thumb-slider-md-direction" OR "data-slider-md-direction"
    var animeBreakPoint = 1199;
    var headerTransition = 300;  // Header transition effect time

    
    var isTouchDevice = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    if (isTouchDevice) {
        $('body').addClass('is-touchable');
    }

    var lastScroll = 0,
            simpleDropdown = 0,
            linkDropdown = 0,
            isotopeObjs = [],
            swiperObjs = [];
    var windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    var isMobile = false,
            isiPhoneiPad = false,
            isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }

    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        isiPhoneiPad = true;
    }

    $('.vertical-counter, .counter, .progress-bar, .pie-chart-style-01, .attractive-hover, .splitting-animation, .section-dark, footer, [data-anime], [data-fancy-text]').each(function () {
        $(this).appear().trigger('resize');
    });
    initScrollNavigate();
    animateCounters();
    setOverLayerPosition();
    setBottomOverLayerPosition(2000);

    /* ===================================
     Header
     ====================================== */

    // Mobile menu - modern style
    var mobileStyle = $('body').attr('data-mobile-nav-style');
    if ((mobileStyle == 'modern' || mobileStyle == 'full-screen-menu') && !$('.navbar-' + mobileStyle + '-inner').length) {
        if (!$('.box-layout').length && mobileStyle == 'modern') {
            $('section, footer').wrapAll('<div class="page-layout"></div>');
        } else {
            $('section').wrapAll('<div class="page-layout"></div>');
        }

        $('.navbar .navbar-toggler').clone(true).addClass('navbar-toggler-clone').insertAfter('.page-layout');
        $('.navbar .navbar-collapse').clone(true).addClass('navbar-collapse-clone').attr('id', 'navbarNav-clone').insertAfter('.page-layout');

        $('.navbar-toggler-clone, .navbar-collapse-clone').wrapAll('<div class="navbar-' + mobileStyle + '-inner"></div>');
        $('.navbar-toggler').attr('data-target', '#navbarNav-clone').attr('aria-controls', '#navbarNav-clone');
        $('.navbar-' + mobileStyle + '-inner').find('.dropdown-toggle').addClass('dropdown-toggle-clone');
        if (typeof $.fn.mCustomScrollbar === 'function') {
            if ($('.navbar-collapse-clone').length) {
                var scrollOptions = $('.navbar-collapse-clone').attr('data-scroll-options') || '{ "theme": "light" }';
                if (typeof (scrollOptions) !== 'undefined' && scrollOptions !== null) {
                    scrollOptions = $.parseJSON(scrollOptions);
                    $('.navbar-collapse-clone').mCustomScrollbar(scrollOptions);
                }
            }
        }
        if (mobileStyle == 'modern') {
            $('<div class="navbar-show-modern-bg"></div>').insertAfter('.page-layout');
        }
    }

    // Header push menu open
    $(document).on('click', '.header-push-button .push-button', function () {
        $('html, body').toggleClass('show-menu');
    });

    // Header push menu close
    $(document).on('click', '.close-menu', function () {
        $('html, body').removeClass('show-menu');
        // Close left menu
        $('.sub-menu.show').collapse('hide');
    });

    // Close all left menu submenu
    $(document).on('click', '#navbar-menu .navbar-toggler', function () {
        // Close left menu
        $('.sub-menu.show').collapse('hide');
    });


    // Add active class to current menu
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    var $hash = window.location.hash.substring(1);
    if ($hash) {
        $hash = '#' + $hash;
        pgurl = pgurl.replace($hash, '');
    } else {
        pgurl = pgurl.replace('#', '');
    }
    $('.navbar-nav li a, .menu-item-list a').each(function () {
        var _this = $(this),
                aHref = _this.attr('href');
        if (aHref === pgurl || aHref === pgurl + '.html') {
            _this.parent().addClass('active');
            _this.parents('li.dropdown').addClass('active');
            _this.parents('li.menu-item').addClass('active');
        }
    });

    // Sticky left menu
    if ($.fn.stick_in_parent !== undefined && $.fn.stick_in_parent !== null) {
        if ($('.left-sidebar-wrapper').length) {
            $('.left-sidebar-wrapper .left-sidebar-nav').stick_in_parent({
                recalc: 1
            });
        }
    }
    if (typeof $.fn.smoothScroll === 'function') {
        if ($('.header-reverse').length > 0) {
            $('.inner-link').smoothScroll({
                speed: 800,
                offset: -59,
                beforeScroll: function () {
                    if ($('body').hasClass('left-menu-onepage')) {
                        $('.left-modern-header').collapse('hide');
                    }
                    $('.navbar-collapse.collapse').collapse('hide');
                }
            });
        } else {
            if ($('.inner-link').length > 0) {
                var offset = 0
                if ($('nav.navbar').hasClass('disable-fixed')) {
                    offset = 1;
                }

                if ($('.left-modern-menu').hasClass('left-menu-onepage')) {
                    if (getWindowWidth() <= menuBreakPoint) {
                        offset = -59;
                    }
                }

                $('.inner-link').smoothScroll({
                    speed: 800,
                    offset: offset,
                    beforeScroll: function () {
                        if ($('body').hasClass('left-menu-onepage')) {
                            $('.left-modern-header').collapse('hide');
                        }

                        $('.navbar-collapse.collapse').collapse('hide');
                    }
                });
            }
        }

        // Section link
        if ($('.section-link').length > 0) {
            $('.section-link').smoothScroll({
                speed: 900,
                offset: 1,
                beforeScroll: function () {
                    $('.navbar-collapse.collapse').collapse('hide');
                }
            });
        }
    }

    // Get top space header height
    function getHeaderHeight() {
        var headerHeight = 0;
        if ($('.header-top-bar').length) {
            headerHeight = headerHeight + $('.header-top-bar').outerHeight();
        }
        if ($('header nav.navbar').length) {
            headerHeight = headerHeight + $('header nav.navbar').outerHeight();
        }
        if ($('.left-modern-header .left-modern-sidebar').length) {
            headerHeight = headerHeight + $('.left-modern-header .left-modern-sidebar').outerHeight();
        }
        return headerHeight;
    }

    // Get top space height
    function setTopSpaceHeight() {

        if (!$('header').hasClass('sticky') && ($('.top-space-margin').length || $('.top-space-padding').length) || $('.ipad-top-space-margin').length) {
            var headerHeight = getHeaderHeight();
            if ($('.top-space-margin').length) {
                $('.top-space-margin').css('margin-top', headerHeight);
            }
            if ($('.top-space-padding').length) {
                $('.top-space-padding').css('padding-top', headerHeight);
            }
            if ($('.ipad-top-space-margin').length) {
                if (getWindowWidth() <= menuBreakPoint) {
                    $('.ipad-top-space-margin').css('margin-top', headerHeight);
                } else {
                    $('.ipad-top-space-margin').css('margin-top', 'inherit');
                }
            }
        }
    }

    // Menu position
    function menuPosition(element) {
        var windowWidth = getWindowWidth();
        if (element.hasClass('simple-dropdown')) {
            simpleDropdown = element;
            linkDropdown = element.find('a.nav-link');
            var menuSpacing = 30,
                    menuLeftPosition = element.offset().left,
                    menuWidth = element.children('.dropdown-menu').outerWidth(),
                    menuDropdownCSS = (windowWidth - menuSpacing) - (menuLeftPosition + menuWidth);
            if (menuDropdownCSS < 0) {
                element.children('.dropdown-menu').css('left', menuDropdownCSS);
            }
        }
        if (element.parent().hasClass('dropdown-menu') && element.parents('.simple-dropdown')) {
            var dropdownWidth = 0,
                    maxValueInArray = 0,
                    lastValue = 0,
                    multiDepth = 0;
            dropdownWidth = element.outerWidth() - linkDropdown.outerWidth();
            element.children('.dropdown-menu').each(function () {
                var arr = [];
                if (element.find('li').hasClass('dropdown')) {
                    dropdownWidth = dropdownWidth + element.outerWidth();
                    element.find('li.dropdown').each(function () {
                        var dropdownMenu = element.closest('.dropdown-menu');
                        arr.push(dropdownMenu.outerWidth());
                    });
                    maxValueInArray = lastValue + Math.max.apply(Math, arr);
                    lastValue = maxValueInArray;
                    dropdownWidth = dropdownWidth + maxValueInArray;
                    multiDepth = multiDepth + 1;
                } else if (multiDepth < 1) {
                    dropdownWidth = dropdownWidth + element.outerWidth();
                }
            });
            var menuRightPosition = windowWidth - (simpleDropdown.offset().left + simpleDropdown.outerWidth());
            if (dropdownWidth > menuRightPosition) {
                if (element.find('.dropdown-menu').length > 0) {
                    var menuTopPosition = element.position().top,
                            submenuObj = element.find('.dropdown-menu'),
                            submenuHeight = submenuObj.outerHeight(),
                            totalHeight = menuTopPosition + submenuHeight + getHeaderHeight(),
                            windowHeight = getWindowHeight();
                    if (totalHeight > windowHeight) {
                        submenuObj.css('top', '-' + (totalHeight - windowHeight) + 'px');
                    }
                }
                element.addClass('menu-left');
            }
        }
    }

    // Recalculate sticky kit
    function stickyKitRecalc() {
        if ($('.left-sidebar-wrapper').length) {
            setTimeout(function () {
                $('.left-sidebar-wrapper').trigger('sticky_kit:recalc');
            }, 500);
        }
    }

    /* ===================================
     Custom scrollbar
     ====================================== */

    if (typeof $.fn.mCustomScrollbar === 'function') {
        $('[data-scroll-options]').each(function () {
            var _this = $(this);
            var scrollOptions = _this.data('scroll-options') || '{"theme": "dark"}';

            try {
                _this.mCustomScrollbar(scrollOptions);
            } catch (error) {
                console.error('Error parsing scroll options:', error);
            }
        });
    }

   
   
   
    /* ===================================
     Mousetip on mouse move
     ====================================== */

    if (!isMobile) {
        $(document).on('mousemove', '.mousetip-wrapper', function (e) {
            var mouseX = e.pageX - $(this).offset().left + 20;
            var mouseY = e.pageY - $(this).offset().top + 20;
            $(this).find('.caption').show().css({
                top: mouseY, left: mouseX
            });
        });
    }

    /* ===================================
     Counter
     ====================================== */

    // Vertical counter
    $('.vertical-counter').each(function () {
        var _this = $(this),
                counterValue = _this.attr('data-to'),
                individualValue = counterValue.toString().split(''),
                valueLength = counterValue.length;

        // Adding the div.vertical-counter-number in div.counter multiple(valueLength) times
        for (var i = 0; i < valueLength; i++) {
            _this.append('<span class="vertical-counter-number"><ul><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li></ul></span>');
        }

        // Adding the individual data-to in each div.vertical-counter-number
        _this.find('.vertical-counter-number').each(function (index) {
            $(this).attr('data-to', individualValue[index]);
        });
    });

    // Vertical counter on jQuery appear
    if ($('.vertical-counter').length) {

        function calculateHeight() {
            $('.vertical-counter').each(function () {
                var _this = $(this),
                        divHeight = _this.find('.vertical-counter-number').find('li').height();

                $(this).height(divHeight);
            });
        }

        calculateHeight();

        $(window).resize(function () {
            calculateHeight();
        })

        $(document).on('appear', '.vertical-counter', function (e) {
            if (!$(this).hasClass('appear')) {
                $(this).addClass('appear');

                if ($(window).scrollTop() + getWindowHeight() >= $('.vertical-counter').offset().top) {
                    $(this).find('.vertical-counter-number').each(function () {
                        var _this = $(this),
                                value = _this.attr('data-to');
                        if (value <= 9) {
                            anime({
                                targets: this.querySelector('ul'),
                                translateY: [0, `${-value * 10}%`],
                                duration: 2000,
                                easing: 'easeOutCubic'
                            });
                        }
                    });
                }
            }
        });
        $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
            let activeTabPane = $(`${$(this).attr('href')}`);

            activeTabPane.find('.vertical-counter').each(function () {
                var _this = $(this),
                        value = _this.attr('data-to'),
                        divHeight = _this.find('li').height();
                _this.height(divHeight);

                if (value <= 9) {
                    _this.find('ul').css({'transform': 'translateY(-' + value * 10 + '%)'});
                }
            });
        });
    }

    $('[data-tab="counter"]').on('shown.bs.tab', function (e) {
        $('.vertical-counter').each(function () {
            $(this).appear().trigger('resize');
        });
    });

    // Counter number reset on jQuery appear
    if (typeof $.fn.countTo === 'function' && $('.counter').length) {
        $(document).on('appear', '.counter', function (e) {
            var _this = $(this);
            if (!_this.hasClass('appear')) {
                var options = _this.data('countToOptions') || {};
                _this.countTo(options);
                _this.addClass('appear');
            }
        });
    }

    // Counter
    function animateCounters() {
        $('.counter').each(function (options) {
            var _this = $(this);
            options = $.extend({}, options || {}, _this.data('countToOptions') || {});
            if (typeof $.fn.countTo === 'function') {
                _this.countTo(options);
            }
        });
    }


    
    /* ===================================
     Countdown timer
     ====================================== */

    if ($.fn.countdown !== undefined && $.fn.countdown !== null) {
        $('.countdown').each(function () {
            var _this = $(this);
            _this.countdown(_this.attr("data-enddate")).on('update.countdown', function (event) {
                _this.html(event.strftime('' + '<div class="counter-container"><div class="countdown-box first"><div class="number">%-D</div><span>Days</span></div>' + '<div class="countdown-box"><div class="number">%H</div><span>Hours</span></div>' + '<div class="countdown-box"><div class="number">%M</div><span>Minutes</span></div>' + '<div class="countdown-box last"><div class="number">%S</div><span>Seconds</span></div></div>'));
            }).on('finish.countdown', function (event) {
                _this.html(event.strftime('' + '<div class="counter-container"><div class="countdown-box first" data-number="00"><div class="number">00</div><span>Days</span></div>' + '<div class="countdown-box"><div class="number">00</div><span>Hours</span></div>' + '<div class="countdown-box"><div class="number">00</div><span>Minutes</span></div>' + '<div class="countdown-box last"><div class="number">00</div><span>Seconds</span></div></div>'));
            });
        });
    }

    /* ===================================
     Anime - animation library
     ====================================== */

    // Anime animation
    function animeAnimation(target, options) {
        let child = target;
        let staggerValue = options.staggervalue || 0;
        let delay = options.delay || 0;
        let anime_animation = anime.timeline();

        function applyTransitionStyles(elements) {
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                element.style.transition = 'none';
                if (options.willchange) {
                    element.style.willChange = 'transform';
                }
            }
        }

        if (options.el === "childs") {
            child = target.children;
            applyTransitionStyles(target.children);
        }

        if (options.el === "lines") {
            function lineSplitting() {
                const lines = Splitting({target: target, by: 'lines'});
                const line = lines[0].lines.map(item => item.map(i => i.innerHTML).join(" "));
                target.innerHTML = line.map(item => `<span class="d-inline-flex">${item}</span>`).join(' ');
            }
            lineSplitting();
            applyTransitionStyles(target.children);
            child = target.children;
        }

        if (options.el === "words") {
            function lineSplitting() {
                const words = Splitting({target: target, by: 'words'});
                const word = words[0].words.join(" ");
            }
            lineSplitting();
            applyTransitionStyles(target.children);
            child = target.children;
        }

        if (options.perspective) {
            target.style.perspective = `${options.perspective}px`;
        }

        if (options.willchange) {
            target.style.willChange = options.willchange;
        }

        anime_animation.add({
            targets: child,
            ...options,
            delay: anime.stagger(staggerValue, {start: delay}),
            complete: function () {
                if (options.el) {
                    target.classList.add('anime-child');
                    target.classList.add('anime-complete');

                    for (let i = 0; i < target.children.length; i++) {
                        const element = target.children[i];
                        element.style.removeProperty('opacity');
                        element.style.removeProperty('transform');
                        element.style.removeProperty('transition');

                        if (target.classList.contains('grid')) {
                            element.style.transition = 'none';
                        }
                    }

                    if (options.el === "lines") {
                        for (let i = 0; i < target.children.length; i++) {
                            const element = target.children[i];
                            element.classList.remove('d-inline-flex');
                            element.classList.add('d-inline');
                            element.style.willChange = "inherit";
                        }
                    }
                } else {
                    target.classList.add('anime-complete');
                    target.style.removeProperty('opacity');
                    target.style.removeProperty('transform');
                    target.style.removeProperty('transition');
                }
            }
        });
    }

    // Anime text revealer js
    const slideAnimation = (target, options) => {
        let duration = options.speed ? options.speed : 100,
                direction = options.direction ? options.direction : "lr",
                delay = options.delay ? options.delay : 0;

        target.style.position = 'relative';

        // Create slide panel div
        let tmp = document.createElement('div');
        tmp.style.width = tmp.style.height = '100%';
        tmp.style.top = tmp.style.left = 0;
        tmp.style.background = options.color ? options.color : '#fff';
        tmp.style.position = 'absolute';

        if (direction === 'lr') {
            tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = '0% 50%';
            tmp.style.WebkitTransform = tmp.style.transform = 'scaleX(0)';
        } else if (direction === 'tb') {
            tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = '50% 0%';
            tmp.style.WebkitTransform = tmp.style.transform = 'scaleY(0)';
        } else if (direction === 'bt') {
            tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = '100% 100%';
            tmp.style.WebkitTransform = tmp.style.transform = 'scaleY(0)';
        } else {
            tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = '100% 50%';
            tmp.style.WebkitTransform = tmp.style.transform = 'scaleX(0)';
        }
        target.appendChild(tmp);

        // init Anime js.
        let slide_anime = anime.timeline();
        slide_anime.add({
            targets: tmp,
            scaleX: (direction === 'lr' || direction === 'rl') ? [0, 1] : [1, 1],
            scaleY: (direction === 'tb' || direction === 'bt') ? [0, 1] : [1, 1],
            duration: duration + 500,
            easing: 'easeInOutCubic',
            delay: delay,
            complete: function () {
                if (direction === 'lr') {
                    tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = '100% 50%';
                } else if (direction === 'tb') {
                    tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = '50% 100%';
                } else if (direction === 'bt') {
                    tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = '0% 0%';
                } else {
                    tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = '0% 50%';
                }

                anime({
                    targets: tmp,
                    duration: duration + 500,
                    easing: 'easeInOutCubic',
                    scaleX: (direction === 'lr' || direction === 'rl') ? [1, 0] : [1, 1],
                    scaleY: (direction === 'tb' || direction === 'bt') ? [1, 0] : [1, 1],
                    complete: function () {
                        target.removeChild(tmp);
                        if (typeof callback === 'function') {
                            callback();
                        }
                    }
                });
            }
        }).add({
            targets: target.querySelector('*'),
            easing: 'easeOutQuint',
            delay: direction === 'lr' ? anime.stagger(duration, {start: 1000}) : anime.stagger(-duration, {start: 1000}),
            opacity: [0, 1]
        }, "-=900");
    }

    /* ===================================
     Fancy text animation
     ====================================== */

    // Curved text effect
    const curvedTextAnimation = (target, options) => {
        let duration = options.duration ? (options.duration <= 2000 ? 2000 : options.duration) : 2000,
                content = options.string,
                curveText = anime.timeline();

        const lineEq = (y2, y1, x2, x1, currentVal) => {
            var m = (y2 - y1) / (x2 - x1),
                    b = y1 - m * x1;
            return m * currentVal + b;
        }

        curveText.add({
            targets: target.querySelectorAll('.anime-text > .word > .char'),
            duration: 800,
            easing: 'easeOutElastic',
            opacity: 1,
            translateY: function (el, index) {
                var p = el.parentNode,
                        lastElOffW = p.lastElementChild.offsetWidth,
                        firstElOffL = p.firstElementChild.offsetLeft,
                        w = p.offsetWidth - lastElOffW - firstElOffL - (p.offsetWidth - lastElOffW - p.lastElementChild.offsetLeft),
                        tyVal = lineEq(0, 100, firstElOffL + w / 2, firstElOffL, el.offsetLeft);
                return [Math.abs(tyVal) + '%', '0%'];
            },
            rotateZ: function (el, index) {
                var p = el.parentNode,
                        lastElOffW = p.lastElementChild.offsetWidth,
                        firstElOffL = p.firstElementChild.offsetLeft,
                        w = p.offsetWidth - lastElOffW - p.firstElementChild.offsetLeft - (p.offsetWidth - lastElOffW - p.lastElementChild.offsetLeft),
                        rz = lineEq(90, -90, firstElOffL + w, firstElOffL, el.offsetLeft);
                return [rz, 0];
            }
        }).add({
            targets: target.querySelectorAll('.anime-text > .word > .char'),
            duration: 1000,
            easing: 'easeInExpo',
            opacity: content.length > 1 ? 0 : 1,
            translateY: function (el, index) {
                var p = el.parentNode,
                        lastElOffW = p.lastElementChild.offsetWidth,
                        firstElOffL = p.firstElementChild.offsetLeft,
                        w = p.offsetWidth - lastElOffW - firstElOffL - (p.offsetWidth - lastElOffW - p.lastElementChild.offsetLeft),
                        tyVal = lineEq(0, 100, firstElOffL + w / 2, firstElOffL, el.offsetLeft);
                return content.length > 1 ? [-Math.abs(tyVal) + '%'] : [Math.abs(tyVal) + '%', '0%'];
            },
            rotateZ: function (el, index) {
                var p = el.parentNode,
                        lastElOffW = p.lastElementChild.offsetWidth,
                        firstElOffL = p.firstElementChild.offsetLeft,
                        w = p.offsetWidth - lastElOffW - p.firstElementChild.offsetLeft - (p.offsetWidth - lastElOffW - p.lastElementChild.offsetLeft),
                        rz = lineEq(-90, 90, firstElOffL + w, firstElOffL, el.offsetLeft);
                return content.length > 1 ? [rz] : [rz, 0];
            }
        }, duration - 1500);
    }

    // Slide text effect
    const slideTextAnimation = (target, options) => {
        let current_anime_text = target.querySelectorAll('.anime-text')[0],
                speed = options.speed ? options.speed : 100;

        current_anime_text.style.position = 'relative';

        // Create slide panel div
        let tmp = document.createElement('div');
        tmp.style.width = tmp.style.height = '100%';
        tmp.style.top = tmp.style.left = 0;
        tmp.style.background = options.color ? options.color : '#fff';
        tmp.style.position = 'absolute';
        tmp.style.WebkitTransform = tmp.style.transform = 'scaleX(0)';
        tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = '0% 50%';

        if (options.direction === 'left') {
            tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = '100% 50%';
        }
        current_anime_text.appendChild(tmp);

        // init Anime js.
        let slide_anime = anime.timeline();
        slide_anime.add({
            targets: current_anime_text.querySelectorAll('div'),
            scaleX: [0, 1],
            duration: speed + 500,
            easing: 'easeInOutCubic',
            complete: function () {
                if (options.direction === 'left') {
                    tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = '0% 50%';
                } else {
                    tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = '100% 50%';
                }

                anime({
                    targets: tmp,
                    duration: speed + 500,
                    easing: 'easeInOutCubic',
                    scaleX: [1, 0],
                    complete: function () {
                        current_anime_text.removeChild(tmp);
                        if (typeof callback === 'function') {
                            callback();
                        }
                    }
                });
            }
        }).add({
            targets: target.querySelectorAll('.anime-text > .word > .char'),
            easing: 'easeOutQuint',
            delay: options.direction === 'left' ? anime.stagger(speed, {start: 1000}) : anime.stagger(-speed, {start: 1000}),
            opacity: [0, 1],
            translateX: options.direction === 'left' ? [100, 0] : [-100, 0]
        }, "-=600");
    }

    // Wave text effect
    const waveTextAnimation = (target, options) => {
        let duration = options.duration ? options.duration : 3000,
                direction = options.direction,
                content = options.string,
                speed = options.speed,
                waveText = anime.timeline();

        waveText.add({
            targets: target.querySelectorAll('.anime-text > .word > .char'),
            opacity: [0, 1],
            translateY: direction === 'down' ? [-20, 0] : [20, 0],
            delay: anime.stagger(speed ? speed : 50)
        }).add({
            targets: target.querySelectorAll('.anime-text .word .char'),
            opacity: content.length > 1 ? [1, 0] : [1, 1],
            translateY: content.length > 1 ? (direction === 'down' ? [0, 20] : [0, -20]) : [0, 0],
            delay: anime.stagger(speed ? speed : 50, {start: duration - 1500})
        });
    }

    // Smooth wave text effect
    const smoothWaveTextAnimation = (target, options) => {
        let duration = options.duration ? options.duration : 3000,
                direction = options.direction,
                content = options.string,
                speed = options.speed,
                smoothWaveText = anime.timeline();

        smoothWaveText.add({
            targets: target.querySelectorAll('.anime-text > .word > .char'),
            opacity: [0, 1],
            translateY: direction === 'down' ? [-50, 0] : [50, 0],
            duration: 500,
            easing: 'easeOutQuad',
            delay: anime.stagger(speed ? speed : 40, {direction: 'reverse'}),
        }).add({
            targets: target.querySelectorAll('.anime-text .word .char'),
            opacity: content.length > 1 ? [1, 0] : [1, 1],
            translateY: content.length > 1 ? (direction === 'down' ? 50 : -50) : 0,
            duration: 500,
            easing: 'easeOutQuad',
            delay: anime.stagger(speed ? speed : 40, {start: duration - 1000, direction: 'reverse'})
        });
    }

    // Rotate text effect
    const rotateTextAnimation = (target, options) => {
        let duration = options.duration ? options.duration : 3000,
                content = options.string,
                speed = options.speed,
                rotateText = anime.timeline();

        rotateText.add({
            targets: target.querySelectorAll('.anime-text > .word > .char'),
            opacity: [0, 1],
            rotateX: [-70, 0],
            duration: 150,
            delay: anime.stagger(speed ? speed : 50),
            easing: "linear"
        }).add({
            targets: target.querySelectorAll('.anime-text > .word > .char'),
            opacity: content.length > 1 ? 0 : 1,
            rotateX: content.length > 1 ? [0, 70] : [0, 0],
            duration: 150,
            delay: anime.stagger(speed ? speed : 50, {start: duration - 1500}),
            easing: "linear"
        });
    }

    // Jump text effect
    const jumpTextAnimation = (target, options) => {
        let duration = options.duration ? options.duration : 3000,
                content = options.string,
                speed = options.speed,
                delay = options.delay,
                movingLetter9 = anime.timeline();

        movingLetter9.add({
            targets: target.querySelectorAll('.anime-text > .word > .char'),
            scale: [0, 1],
            duration: 1500,
            elasticity: 600,
            transformOrigin: '50% 100%',
            delay: anime.stagger(speed ? speed : 45, {start: delay})
        }).add({
            targets: target.querySelectorAll('.anime-text > .word > .char'),
            opacity: content.length > 1 ? 0 : 1,
            scale: content.length > 1 ? 0 : 1,
            duration: 500,
            easing: "easeOutExpo",
            delay: anime.stagger(speed ? speed : 45)
        }, `+=${duration - 2300}`);
    }

    // Zoom text effect
    const zoomTextAnimation = (target, options) => {
        let duration = options.duration ? options.duration : 3000,
                content = options.string,
                speed = options.speed,
                movingLetter2 = anime.timeline();

        movingLetter2.add({
            targets: target.querySelectorAll('.anime-text > .word > .char'),
            scale: [4, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: anime.stagger(speed ? speed : 70)
        }).add({
            targets: target.querySelectorAll('.anime-text > .word'),
            opacity: content.length > 1 ? 0 : 1,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        }, `+=${duration - 2500}`);
    }

    // Rubber band text effect
    const rubberbandTextAnimation = (target, options) => {
        let duration = options.duration ? options.duration : 3000,
                content = options.string,
                speed = options.speed,
                direction = options.direction,
                rubberband = anime.timeline();

        rubberband.add({
            targets: target.querySelectorAll('.anime-text > .word > .char'),
            translateX: direction === "right" ? [-40, 0] : [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: anime.stagger(speed ? speed : 75, {direction: direction === "right" ? 'reverse' : 'normal'})
        }).add({
            targets: target.querySelectorAll('.anime-text > .word > .char'),
            translateX: content.length > 1 ? (direction === "left" ? -40 : 40) : 0,
            opacity: content.length > 1 ? 0 : 1,
            easing: "easeInExpo",
            duration: 500,
            delay: anime.stagger(speed ? speed : 75, {start: duration - 2500, direction: direction === "right" ? 'reverse' : 'normal'})
        });
    }

    // Fade text effect
    const fadeTextAnimation = (target, options) => {
        let duration = options.duration ? options.duration : 3000,
                content = options.string,
                speed = options.speed,
                fade = anime.timeline();

        fade.add({
            targets: target.querySelectorAll('.anime-text > .word > .char'),
            translateY: [100, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            delay: anime.stagger(speed ? speed : 30)
        }).add({
            targets: target.querySelectorAll('.anime-text > .word > .char'),
            translateY: content.length > 1 ? [0, -100] : [0, 0],
            opacity: content.length > 1 ? [1, 0] : [1, 1],
            easing: "easeInExpo",
            delay: anime.stagger(speed ? speed : 40, {start: duration - 3000})
        });
    }

    // Fancy text 
    function FancyTextDefault(item, ftOptions) {
        let text_effect = ftOptions.effect,
                duration = ftOptions.duration ? ftOptions.duration : 3000,
                content = ftOptions.string,
                speed = ftOptions.speed,
                delay = ftOptions.delay;

        if (content) {
            item.innerHTML = `<span class="anime-text">${content[0]}</span>`;
            item.querySelector('.anime-text').setAttribute('data-splitting', true);
            Splitting();

            if (getWindowWidth() > animeBreakPoint) {
                switch (text_effect) {
                    case 'wave':
                        waveTextAnimation(item, ftOptions);
                        break;

                    case 'smooth-wave':
                        smoothWaveTextAnimation(item, ftOptions);
                        break;

                    case 'curve':
                        curvedTextAnimation(item, ftOptions);
                        break;

                    case 'rotate':
                        rotateTextAnimation(item, ftOptions);
                        break;

                    case 'slide':
                        slideTextAnimation(item, ftOptions);
                        break;

                    case 'jump':
                        jumpTextAnimation(item, ftOptions);
                        break;

                    case 'zoom':
                        zoomTextAnimation(item, ftOptions);
                        break;

                    case 'rubber-band':
                        rubberbandTextAnimation(item, ftOptions);
                        break;

                    case 'fade':
                        fadeTextAnimation(item, ftOptions);
                        break;

                    default:
                }

                if (text_effect === undefined) {
                    anime({
                        targets: item.querySelectorAll('.anime-text > .word > .char'),
                        ...ftOptions,
                        delay: anime.stagger(speed ? speed : 0, {start: delay ? delay : 0})
                    })
                }
            }

            if (content.length > 1) {
                let counter = 1;
                setInterval(function () {
                    let new_el = document.createElement('span');
                    new_el.classList.add('anime-text');
                    new_el.innerHTML = content[counter];
                    new_el.setAttribute('data-splitting', true);

                    item.querySelector('.anime-text').replaceWith(new_el);
                    Splitting();
                    counter++;

                    if (counter === content.length) {
                        counter = 0;
                    }

                    switch (text_effect) {
                        case 'wave':
                            waveTextAnimation(item, ftOptions);
                            break;

                        case 'smooth-wave':
                            smoothWaveTextAnimation(item, ftOptions);
                            break;

                        case 'curve':
                            curvedTextAnimation(item, ftOptions);
                            break;

                        case 'rotate':
                            rotateTextAnimation(item, ftOptions);
                            break;

                        case 'slide':
                            slideTextAnimation(item, ftOptions);
                            break;

                        case 'jump':
                            jumpTextAnimation(item, ftOptions);
                            break;

                        case 'zoom':
                            zoomTextAnimation(item, ftOptions);
                            break;

                        case 'rubber-band':
                            rubberbandTextAnimation(item, ftOptions);
                            break;

                        case 'fade':
                            fadeTextAnimation(item, ftOptions);
                            break;

                        default:
                    }

                    if (text_effect === undefined) {
                        anime({
                            targets: item.querySelectorAll('.anime-text > .word > .char'),
                            ...ftOptions,
                            delay: anime.stagger(speed ? speed : 0, {start: delay ? delay : 0})
                        });
                    }
                }, duration);
            }
        }
    }

    $('[data-fancy-text]').each(function () {
        const _this = $(this);
        const ftOptions = _this.data('fancy-text');
        if (ftOptions) {
            if (_this.hasClass('swiper-parallax-fancy-text')) {
                FancyTextDefault(this, ftOptions);
            } else {
                _this.on('appear', function () {
                    if (!_this.hasClass('appear')) {
                        _this.addClass('appear');
                        FancyTextDefault(this, ftOptions);
                    }
                });
            }
        }
    });

    // Get window height
    function getWindowHeight() {
        return $(window).height();
    }

    // Get window width
    function getWindowWidth() {
        return $(window).width();
    }

    // Full screen
    function fullScreenHeight() {
        var fullScreenObj = $('.full-screen'),
                minHeight = getWindowHeight(),
                headerHeight = getHeaderHeight();
        if (!$('header').hasClass('sticky')) {
            fullScreenObj.parents('section').imagesLoaded(function () {
                if ($('section:first.full-screen, section:first .full-screen').length && ($('.top-space-margin').length || $('.mobile-top-space').length) || $('.ipad-top-space-margin').length) {
                    if ($('.ipad-top-space-margin').length) {
                        if (getWindowWidth() <= menuBreakPoint) {
                            $('section:first.full-screen, section:first .full-screen').css('height', minHeight - headerHeight);
                        } else {
                            $('section:first.full-screen, section:first .full-screen').css('height', minHeight);
                        }
                    } else {
                        $('section:first.full-screen, section:first .full-screen').css('height', minHeight - headerHeight);
                    }
                } else if ($('header nav.navbar').hasClass('top-space-margin') || $('header nav.navbar').hasClass('mobile-top-space')) {
                    if ($('header nav.navbar').hasClass('ipad-top-space-margin')) {
                        if (getWindowWidth() <= menuBreakPoint) {
                            minHeight = minHeight - $('header nav.navbar').outerHeight();
                        }
                    } else {
                        minHeight = minHeight - $('header nav.navbar').outerHeight();
                    }
                    fullScreenObj.css('height', minHeight);
                } else {
                    fullScreenObj.css('height', minHeight);
                }
            });
        }
    }
    /* ===================================
     Window scroll
     ====================================== */

     $(window).on('scroll', initScrollNavigate);

     // Window scroll Function
     function initScrollNavigate() {
 
         var scrollPos = $(window).scrollTop();
 
         // One page navigation
         var menuLinks = $('.navbar-nav li a');
         menuLinks.each(function () {
             var _this = $(this);
             var hasPos = _this.attr('href').indexOf('#');
             if (hasPos > -1) {
                 var res = _this.attr('href').substring(hasPos);
                 if (res != '' && res != '#' && $(res).length) {
                     var refElement = $(_this.attr('href'));
                     if (refElement.position().top <= (scrollPos + 60) && refElement.position().top + refElement.height() > (scrollPos + 60)) {
                         menuLinks.removeClass('active');
                         _this.addClass('active');
                     }
                     if (scrollPos < 1) {
                         _this.removeClass('active');
                     }
                 }
             }
         });
 
         // Sticky nav Start
         var navHeight = 0,
                 miniHeaderHeight = 0;
         if ($('header nav.navbar').length) {
             navHeight = $('header nav.navbar').outerHeight();
         }
         if ($('.header-top-bar').length) {
             miniHeaderHeight = $('.header-top-bar').outerHeight();
         }
         var headerHeight = navHeight + miniHeaderHeight;
         if (!$('header').hasClass('no-sticky')) {
             if (scrollPos >= headerHeight) {
                 $('header').addClass('sticky');
                 if (!$('.header-top-bar').is(':hidden')) {
                     $('.header-top-bar').css({'top': '-' + (miniHeaderHeight) + 'px'});
                     $('.header-top-bar + .navbar').css({'top': '0px'});
                 } else {
                     $('.header-top-bar, .header-top-bar + .navbar').css({'top': ''});
                 }
             } else if (scrollPos <= headerHeight) {
                 $('header').removeClass('sticky');
                 if (!$('.header-top-bar').is(':hidden')) {
                     $('.header-top-bar').css({'top': '0px'});
                     $('.header-top-bar + .navbar').css({'top': (miniHeaderHeight) + 'px'});
                 } else {
                     $('.header-top-bar, .header-top-bar + .navbar').css({'top': ''});
                 }
             }
         }
 
         // Header sticky
         if (scrollPos > (headerHeight + 150)) {
             setTimeout(function () {
                 $('header').addClass('sticky-active');
             }, headerTransition); // Header transition effect time
         }
         if (scrollPos < headerHeight) {
             setTimeout(function () {
                 $('header').removeClass('sticky-active');
             }, headerTransition); // Header transition effect time
         }
 
         // Hide side menu on scroll
         if (scrollPos >= 200 && getWindowWidth() > menuBreakPoint) {
 
             // Close all dropdown menu
             $('.dropdown').trigger('mouseleave');
         }
 
         // Scroll to top
         if (scrollPos > 150) {
             $('.scroll-top-arrow').fadeIn('300');
         } else {
             $('.scroll-top-arrow').fadeOut('300');
         }
 
         // Set full screen height & top space
         if (scrollPos <= 0) {
             setTimeout(function () {
                 fullScreenHeight();
                 setTopSpaceHeight();
             }, headerTransition); // Header transition effect time
         }
 
         lastScroll = scrollPos;
     }
 

    /* ===================================
     Overlap section
     ====================================== */

    // Top overlap section position
    function setOverLayerPosition() {
        if (($('.overlap-section').length > 0 || $('.overlap-section-one-fourth').length > 0 || $('.overlap-section-three-fourth').length > 0)) {
            $('.overlap-section, .overlap-section-one-fourth, .overlap-section-three-fourth').each(function () {
                let _this = $(this),
                        overlayBreakpoint = 767;

                if (_this.hasClass('md-overlap-disable')) {
                    overlayBreakpoint = 991;
                } else if (_this.hasClass('sm-overlap-disable')) {
                    overlayBreakpoint = 767;
                }

                if (getWindowWidth() > overlayBreakpoint) {
                    setTimeout(function () {
                        _this.imagesLoaded(function () {
                            var closestSectionObj = _this.closest('section');
                            if (_this.closest('footer').length) {
                                closestSectionObj = _this.closest('footer');
                            }
                            var sectionPaddingTop = parseInt(closestSectionObj.css('padding-top')),
                                    areaHeight = _this.find('*').outerHeight(),
                                    overlayTop = areaHeight + sectionPaddingTop;
                            if (_this.hasClass('overlap-section-one-fourth')) {
                                overlayTop = (areaHeight / 4) - overlayTop;
                            } else if (_this.hasClass('overlap-section-three-fourth')) {
                                overlayTop = ((areaHeight * 3) / 4) - overlayTop;
                            } else {
                                overlayTop = (areaHeight / 2) - overlayTop;
                            }
                            _this.css('margin-top', overlayTop);
                            var parentSectionObj = closestSectionObj.prev('.overlap-height'),
                                    overlapGap = parentSectionObj.find('.overlap-gap-section');
                            parentSectionObj.imagesLoaded(function () {
                                if (overlapGap.length > 0) {
                                    var gapSectionHeight = overlapGap.outerHeight() + (Math.abs(overlayTop) - sectionPaddingTop);
                                    overlapGap.parents('.overlap-height').height(gapSectionHeight);
                                }
                            });
                        });
                    }, 500);
                } else {
                    setTimeout(function () {
                        $('.overlap-height').height('inherit');
                        $('.overlap-section, .overlap-section-one-fourth, .overlap-section-three-fourth').css('margin-top', 'inherit');
                    }, 500);
                }
            });
        }
    }

    // Bottom overlap section position
    function setBottomOverLayerPosition(delay) {
        if (($('.overlap-section-bottom').length > 0) && getWindowWidth() >= 768) {
            $('.overlap-section-bottom').each(function () {
                var _this = $(this),
                        timeOut = (_this.find('.instafeed-wrapper').length > 0) ? delay : 10;
                setTimeout(function () {
                    _this.imagesLoaded(function () {
                        var areaHeight = _this.outerHeight(),
                                overlayerMargin = ((areaHeight / 2) - areaHeight);
                        _this.parents('section').next('.overlap-gap-section-bottom').css('margin-top', overlayerMargin);
                        _this.parents('section').next('.overlap-gap-section-bottom').css('padding-top', areaHeight);
                    });
                }, timeOut);
            });
        } else {
            $('.overlap-gap-section-bottom').css('margin-top', '');
            $('.overlap-gap-section-bottom').css('padding-top', '');
        }
    }

    
    /* ===================================
     Particles
     ====================================== */

    var particleDefaultOptions = {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: !1,
                    value_area: 800
                }
            },
            color: {
                value: ["#fdc14c", "#fd5c4c", "#48bb0f"]
            },
            shape: {
                type: "circle"
            },
            size: {
                value: 10,
                random: !0,
                anim: {
                    enable: !0,
                    speed: 1
                }
            },
            opacity: {
                value: 0.5,
                random: false
            },
            move: {
                direction: "right",
                attract: {
                    enable: !0
                }
            },
            line_linked: {
                enable: !1
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: !1
                },
                onclick: {
                    enable: !1
                }
            }
        },
        "retina_detect": true
    };
    var particleItems = $('[data-particle="true"]');
    if (typeof particlesJS === 'function' && particleItems.length) {
        $.each(particleItems, function (index, particleItem) {
            var particleId = $(particleItem).attr('id');
            var particleItemOptions = $(particleItem).attr('data-particle-options');
            if (particleItemOptions != 'undefined' && typeof particleItemOptions !== typeof undefined) {
                particleItemOptions = JSON.parse(particleItemOptions);
            } else {
                particleItemOptions = particleDefaultOptions;
            }
            particlesJS(particleId, particleItemOptions);
        });
    }


    /* ===================================
     Custom cursor
     ====================================== */

    var customCursorInit = false;
    handleCustomCursor();

    // Custom cursor issue
    forceHideCustomCursor();
    $(window).resize(function () {
        if (!customCursorInit && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            handleCustomCursor();
        }
        forceHideCustomCursor();
    });
    function forceHideCustomCursor() {
        setTimeout(function () {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                $('.cursor-page-inner').hide();
            } else {
                $('.cursor-page-inner').show();
            }
        }, 250);
    }

    function handleCustomCursor() {
        if ($('body').hasClass('custom-cursor')) {
            customCursorInit = true;
            const cursorInnerEl = document.querySelector('.circle-cursor-inner');
            const cursorOuterEl = document.querySelector('.circle-cursor-outer');
            let lastY, lastX;
            let magneticFlag = false;
            let anchorHover = false;

            // Document - mouse move
            window.onmousemove = function (event) {
                if (!magneticFlag) {
                    cursorOuterEl.style.transform = 'translate(' + event.clientX + 'px, ' + event.clientY + 'px' + ')';
                }
                if (cursorInnerEl.style.opacity = '0') {
                    cursorInnerEl.style.opacity = '1';
                }
                cursorInnerEl.style.transform = 'translate(' + event.clientX + 'px, ' + event.clientY + 'px' + ')';
                lastY = event.clientY;
                lastX = event.clientX;
            }

            // Link - mouse enter
            $('body').on('mouseenter', 'a', function () {
                cursorInnerEl.classList.add('cursor-link-hover');
                cursorOuterEl.classList.add('cursor-link-hover');
                anchorHover = true;
            });

            // Disable custom cursor when mouse enter in the magic cursor element
            $('body').on('mouseenter', '.magic-cursor', function () {
                cursorInnerEl.style.visibility = 'hidden';
                cursorOuterEl.style.visibility = 'hidden';
            });

            // Enable custom cursor when mouse leave from the magic cursor element
            $('body').on('mouseleave', '.magic-cursor', function () {
                cursorInnerEl.style.visibility = 'visible';
                cursorOuterEl.style.visibility = 'visible';
            });

            // Link - mouse leave
            $('body').on('mouseleave', 'a', function () {
                if ($(this).is('a') && $(this).closest('.cursor-as-pointer').length) {
                    return;
                }
                cursorInnerEl.classList.remove('cursor-link-hover');
                cursorOuterEl.classList.remove('cursor-link-hover');
                anchorHover = false;
            });

            // Cursor - mouse enter
            $('body').on('mouseenter', '.rounded-box', function () {
                const $elem = $(this);
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                if (anchorHover) {
                    cursorInnerEl.classList.remove('cursor-link-hover');
                    cursorOuterEl.classList.remove('cursor-link-hover');
                }

                cursorOuterEl.style.transition = 'all .2s ease-out';
                cursorOuterEl.style.transform = 'translate(' + $elem.offset().left + 'px, ' + ($elem.offset().top - scrollTop) + 'px' + ')';
                cursorOuterEl.style.width = $elem.width() + 'px';
                cursorOuterEl.style.height = $elem.height() + 'px';
                cursorOuterEl.style.marginLeft = 0;
                cursorOuterEl.style.marginTop = 0;
                magneticFlag = true;
            });

            // Cursor - mouse leave
            $('body').on('mouseleave', '.rounded-box', function () {
                if (anchorHover) {
                    cursorInnerEl.classList.add('cursor-link-hover');
                    cursorOuterEl.classList.add('cursor-link-hover');
                }

                cursorOuterEl.style.transition = null;
                cursorOuterEl.style.width = null;
                cursorOuterEl.style.height = null;
                cursorOuterEl.style.marginLeft = null;
                cursorOuterEl.style.marginTop = null;
                magneticFlag = false;
            });

            cursorInnerEl.style.visibility = 'visible';
            cursorOuterEl.style.visibility = 'visible';
        }
    }

})