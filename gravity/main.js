	var coordGround = ground.getBoundingClientRect();
	var fallingTimer = [];
	var ballObj = document.getElementsByClassName('ball');
	var sortedBallObj = [];
	var ifObjectBellow = [];
	var count = -1;
	var test = true;

	for (let i = 0; i < ballObj.length; i++){
		ifObjectBellow[i] = true;
		sortedBallObj[i] = ballObj[i];
	};

	function sortingObj( arrayToSort ){
		for (let i = 0; i < ballObj.length; i++){
			let a = arrayToSort[i].getBoundingClientRect().bottom;
			let baff;
			for( let y =  i+1; y < ballObj.length; y++){
				let b = arrayToSort[y].getBoundingClientRect().bottom;
				if( b > a) {
					buff = arrayToSort[i]; 
					arrayToSort[i] = arrayToSort[y];
					arrayToSort[y] = buff;
				}
			}
		}
	} 

	sortingObj(sortedBallObj);

	for (var i = 0; i < sortedBallObj.length; i++) {
		sortedBallObj[i].classList.add('falling');
		count++;
		falling(sortedBallObj[i].getBoundingClientRect(), sortedBallObj[i], count);
	}

	document.body.onmousedown = function(event){
		var obj = event.target;
		if( obj.classList.contains("ball")){
			var shiftX = event.clientX - obj.getBoundingClientRect().left;
			var shiftY = event.clientY - obj.getBoundingClientRect().top;
			move(event.clientX , event.clientY );

			document.onmousemove = function(event){
				obj.classList.remove("grounded");
				move(event.clientX, event.clientY);	
				spaceBelow(obj);		
			};

			function move(x, y){					
				obj.style.left = x - shiftX + 'px';
				obj.style.top = y - shiftY + 'px';					
			};

			document.onmouseup = function(e) {
				document.onmousemove = null;
				obj.onmouseup = null;
				obj.classList.add('falling');
				count++;
				falling(obj.getBoundingClientRect(), e.target, count);
			};
		}
	}



	function falling(coord, fallingObject, count) { 
			var m1 = 5, i = 0; //масса тела
			var distance =coord.top;
			var SizeY = coord.bottom - coord.top; //размер падающего элемента
			var balls = document.getElementsByClassName('ball');
			fallingTimer[count] = setInterval(function() {
				if((distance + SizeY)<coordGround.top){ //сравнение координат падающего элемента и земли		
					i += 3,
					distance += i,
					fallingObject.style.top = distance + 'px';
				}
				groundCheck(distance, fallingObject, SizeY, count);
			}, 20);
		} 

		function groundCheck(y, objToCheck, objSize, count) {
			objToCheck.classList.remove("onBall");
			var coordObj = objToCheck.getBoundingClientRect();
			for( let i = 0; i < ballObj.length; i++ ){ //проверка на элементы снизу
				if(ballObj[i].classList.contains('grounded')){
					if(ifObjectBellow[i]){
						let coords = ballObj[i].getBoundingClientRect();
						if( coords.left < coordObj.right && coords.right > coordObj.left && coords.bottom >= coordObj.top && objToCheck != ballObj[i]){
							if(y + objSize >= ballObj[i].getBoundingClientRect().top){
								objToCheck.style.top = ballObj[i].getBoundingClientRect().top - objSize  + 'px';
								objToCheck.classList.remove("falling");
								objToCheck.classList.add("grounded");
								objToCheck.classList.add('onBall');
								clearTimeout(fallingTimer[count]);
								for (let i = 0; i < ballObj.length; i++){
									ifObjectBellow[i] = true;
								}
								return;
							}
						}
						else ifObjectBellow[i] = false;
					}
				}
			}

			if(objToCheck.classList.contains('falling') && y + objSize >= coordGround.top){ //проверка земли
				objToCheck.style.top = coordGround.top - objSize  + 'px';
				objToCheck.classList.remove("falling");
				objToCheck.classList.add("grounded");
				for (let i = 0; i < ballObj.length; i++){
					ifObjectBellow[i] = true;
				}
				clearTimeout(fallingTimer[count]);
			}
		}

		function spaceBelow(movingObj) {
			var coordObj = movingObj.getBoundingClientRect();
			var objSize = coordObj.bottom - coordObj.top;

			for( let i = 0; i < ballObj.length; i++ ){
				if (ballObj[i].classList.contains('onBall')){
					let coords = ballObj[i].getBoundingClientRect();
					if( (coordObj.right < coords.left && coordObj.left < coords.left) || (coordObj.right > coords.right && coordObj.left > coords.right)){
						count++;
						ballObj[i].classList.remove("grounded");
						ballObj[i].classList.remove("onBall");
						ballObj[i].classList.add('falling');
						test = false;
						falling(coords, ballObj[i], count);
					}
					else if( coords.bottom >= coordObj.top ){

						//ballObj[i].style.top = coordObj.top - objSize + 'px';
						//ballObj[i].style.left = coordObj.left + 'px';

					}
				}
			}
		}