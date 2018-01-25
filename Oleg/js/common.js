
$(document).ready(function(){


  AOS.init();

  $("#owl-demo-review").owlCarousel({
    autoPlay: 5000,
    center: true,
    items: 1,
    nav: true,
    loop: true,
    responsiveClass: true,
    navigation: true,
  });

  $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
  $(".owl-next").html('<i class="fa fa-chevron-right"></i>');

  $("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $(".main_navigation").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });




  /*
  $(".owl-carousel").owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 23000,
    margin:10,
    nav:false,
    dots: true,
    items: 1,
  });
  */


  

  $(".owl-carousel").owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 5000,
    margin:10,
    nav:false,
    dots: false,
    items: 1,
  });


  $('.button_toggle').on('click',function(){
    $('.main_navigation').toggleClass('open');
    $('.close_menu').toggleClass('close');
  });

  $('.trigger').on('click',function(){
    $('.side_bar').toggleClass('closeBar');
  });


  $('.box').on('click',function(){
    $('.possible .box_1').css(
      'height', '245px'
      );
  });


  $('.box').on('click',function(){

  });

  var clock = $('.clock').FlipClock({
   clockFace : "DailyCounter",
   autoStart: false,
   callbacks: {
    stop : function() {
      $('.message').html('Время прошло');
    }
  }
});

  clock.setTime(1000);
  clock.setCountdown(false);
  clock.start();

    $("img, a").on("dragstart", function (event) {
    event.preventDefault();
  });

      $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').css("display:block");
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });



  var i = 0;
  function yved(){
    i=1;
$('.yved:nth-child('+i+')').fadeIn(500).delay(7000).fadeOut(500 );//В этой строчке в мс 500 - время анимации появления, 5000 - время задержки, 500 - время затухания уведомления соответсвенно
}
setTimeout(function(){
  setInterval(
    function(){
      i=i+1;
if(i>10) i=1;//10 - количество уведомлений
$('.yved:nth-child('+i+')').fadeIn(500).delay(7000).fadeOut(500 );//В этой строчке в мс 500 - время анимации появления, 5000 - время задержки, 500 - время затухания уведомления соответсвенно
},15000);//25000 - задержка в мс меду показами уведомлений
  yved();
},5000);//10000 - задержка в мс перед показом первого уведомления



document.body.onclick = function(e){
  if(e.target.classList.contains('wrap')){
    var elem = e.target.parentElement, children = elem.children, minus = e.target.children;

    var hover = children[1];
    if(hover.classList.contains('click')){
     hover.style.display = "none";
     minus[1].style.color = "#ad9581";
     hover.classList.remove('click');
   }
   else{
     hover.style.display = "block";
     minus[1].style.color = "transparent";
     hover.classList.add('click');
   }
 }
}

 //alert(element); 



 $('#parallax1').enllax(); 


});