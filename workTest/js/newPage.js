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

})