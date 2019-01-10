$(document).ready(function () {

    $('.button_toggle').on('click', function () {
        $('.main_navigation').toggleClass('scroll');
        $('.wrapper').toggleClass('wrapper_small');

    });

    $("#owl-demo-review").owlCarousel({
        loop: true,
        items: 1,
        margin: 10,
        nav: false,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: false,
        singleItem: true
    });

    $("#owl-demo-review-portfolio").owlCarousel({
        loop: true,
        items: 3,
        stagePadding: 10,
        margin: 10,
        nav: false,
        center: true,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: false,
        singleItem: true
    });

    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'sectionsColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],

        'afterLoad': function (anchorLink, index) {
            if (index == 2) {
                $('#iphone3, #iphone2, #iphone4').addClass('active');
            }
        },

        'onLeave': function (index, nextIndex, direction) {
            if (index == 3 && direction == 'down') {
                $('.section').eq(index - 1).removeClass('moveDown').addClass('moveUp');
            }
            else if (index == 3 && direction == 'up') {
                $('.section').eq(index - 1).removeClass('moveUp').addClass('moveDown');
            }

            $('#staticImg').toggleClass('active', (index == 2 && direction == 'down') || (index == 4 && direction == 'up'));
            $('#staticImg').toggleClass('moveDown', nextIndex == 4);
            $('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
        }
    });

    const settingCss = (e) => {
        //первая прокрутка
        let fpNav = document.getElementById("fp-nav");
        let owlDots = document.getElementsByClassName("owl-dots");

        let owlCarouselRect = document.getElementById("owlCarouselRect");
        let sizeOwlCarouselRect = owlCarouselRect.getBoundingClientRect();
        //let cssProp = $(window).width() - owlCarouselRect.clientWidth - sizeOwlCarouselRect.right;
        console.log(fpNav.clientHeight);
        if ($(window).width() > 763) {
            $(fpNav).css({ "top": sizeOwlCarouselRect.bottom - fpNav.clientHeight + $(".owl-dots").height() + "px", "width": sizeOwlCarouselRect.left + "px" });
            $(".social").css({ "left": -sizeOwlCarouselRect.left + "px", "width": sizeOwlCarouselRect.left + "px" });
            $(".logo").css({ "left": (sizeOwlCarouselRect.left - 137) / 2 + "px" });
            $(owlDots[0]).css({ "margin-top": -fpNav.clientHeight + "px" });
            $(".pannel").css({ "right": -$(window).width() + sizeOwlCarouselRect.right - $(".pannel").width() + $(".pannel .leftSide").width() + "px" });
        }
    }

    let fromOnclick = false;
    $(".pannel .leftSide").click(function () {
        let owlCarouselRect = document.getElementById("owlCarouselRect");
        let sizeOwlCarouselRect = owlCarouselRect.getBoundingClientRect();
        if (!fromOnclick) {
            $(".pannel").css({ "right": -$(window).width() + sizeOwlCarouselRect.right + "px" });
            fromOnclick = true;
        }
        else {
            $(".pannel").css({ "right": -$(window).width() + sizeOwlCarouselRect.right - $(".pannel").width() + $(".pannel .leftSide").width() + "px" });
            fromOnclick = false
        }
    });


    $(window).resize(function () {
       
        settingCss();
        
    });

    settingCss();
});