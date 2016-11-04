$(function() {

	
	var display_width=$(window).width()
	var display_height=$(window).height()
	var width = $('.timer-element:first>[id^=timer-number-]:first').width()
	


console.log(width);
	console.log(display_height);

$('.timer-element:first ').css(
			'margin-left', '15px');


	if(width<20){
		$('.timer-element:first>[id^=timer-number-]:first').css(
			'width','58.99px','!important');
		$('.timer-element:first .timer-slide-inner').css(
			'width', '100%');


	}

	$('.timer-separator').css(
		'display','none');

	var close1=true;
	var close2=true;

/*Первая ссылка*/

	$('footer .first').on('click',function(){
		$('footer .politics').css(
			'display','block');
		setTimeout(function () {
			$('footer .politics').css(
				'opacity','1');
		}, 100);

		$('.overlay ').css(
			'display','block');
		setTimeout(function () {
			$('.overlay ').css(
				'opacity','0.7');
		}, 100);
	});

	$('footer .politics .close-btn').on('click',function(){
		setTimeout(function () {
			$('footer .politics').css(
				'display','none');
		}, 200);
		$('footer .politics').css(
			'opacity','0');
		$('.overlay ').css(
			'display','none');
		setTimeout(function () {
			$('.overlay ').css(
				'opacity','0');
		}, 300);
	});

	$('.overlay').on('click',function(){
		setTimeout(function () {
			$('footer .politics').css(
				'display','none');
		}, 200);
		$('footer .politics').css(
			'opacity','0');
		$('.overlay ').css(
			'display','none');
		setTimeout(function () {
			$('.overlay ').css(
				'opacity','0');
		}, 300);
	});

/* Конец */


/*Вторая ссылка*/

	$('footer .second').on('click',function(){
		$('footer .agreement').css(
			'display','block');
		setTimeout(function () {
			$('footer .agreement').css(
				'opacity','1');
		}, 100);

		$('.overlay ').css(
			'display','block');
		setTimeout(function () {
			$('.overlay ').css(
				'opacity','0.7');
		}, 100);
	});

	$('footer .agreement .close-btn').on('click',function(){
		setTimeout(function () {
			$('footer .agreement').css(
				'display','none');
		}, 200);
		$('footer .agreement').css(
			'opacity','0');
		$('.overlay ').css(
			'display','none');
		setTimeout(function () {
			$('.overlay ').css(
				'opacity','0');
		}, 300);
	});

	$('.overlay').on('click',function(){
		setTimeout(function () {
			$('footer .agreement').css(
				'display','none');
		}, 200);
		$('footer .agreement').css(
			'opacity','0');
		$('.overlay ').css(
			'display','none');
		setTimeout(function () {
			$('.overlay ').css(
				'opacity','0');
		}, 300);
	});

/* Конец */

/*Третья ссылка*/

	$('footer .third').on('click',function(){
		$('footer .garant').css(
			'display','block');
		setTimeout(function () {
			$('footer .garant').css(
				'opacity','1');
		}, 100);

		$('.overlay ').css(
			'display','block');
		setTimeout(function () {
			$('.overlay ').css(
				'opacity','0.7');
		}, 100);
	});

	$('footer .garant .close-btn').on('click',function(){
		setTimeout(function () {
			$('footer .garant').css(
				'display','none');
		}, 200);
		$('footer .garant').css(
			'opacity','0');
		$('.overlay ').css(
			'display','none');
		setTimeout(function () {
			$('.overlay ').css(
				'opacity','0');
		}, 300);
	});

	$('.overlay').on('click',function(){
		setTimeout(function () {
			$('footer .garant').css(
				'display','none');
		}, 200);
		$('footer .garant').css(
			'opacity','0');
		$('.overlay ').css(
			'display','none');
		setTimeout(function () {
			$('.overlay ').css(
				'opacity','0');
		}, 300);
	});

/* Конец */


/*Четвертая ссылка*/

	$('footer .fourth').on('click',function(){
		$('footer .partnership').css(
			'display','block');
		setTimeout(function () {
			$('footer .partnership').css(
				'opacity','1');
		}, 100);

		$('.overlay ').css(
			'display','block');
		setTimeout(function () {
			$('.overlay ').css(
				'opacity','0.7');
		}, 100);
	});

	$('footer .partnership .close-btn').on('click',function(){
		setTimeout(function () {
			$('footer .partnership').css(
				'display','none');
		}, 200);
		$('footer .partnership').css(
			'opacity','0');
		$('.overlay ').css(
			'display','none');
		setTimeout(function () {
			$('.overlay ').css(
				'opacity','0');
		}, 300);
	});

	$('.overlay').on('click',function(){
		setTimeout(function () {
			$('footer .partnership').css(
				'display','none');
		}, 200);
		$('footer .partnership').css(
			'opacity','0');
		$('.overlay ').css(
			'display','none');
		setTimeout(function () {
			$('.overlay ').css(
				'opacity','0');
		}, 300);
	});

/* Конец */

	$('.box_1').on('click',function(){

if(display_width>1025 ){
		if(close1==true){
			$('.possible .box_1').css(
				'height', '245px'
				);

			$('.possible .box_1 .plus').css(
				'color', 'transparent'
				);

			close1=false;}

			else if(close1==false){
				$('.possible .box_1').css(
					'height', '105px'
					);
				$('.possible .box_1 .plus').css(
					'color', '#7c378f'
					);

				close1=true;
			}
		}

		
			
		});

	$('.box_2').on('click',function(){

if(display_width>1025){
		if(close2==true){
			$('.possible .box_2').css(
				'height', '245px'
				);
			$('.possible .box_2 .plus').css(
				'color', 'transparent'
				);

			close2=false;}

			else if(close2==false){
				$('.possible .box_2').css(
					'height', '105px'
					);
				$('.possible .box_2 .plus').css(
					'color', '#7c378f'
					);

				close2=true;
			}
		}


		});


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
