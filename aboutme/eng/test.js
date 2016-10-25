$(function() {

	

$("above2").clone().prependTo("above2_clone");
	function setHeiHeight() {
		var absolute_width=$(window).width();
		var height_1=$(window).height()-160;
		var height=$(window).height();
		var height_description= $('.wrapper').height();
		$(window).resize( console.log(absolute_width));
		$(window).resize( console.log(height));
		$(window).resize(console.log((height/2-height_description/2)));

		 if(height>500 & absolute_width>1010){
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


		if(height>1000 & absolute_width>=760){
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

		

		else if(absolute_width<1080 & absolute_width>=660 & height<1005 & height>500){
			$('.above1').css({
				height: 700 + 'px'
			});

			$('.above2').css({
				height: 700 + 'px'
			});

			$('.above3').css({
				height: 700 + 'px'
			});
			$('.above4').css({
				height: 800 + 'px'
			});
			$('.beneath_contacts').delay(1000).css({
				display:'block'
			});
		}

		else if(absolute_width<660 & absolute_width>=540 & height>500){
			$('.above1').css({
				height: 700 + 'px'
			});

			$('.above2').css({
				height: 700 + 'px'
			});

			$('.above3').css({
				height: 700 + 'px'
			});
			$('.above4').css({
				height: 800 + 'px'
			});
			$('.beneath_contacts').delay(1000).css({
				display:'block'
			});

		}

		else if(absolute_width<760 & absolute_width>=500 & height<500){
			$('.above1').css({
				height: 500 + 'px'
			});

			$('.above2').css({
				height: 500 + 'px'
			});

			$('.above3').css({
				height: 500 + 'px'
			});
			$('.above4').css({
				height: 650 + 'px'
			});
			$('.beneath_contacts').delay(1000).css({
				display:'block'
			});

		}

		else if(absolute_width<540 & absolute_width>=410 & height>500 ){
			$('.above1').css({
				height: 660 + 'px'
			});

			$('.above2').css({
				height: 660 + 'px'
			});

			$('.above3').css({
				height: 660 + 'px'
			});
			$('.above4').css({
				height: 730 + 'px'
			});
			$('.beneath_contacts').css({
				display:'block'
			});

		}

		else if(absolute_width<410  & height>500 ){
			$('.above1').css({
				height: 500 + 'px'
			});

			$('.above2').css({
				height: 500 + 'px'
			});

			$('.above3').css({
				height: 500 + 'px'
			});
			$('.above4').css({
				height: 600 + 'px'
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

		else if(absolute_width<1030 & absolute_width>=660 & height>800) {
			$(".above1 .description .first").css("fontSize",5.50 + 'em');
			$(".above1 .description .second").css("fontSize",5.247 + 'em');
			$(".above1 .description .third").css("fontSize",5.2 + 'em');
			$(".above1 .description .fourth").css("fontSize",4.0 + 'em');
			$(".above1 .description .fifth").css("fontSize",2.359 + 'em');
		}

		else if(absolute_width<760 & absolute_width>=500 & height<500){
			$(".above1 .description .first").css("fontSize",3.57 + 'em');
			$(".above1 .description .second").css("fontSize",2.947 + 'em');
			$(".above1 .description .third").css("fontSize",2.9 + 'em');
			$(".above1 .description .fourth").css("fontSize",2.583 + 'em');
			$(".above1 .description .fifth").css("fontSize",1.359 + 'em');
		}




		else if(absolute_width<660 & absolute_width>=540) {
			$(".above1 .description .first").css("fontSize",4.50 + 'em');
			$(".above1 .description .second").css("fontSize",5.247 + 'em');
			$(".above1 .description .third").css("fontSize",5.2 + 'em');
			$(".above1 .description .fourth").css("fontSize",3.283 + 'em');
			$(".above1 .description .fifth").css("fontSize",2.359 + 'em');
		}

		else if(absolute_width<540 & absolute_width>=410) {
			$(".above1 .description .first").css("fontSize",3.57 + 'em');
			$(".above1 .description .second").css("fontSize",2.947 + 'em');
			$(".above1 .description .third").css("fontSize",2.9 + 'em');
			$(".above1 .description .fourth").css("fontSize",2.583 + 'em');
			$(".above1 .description .fifth").css("fontSize",1.579 + 'em');
		}

		else if(absolute_width<410 ) {
			$(".above1 .description .first").css("fontSize",2.6 + 'em');
			$(".above1 .description .second").css("fontSize",2.447 + 'em');
			$(".above1 .description .third").css("fontSize",2.4 + 'em');
			$(".above1 .description .fourth").css("fontSize",1.889 + 'em');
			$(".above1 .description .fifth").css("fontSize",0.859 + 'em');
		}

		
//$(".above1 .description ").css("paddingTop",(height-height_description)*0.5);
}


$("#owl-demo").owlCarousel({

      autoPlay: 15000, //Set AutoPlay to 3 seconds

      singleItem:true

  });

$('#owl-example').owlCarousel({
	autoPlay: 5000,
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
$(window).load( setHeiHeight );
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


setTimeout(function(){
		$('body').addClass('loaded');
	},1200);

});