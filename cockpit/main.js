$(function() {
	var minH = -95, maxH = 95, click = 0, minV=-15, maxV=34;

var timerId;

	$('.circleButton').on('click',function(){ 
		click++;
/* Вертикальное отклонение*/
		if(click%2!=0){
			timerId = setInterval(function() {
				$('header .mainBlock .cockpit .elements .blockHaw .cirle').css({
					transform: 'rotate('+(minH + Math.random() * (maxH - minH)) +'deg)'
				});
			    $('header .mainBlock .cockpit .elements .blockHaw .background').css({
					top: (minV + Math.random() * (maxV - minV)) +'px'
				});
			},1200);

			console.log("start");
		}
	});

/*Прерывание по нажатию*/
	$('.circleButton').on('click',function(){ 
		
		if(click%2==0){
			
			clearInterval(timerId);
			$('header .mainBlock .cockpit .elements .blockHaw .cirle').css({
					transform: 'rotate(0deg)'
				});
			$('header .mainBlock .cockpit .elements .blockHaw .background').css({
					top: '8px'
				});
		}
	});

});