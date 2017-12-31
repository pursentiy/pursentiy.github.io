$(function() {

$(window).scroll(function(){
  if ($(this).scrollTop() < 100) {
      //допустим показать элемент если прокрутили больше чем на 100 пикселей скролл
  } else {
    //другая анимация, например спрятать, если скролл прокручен меньше, чем на 100
  }
});


$('.button_toggle').on('click',function(){
		$('.main_navigation').toggleClass('scroll');
		$('.wrapper').toggleClass('wrapper_small');


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
