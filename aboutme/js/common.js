$(function() {

	setTimeout(function(){
		$('body').addClass('loaded');
	},1);

	$("above2").clone().prependTo("above2_clone");
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

		else if(height>545){
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
			$('.beneath_contacts').css({
				display:'none'
			});
		}

		else if(height<=545 & height>320 & absolute_width>500 ){
			$('.above1').css({
				height: 1.1*$(window).height()-160 + 'px'
			});

			$('.above2').css({
				height: 1.1*$(window).height()-160 + 'px'
			});

			$('.above3').css({
				height: 1.1*$(window).height()-160 + 'px'
			});
			$('.above4').css({
				height: 1.8*$(window).height()-160 + 'px'
			});
			$('.beneath_contacts').css({
				display:'block'
			});

		}

		else if(height<=545 & height>320 & absolute_width<500 ){
			$('.above1').css({
				height: 1.1*$(window).height()-160 + 'px'
			});

			$('.above2').css({
				height: 1.1*$(window).height()-160 + 'px'
			});

			$('.above3').css({
				height: 1.1*$(window).height()-160 + 'px'
			});
			$('.above4').css({
				height: 1.1*$(window).height()-160 + 'px'
			});
		$('.beneath_contacts').css({
				display:'none'
			});

		}

		else if(height<=320 & height>256){
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
			$('.beneath_contacts').css({
				display:'block'
			});
		}

		else if(height<=256 & height>206){
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
			$('.beneath_contacts').css({
				display:'block'
			});
		}

		else if(height<=206){
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
				height: 2.6*$(window).height()-160 + 'px'
			});
			$('.beneath_contacts').css({
				display:'block'
			});
		}
		if(absolute_width>=1030){
			$(".above1 .description .first").css("fontSize",$(window).height()/10.23);
			$(".above1 .description .second").css("fontSize",$(window).height()/10.8);
			$(".above1 .description .third").css("fontSize",$(window).height()/11.0);
			$(".above1 .description .fourth").css("fontSize",$(window).height()/14.19);
			$(".above1 .description .fifth").css("fontSize",$(window).height()/33.59);

			$(".above2 .description .first").css("fontSize",$(window).height()/35);
			$(".above2 .description .second").css("fontSize",$(window).height()/32.7);
		}

		else if(absolute_width<1030 & absolute_width>=540) {
			$(".above1 .description .first").css("fontSize",$(window).height()/17);
			$(".above1 .description .second").css("fontSize",$(window).height()/14);
			$(".above1 .description .third").css("fontSize",$(window).height()/14.3);
			$(".above1 .description .fourth").css("fontSize",$(window).height()/23.59);
			$(".above1 .description .fifth").css("fontSize",$(window).height()/43.59);
		}

		else if(absolute_width<540 & absolute_width>=410) {
			$(".above1 .description .first").css("fontSize",$(window).height()/15.9);
			$(".above1 .description .second").css("fontSize",$(window).height()/14.9);
			$(".above1 .description .third").css("fontSize",$(window).height()/15.25);
			$(".above1 .description .fourth").css("fontSize",$(window).height()/21.99);
			$(".above1 .description .fifth").css("fontSize",$(window).height()/43.59);
		}

		else if(absolute_width<410 ) {
			$(".above1 .description .first").css("fontSize",$(window).height()/17);
			$(".above1 .description .second").css("fontSize",$(window).height()/20.0);
			$(".above1 .description .third").css("fontSize",$(window).height()/20.5);
			$(".above1 .description .fourth").css("fontSize",$(window).height()/23.5);
			$(".above1 .description .fifth").css("fontSize",$(window).height()/49.59);
		}
//$(".above1 .description ").css("paddingTop",(height-height_description)*0.5);
}

$("#owl-demo").owlCarousel({

      autoPlay: 15000, //Set AutoPlay to 3 seconds

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

$('.sec_first').on('click',function(){ 
	$('.above3').removeClass('display_3'); 
	$('.above4').removeClass('display_4'); 
	$('.above2').removeClass('display_2'); 
	$('.before_elements').removeClass('pop_1'); 
	$('.before_elements').removeClass('pop_2'); 
	$('.before_elements').removeClass('pop_3'); 

}) 

$('.sec_second').on('click',function(){ 
	$('.above2').addClass('display_2'); 

	$('.above2').removeClass('display_none'); 
	$('.above3').addClass('display_none'); 
	$('.above4').addClass('display_none'); 

	$('.before_elements').removeClass('pop_2'); 
	$('.before_elements').removeClass('pop_3'); 
	$('.before_elements').addClass('pop_1'); 


}) 

$('.sec_third').on('click',function(){ 
	$('.above3').addClass('display_3'); 
	$('.above2').addClass('display_2'); 

	$('.above3').removeClass('display_none') 
	$('.above4').addClass('display_none'); 

	$('.before_elements').removeClass('pop_1'); 
	$('.before_elements').removeClass('pop_3'); 
	$('.before_elements').addClass('pop_2'); 

}) 

$('.sec_fourth').on('click',function(){ 
	$('.above4').addClass('display_4'); 
	$('.above3').addClass('display_3'); 
	$('.above2').addClass('display_2'); 
	$('.above4').removeClass('display_none') 
	$('.before_elements').removeClass('pop_1'); 
	$('.before_elements').removeClass('pop_2'); 
	$('.before_elements').addClass('pop_3'); 
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