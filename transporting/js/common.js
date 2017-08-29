$(function() {

//$('body').fadeOut()
$('.button_toggle').on('click',function(){
  $('.main_navigation').toggleClass('scroll');
  $('.wrapper').toggleClass('wrapper_small');
});

  $("#owl-demo-review").owlCarousel({
    loop:true,
    items:1,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    singleItem:true
  });

    $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollup').css("display:block")
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

    $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

});

