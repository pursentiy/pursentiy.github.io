$(function() {

	var minP=-45, maxP=45, minPC=58, maxPC=99, minH = -95, maxH = 95, click = 0, minV=-15, maxV=34, minHow=0, maxHow=361;


//Меню
$('.button_toggle').on('click',function(){
				$('.main_navigation').toggleClass('open');
			});

//Вкладка1
$('#first').on('click',function(){
	console.log("Pressed")
				$('header .mainBlock1').css({
					display: "block"
				});
				$('header .mainBlock2').css({
					display: "none"
				});
				$('header .mainBlock3').css({
					display: "none"
				});
				$('header .mainBlock4').css({
					display: "none"
				});
			});


//Вкладка 2
$('#second').on('click',function(){
	console.log("Pressed")
				$('header .mainBlock1').css({
					display: "none"
				});
				$('header .mainBlock2').css({
					display: "block"
				});
				$('header .mainBlock3').css({
					display: "none"
				});
				$('header .mainBlock4').css({
					display: "none"
				});
			});

//Вкладка 3
$('#third').on('click',function(){
	console.log("Pressed")
				$('header .mainBlock1').css({
					display: "none"
				});
				$('header .mainBlock2').css({
					display: "none"
				});
				$('header .mainBlock3').css({
					display: "block"
				});
				$('header .mainBlock4').css({
					display: "none"
				});
			});


//Вкладка 4
$('#fourth').on('click',function(){
	console.log("Pressed")
				$('header .mainBlock1').css({
					display: "none"
				});
				$('header .mainBlock2').css({
					display: "none"
				});
				$('header .mainBlock3').css({
					display: "none"
				});
				$('header .mainBlock4').css({
					display: "block"
				});
			});



var timerId;

	$('.circleButton').on('click',function(){ 
		click++;
/* Вертикальное отклонение*/
		if(click%2!=0){
			timerIdRoll = setInterval(function() {
				$('header .mainBlock1 .cockpit .elements .blockHaw .cirle').css({
					transform: 'rotate('+(minH + Math.random() * (maxH - minH)) +'deg)'
				});
			    $('header .mainBlock1 .cockpit .elements .blockHaw .background').css({
					top: (minV + Math.random() * (maxV - minV)) +'px'
				});
			},1400);

			timerIdHow = setInterval(function() {
             $('header .mainBlock1 .cockpit .elements .blockRoll .background').css({
					transform: 'rotate('+(minHow + Math.random() * (maxHow - minHow)) +'deg)'
				});

			},2200);

				timerIdPitch = setInterval(function() {
				$('header .mainBlock1 .cockpit .elements .blockPitch .arrow').css({
					transform: 'rotate('+(minP + Math.random() * (maxP - minP)) +'deg)'
				});
			    $('header .mainBlock1 .cockpit .elements .blockPitch .circle').css({
					left: (minPC + Math.random() * (maxPC - minPC)) +'px'
				});
			},1700);

			console.log("start");
		}
	});

/*Прерывание по нажатию*/
	$('.circleButton').on('click',function(){ 
		
		if(click%2==0){
			
			clearInterval(timerIdRoll);
		    clearInterval(timerIdHow);
		    clearInterval(timerIdPitch);
			$('header .mainBlock1 .cockpit .elements .blockHaw .cirle').css({
					transform: 'rotate(0deg)'
				});
			$('header .mainBlock1 .cockpit .elements .blockHaw .background').css({
					top: '8px'
				});
             $('header .mainBlock1 .cockpit .elements .blockRoll .background').css({
					transform: 'rotate(0deg)'
				});
             $('header .mainBlock1 .cockpit .elements .blockPitch .arrow').css({
					transform: 'rotate(0deg)'
				});
			    $('header .mainBlock1 .cockpit .elements .blockPitch .circle').css({
					left: '78px'
				});

		}
	});




});