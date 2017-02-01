$(function() {
	var minH = -95, maxH = 95, click = 0, minV=-15, maxV=34, minHow=0, maxHow=361;

var timerId;

	$('.circleButton').on('click',function(){ 
		click++;
/* Вертикальное отклонение*/
		if(click%2!=0){
			timerIdRoll = setInterval(function() {
				$('header .mainBlock .cockpit .elements .blockHaw .cirle').css({
					transform: 'rotate('+(minH + Math.random() * (maxH - minH)) +'deg)'
				});
			    $('header .mainBlock .cockpit .elements .blockHaw .background').css({
					top: (minV + Math.random() * (maxV - minV)) +'px'
				});
			},1400);

			timerIdHow = setInterval(function() {
             $('header .mainBlock .cockpit .elements .blockRoll .background').css({
					transform: 'rotate('+(minHow + Math.random() * (maxHow - minHow)) +'deg)'
				});

			},2200);

			console.log("start");
		}
	});

/*Прерывание по нажатию*/
	$('.circleButton').on('click',function(){ 
		
		if(click%2==0){
			
			clearInterval(timerIdRoll);
		    clearInterval(timerIdHow);
			$('header .mainBlock .cockpit .elements .blockHaw .cirle').css({
					transform: 'rotate(0deg)'
				});
			$('header .mainBlock .cockpit .elements .blockHaw .background').css({
					top: '8px'
				});
             $('header .mainBlock .cockpit .elements .blockRoll .background').css({
					transform: 'rotate(0deg)'
				});

		}
	});

});