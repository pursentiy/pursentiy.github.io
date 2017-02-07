$(function() {

	var tru = 0;minP=-45, maxP=45, minPC=58, maxPC=99, minH = -95, maxH = 95, click = 0, minV=-15, maxV=34, minHow=0, maxHow=361, val = 0;
var timerId, timerIdRoll, timerIdHow, timerIdPitch;

	function valueCounting(a){
		if(a==undefined){
			a=1000
		}
		valueA = a;
		console.log(tru);
		
				clearInterval(timerIdRoll);
		clearInterval(timerIdHow);
		clearInterval(timerIdPitch);
			
		timerIdRoll = setInterval(function() {
			$('header .mainBlock1 .cockpit .elements .blockHaw .cirle').css({
				transform: 'rotate('+(minH + Math.random() * (maxH - minH)) +'deg)'
			});
			$('header .mainBlock1 .cockpit .elements .blockHaw .background').css({
				top: (minV + Math.random() * (maxV - minV)) +'px'
			});
		},valueA);

			timerIdHow = setInterval(function() {
			$('header .mainBlock1 .cockpit .elements .blockRoll .background').css({
				transform: 'rotate('+(minHow + Math.random() * (maxHow - minHow)) +'deg)'
			});

		},valueA);

		timerIdPitch = setInterval(function() {
			$('header .mainBlock1 .cockpit .elements .blockPitch .arrow').css({
				transform: 'rotate('+(minP + Math.random() * (maxP - minP)) +'deg)'
			});
			$('header .mainBlock1 .cockpit .elements .blockPitch .circle').css({
				left: (minPC + Math.random() * (maxPC - minPC)) +'px'
			});
		},valueA);

	}

//Меню
$('.button_toggle').on('click',function(){
	$('.main_navigation').toggleClass('open');
	$('.button_toggle').toggleClass('open');
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





/*$('.circleButton').on('click',function(){ 
	click++;
	/* Вертикальное отклонение/
	if(click%2!=0){

		console.log("Вы поставили: "+ valueA);

				timerIdRoll = setInterval(function() {
			$('header .mainBlock1 .cockpit .elements .blockHaw .cirle').css({
				transform: 'rotate('+(minH + Math.random() * (maxH - minH)) +'deg)'
			});
			$('header .mainBlock1 .cockpit .elements .blockHaw .background').css({
				top: (minV + Math.random() * (maxV - minV)) +'px'
			});
		},valueA);

		timerIdHow = setInterval(function() {
			$('header .mainBlock1 .cockpit .elements .blockRoll .background').css({
				transform: 'rotate('+(minHow + Math.random() * (maxHow - minHow)) +'deg)'
			});

		},2412);

		timerIdPitch = setInterval(function() {
			$('header .mainBlock1 .cockpit .elements .blockPitch .arrow').css({
				transform: 'rotate('+(minP + Math.random() * (maxP - minP)) +'deg)'
			});
			$('header .mainBlock1 .cockpit .elements .blockPitch .circle').css({
				left: (minPC + Math.random() * (maxPC - minPC)) +'px'
			});
		},2222);

		console.log("start");
	}
});

/*Прерывание по нажатию*/
$('.circleButton').on('click',function(){ 



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

	
});


$( "#slider" ).slider({
				value : 0,//Значение, которое будет выставлено слайдеру при загрузке
				min : 0,//Минимально возможное значение на ползунке
				max : 3000,//Максимально возможное значение на ползунке
				step : 1,//Шаг, с которым будет двигаться ползунок
				create: function( event, ui ) {
					val = $( "#slider" ).slider("value");//При создании слайдера, получаем его значение в перемен. val
					$( "#contentSlider" ).html( val );//Заполняем этим значением элемент с id contentSlider

				},
				slide: function( event, ui ) {
				$( "#contentSlider" ).html( ui.value);//При изменении значения ползунка заполняем элемент с id contentSlider
                 valueCounting(ui.value)
			}
		});


});