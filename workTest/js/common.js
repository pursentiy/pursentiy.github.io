$(document).ready(function () {

    const disableFullpageRes = 1025;
    const updateCssStyles = 768;
    const pannelWidth = 400;

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

    $(document).ready(function () {
        if ($(window).width() < disableFullpageRes) {
            // do any 480 width stuff here, or simply do nothing
            return;
        } else {
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
        }

        let offsetWidth;

        let fpNav = document.getElementById("fp-nav");
        let owlDots = document.getElementsByClassName("owl-dots");

        let header = document.getElementById("headerMenu");
        let sizeHeader = header.getBoundingClientRect();

        let owlStageOuter = document.getElementsByClassName("owl-stage-outer")[0];
        let sizeOwlStageOuter = owlStageOuter.getBoundingClientRect();


        let owlCarouselRect = document.getElementById("owlCarouselRect");
        let sizeOwlCarouselRect = owlCarouselRect.getBoundingClientRect();
        const settingCss = (e) => {
            //первая прокрутка

            //let cssProp = $(window).width() - owlCarouselRect.clientWidth - sizeOwlCarouselRect.right;
            //  console.log(fpNav.clientHeight);
            if ($(window).width() > updateCssStyles) {
                if ($(window).width() > disableFullpageRes) {
                    $(fpNav).css({ "top": sizeOwlCarouselRect.bottom - fpNav.clientHeight + $(".owl-dots").height() + "px", "width": sizeOwlStageOuter.left + "px" });
                    $(owlDots[0]).css({ "margin-top": -fpNav.clientHeight + "px" });
                }
                $(".social").css({ "left": -sizeOwlCarouselRect.left + "px", "width": sizeOwlStageOuter.left  + "px" });
                $(".logo").css({ "left": (sizeOwlStageOuter.left - 137) / 2 + "px" });
                $("#headerMenu").css({ "margin-left": sizeOwlStageOuter.left + "px", "width": $(owlStageOuter).innerWidth() + "px" });
                //header.style.marginLeft= `${$("#pannel").width() - sizeOwlStageOuter.right}px`;
                console.log(`Оступ справа: ${sizeOwlCarouselRect.left - sizeOwlStageOuter.left}`);
                console.log(`Оступ слева: ${sizeOwlStageOuter.right - $(owlStageOuter).innerWidth()}`);

                $(".pannel").css({ "margin-top": +fpNav.clientHeight / 4 + "px" });
              //  $(".pannel").css({ "right": -$(window).width() + sizeOwlStageOuter.right - $(".pannel").width() + "px" });

                const setPannelWidth = (width) => {
                    $(".pannel").css({ "width": width + 'px',  "right": -$(window).width() + sizeOwlCarouselRect.right - width + 'px'});
                    $("#mainLabel").css({ "right": -$(window).width() + sizeOwlCarouselRect.right + $('.leftSide').width() + 90  + "px" });
                }
                $(".owl-stage-outer").width()
                //setting pannel width accodring to state
                const liHeader = $(".headerMenu li");
                for (let i = liHeader.length - 1; i >= 0; i--) {
                    let buf = liHeader[i].children[0];
                    const offset =  $(buf).offset()
                    console.log($(buf).width());
                    offsetWidth = -offset.left + $(window).width();
                    if (offsetWidth > pannelWidth) {
                        setPannelWidth(offsetWidth);
                        return;
                    };
                }

            }
            else {
                $(".pannel").css({ "right": -$(window).width() + sizeOwlCarouselRect.right + "px" });
            }
        }

        let fromOnclick = false;
        $(".pannel").click(function () {
            if (!fromOnclick) {
                $(".pannel").css({ "right": -$(window).width() + sizeOwlCarouselRect.right + "px" });
                $(".leftSide").toggleClass("pannelAppear");
                fromOnclick = true;
            }
            else {
                $(".pannel").css({ "right": -$(window).width() + sizeOwlCarouselRect.right - offsetWidth + "px" });
                $(".leftSide").toggleClass("pannelAppear");
                fromOnclick = false
            }
        });


        $(window).resize(function () {

            settingCss();

        });

        settingCss();

    });




});