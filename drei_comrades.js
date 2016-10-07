$(function() {


	
	$('[class^="pos_"]').on('click',function(){
$('body').addClass('overflow')
});

	$('.pos_first').on('click',function(){
		$('.parent_popup').addClass('parent_popup_display')
		$('.popup').addClass('first')
	});

	$('.pos_second').on('click',function(){
		$('.parent_popup').addClass('parent_popup_display')
		$('.popup').addClass('second')
	});

	$('.pos_third').on('click',function(){
		$('.parent_popup').addClass('parent_popup_display')
		$('.popup').addClass('third')
	});

	$('.pos_fourth').on('click',function(){
		$('.parent_popup').addClass('parent_popup_display')
		$('.popup').addClass('fourth')
	});

	$('.pos_fifth').on('click',function(){
		$('.parent_popup').addClass('parent_popup_display')
		$('.popup').addClass('fifth')
	});

	$('.pos_sixth').on('click',function(){
		$('.parent_popup').addClass('parent_popup_display')
		$('.popup').addClass('sixth')
	});


	$('.close').on('click',function(){
		$('body').removeClass('overflow')
		$('.parent_popup').removeClass('parent_popup_display');
	});

	$('.popup').on('click',function(){
		$('body').removeClass('overflow')
		$('.parent_popup').removeClass('parent_popup_display');
		if($('.popup').hasClass('first')){
			$('.popup').removeClass('first')
		}
		else if($('.popup').hasClass('second')){
			$('.popup').removeClass('second')
		}
		else if($('.popup').hasClass('third')){
			$('.popup').removeClass('third')
		}
		else if($('.popup').hasClass('fourth')){
			$('.popup').removeClass('fourth')
		}
		else if($('.popup').hasClass('fifth')){
			$('.popup').removeClass('fifth')
		}
		else if($('.popup').hasClass('sixth')){
			$('.popup').removeClass('sixth')
		}

	})


	if ($(window).width() <= '995px'){
		$('.background_dark').css(
			"display","none");
	}


	$('.button_toggle').on('click',function(){
		$('.main_navigation').toggleClass('scroll');
		$('.wrapper').toggleClass('wrapper_small');

	});

	$('a[href^="#"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
return false; 
});


});