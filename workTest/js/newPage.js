$(document).ready(function () {

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

    $('.button_toggle').on('click', function () {
        $('.main_navigation').toggleClass('scroll');
        $('.wrapper').toggleClass('wrapper_small');
    });

    const settingCss = (e) => {
        const description = document.getElementById("description");
        const descriptionCoords = description.getBoundingClientRect();
        $(".WeddingCreaive").css({ "left": descriptionCoords.left + "px" });
        $(".bottomMenu").css({ "padding-right": descriptionCoords.left + "px" });
    }

    $('#imageGallery').lightSlider({
        gallery: false,
        item: 3,
        loop: true,
        thumbItem: 1,
        centerSlide: true,
        slideMargin: 80,
        galleryMargin: 50,
        enableDrag: true,
        onSliderLoad: function(el) {
          el.lightGallery({
            selector: '#imageGallery .lslide'
          });
        },
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
      });

    $(window).resize(function () {
        settingCss();
    });

    settingCss();

    $(() => {
        var $sendBtn = $('.send-button'),
                $iWrapper = $('.icon-wrapper'),
                $i1 = $('.icon-1'),
                $i2 = $('.icon-2');
        
        function animationEvent() {
            var t,
                    el = document.createElement('fakeelement');
    
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'animationend',
                WebkitAnimation: 'webkitAnimationEnd'
            };
    
            for (t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t];
                }
            }
        }
    
        $sendBtn.on('click', e => {
            $iWrapper.css('color', '#66bb6a');
            $iWrapper.addClass('icon-wrapper-animation');
            $sendBtn.addClass('clicked');
            $i1.delay(900);
            $i1.fadeTo(300, 0);
            $i2.delay(900);
            $i2.fadeTo(300, 1);		
        });
    
        $sendBtn.on(animationEvent(), e => {
            if (e.originalEvent.animationName == 'input-shadow') {
                $sendBtn.removeClass('clicked');
            }
        });
    
        $iWrapper.on(animationEvent(), e => {
            if (e.originalEvent.animationName == 'icon-animation') {
                $iWrapper.removeClass('icon-wrapper-animation');
                setTimeout(reset, 1200);
            }
        });
    
        function reset() {
            $i1.fadeTo(250, 1);
            $i2.fadeTo(250, 0);
            $iWrapper.css('color', '#f8bbd0');
        }
    }); // end of document ready
    
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 1200);
})