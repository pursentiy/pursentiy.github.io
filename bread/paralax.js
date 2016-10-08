$(document).ready(function(){


$('div[href^="#"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
return false; 
});


	var touch = $('#touch-menu');
	var menu = $('.back');

	$(touch).on('click',function(e){
		e.preventDefault();
		menu.slideToggle();
	});

    $(window).resize(function(){
    	var wid = $(window).width();
    	if(wid > 990 && menu.is(':hidden')){
    		menu.removeAttr('style');
    	}
    });
	
});