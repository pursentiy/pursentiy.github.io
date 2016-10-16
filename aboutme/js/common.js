$(function() {


	function setHeiHeight() {
		var absolute_width=$(window).width();
		var height=$(window).height()-160;
		var height_description= $('.wrapper').height();
		$(window).resize( console.log(absolute_width));
		$(window).resize( console.log(height));
		$(window).resize(console.log((height/2-height_description/2)));
		if(height<415 & absolute_width<335){
$('.above1').css({
        height: $(window).height()-160 + 'px'
    });

     $('.above2').css({
        height: $(window).height()-160 + 'px'
    });

     $('.above3').css({
        height: $(window).height()-160 + 'px'
    });
      $('.above4').css({
        height: 1.2*$(window).height()-160 + 'px'
    });
		}

	else if(height>260){
    $('.above1').css({
        height: $(window).height()-160 + 'px'
    });

     $('.above2').css({
        height: $(window).height()-160 + 'px'
    });

     $('.above3').css({
        height: $(window).height()-160 + 'px'
    });
      $('.above4').css({
        height: $(window).height()-160 + 'px'
    });
  }
  else if(height<=260 & height>256){
    $('.above1').css({
        height: 1.5*$(window).height()-160 + 'px'
    });

     $('.above2').css({
        height: 1.5*$(window).height()-160 + 'px'
    });

     $('.above3').css({
        height: 1.5*$(window).height()-160 + 'px'
    });
      $('.above4').css({
        height: 1.5*$(window).height()-160 + 'px'
    });
  }

  else if(height<=256){
  	 $('.above1').css({
        height: 1.5*$(window).height()-160 + 'px'
    });

     $('.above2').css({
        height: 1.5*$(window).height()-160 + 'px'
    });

     $('.above3').css({
        height: 1.5*$(window).height()-160 + 'px'
    });
$('.above4').css({
        height: 2.2*$(window).height()-160 + 'px'
    });
  }
      if(absolute_width>=1030){
$(".above1 .description .first").css("fontSize",$(window).height()/15);
$(".above1 .description .second").css("fontSize",$(window).height()/9.7);
$(".above1 .description .third").css("fontSize",$(window).height()/12.5);
$(".above1 .description .fourth").css("fontSize",$(window).height()/13.59);
$(".above1 .description .fifth").css("fontSize",$(window).height()/33.59);

$(".above2 .description .first").css("fontSize",$(window).height()/35);
$(".above2 .description .second").css("fontSize",$(window).height()/32.7);
}

else if(absolute_width<1030 & absolute_width>=540) {
	$(".above1 .description .first").css("fontSize",$(window).height()/26);
$(".above1 .description .second").css("fontSize",$(window).height()/12);
$(".above1 .description .third").css("fontSize",$(window).height()/15.5);
$(".above1 .description .fourth").css("fontSize",$(window).height()/23.59);
$(".above1 .description .fifth").css("fontSize",$(window).height()/43.59);
}

else if(absolute_width<540 & absolute_width>=410) {
	$(".above1 .description .first").css("fontSize",$(window).height()/30.4);
$(".above1 .description .second").css("fontSize",$(window).height()/15);
$(".above1 .description .third").css("fontSize",$(window).height()/19.25);
$(".above1 .description .fourth").css("fontSize",$(window).height()/27.59);
$(".above1 .description .fifth").css("fontSize",$(window).height()/43.59);
}

else if(absolute_width<410 ) {
	$(".above1 .description .first").css("fontSize",$(window).height()/40);
$(".above1 .description .second").css("fontSize",$(window).height()/20.6);
$(".above1 .description .third").css("fontSize",$(window).height()/26.5);
$(".above1 .description .fourth").css("fontSize",$(window).height()/36.8);
$(".above1 .description .fifth").css("fontSize",$(window).height()/49.59);
}
//$(".above1 .description ").css("paddingTop",(height-height_description)*0.5);
}

 $("#owl-demo").owlCarousel({
 
      autoPlay: 5000, //Set AutoPlay to 3 seconds
 
    singleItem:true
 
  });

   $('#owl-example').owlCarousel({
    center: true,
    items : 2,
 loop:true,
 responsiveClass:true,
 navigation : true,
itemsDesktop : [1000,1], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet: [600,1],
});

    $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
 $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');


setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна

$('.sec_second').on('click',function(){
	$('.above2').slideToggle(500);
})

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

//$(".above1 .description ").css("paddingTop",$(window).height()/6.09);
//$(window).height()-600+'