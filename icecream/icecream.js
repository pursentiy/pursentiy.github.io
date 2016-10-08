
$(function() {
	
  var st= $(window).width() ;
  console.log(st);
  $('.bxslider').bxSlider({

      slideWidth: 480,
    minSlides: 3,
    maxSlides: 5,
    moveSlides: 1,
    slideMargin: 0,

});

   $(".bx-wrapper").css('max-width',(10880)+'px');

if(st>=1980){
   $(".bx-wrapper .bx-next").css('right',(0)+'px');
 }

else if(st>=1100){
   $(".bx-wrapper .bx-next").css('right',-(st-1980)+'px');
}

else if(st>=767){
 $(".bx-wrapper .bx-next").css('right',(880)+'px');
}

else if(st>=480){
   $(".bx-wrapper .bx-next").css('right',-(st-1980)+'px');
}

else if(st>=0){
     $(".bx-wrapper .bx-next").css('right',(1500)+'px');
}


 $(window).resize(function() {
          var st= $(window).width() ;
     console.log(st);
if(st>=1980){
   $(".bx-wrapper .bx-next").css('right',(0)+'px');
 }

else if(st>=1100){
   $(".bx-wrapper .bx-next").css('right',-(st-1980)+'px');
}

else if(st>=767){
 $(".bx-wrapper .bx-next").css('right',(880)+'px');
}

else if(st>=480){
   $(".bx-wrapper .bx-next").css('right',-(st-1980)+'px');
}

else if(st>=0){
     $(".bx-wrapper .bx-next").css('right',(1500)+'px');
}

  
    });

     

  $('.button_toggle').on('click',function(){
    $('.main_navigation').toggleClass('scroll');
    $('.wrapper').toggleClass('wrapper_small');

  });

});
