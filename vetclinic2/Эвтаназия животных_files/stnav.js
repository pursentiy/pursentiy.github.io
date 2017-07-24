$(document).ready(function(){
        var HeaderTop = $('.topnav').offset().top;
		
        $(window).scroll(function(){
                if( $(window).scrollTop() > HeaderTop ) {
                        $('.topnav').css({position: 'fixed', top: '0px'});
                } else {
                        $('.topnav').css({position: 'static'});
                }
        });
	});