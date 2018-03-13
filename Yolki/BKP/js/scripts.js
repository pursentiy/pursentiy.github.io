$(document).ready(function() {
	
	$("input[type='text'], input[type='tel'], input[type='email'], textarea").focus(function(){
		if(this.value==this.defaultValue){this.value=''};
		if($(this).hasClass('inp-error')) {
			$(this).removeClass('inp-error');
		}
	});
	$("input[type='text'], input[type='tel'], input[type='email'], textarea").blur(function(){
		if(this.value=='')this.value=this.defaultValue;
	});
	$("a[href='#']").click(function(e) {
		e.preventDefault();
	});
	$("[data-scroll]").click(function(e) {
		e.preventDefault();
		var toBlock = $(this).attr('data-scroll');
		var scrollTop = $(toBlock).offset().top;
		$('body,html').animate({scrollTop: scrollTop}, 1200);
	});
	$("[data-link]").click(function(e) {
		var link = $(this).attr('data-link');
		window.open(link, '_self');
	});

	// Анкоры в меню
	$("#menu li a").click(function(e) {
		var toBlock = $(this).attr('href');
		if(toBlock.substr(0,1)=='#') {
			e.preventDefault();
			if($('body').find(toBlock).is(toBlock)) {
				var scrollTop = $(toBlock).offset().top;
				$('body,html').animate({scrollTop: scrollTop}, 1200);
			} else {
				window.open(location.protocol+'//'+location.host+'/'+toBlock, '_self');
			}
		}
	});

	// Модальные окна
	$("[data-modal]").click(function(e) {
		e.preventDefault();
		var modalID = $(this).attr('data-modal');
		$('#'+modalID).arcticmodal({closeOnEsc:true,closeOnOverlayClick:true});
	});
	$("#service .service-item.to-animate .button-yellow").click(function(e) {
		e.preventDefault();
		var usluga = $(this).parents('.desc').find('.z').text();
		$('#Modal-usluga .inps.usluga').val(usluga);
	});

	// Фансибокс
	$("a[rel='gallery'], .fancybox").fancybox({
		'speedIn'   : 500,
		'speedOut'  : 400,
		'maxWidth'  : 1200,
		'maxHeight' : 600,
		'helpers'   : {'overlay':{'locked':false}}
	});

	// Аксессуары (табы)
	var accessoriesList = $('#accessories .items');
	$('#accessories .wrap ul.tabs li').click(function(e) {
		e.preventDefault();
		var that = $(this);
		var that_type = $(this).data('type');
		that.parent().find('li').removeClass('active');
		that.addClass('active');
		accessoriesList.find('.item').addClass('hidden');
		accessoriesList.find('.item[data-type='+that_type+']').removeClass('hidden');
		snowBodyHeight();
		$(window).trigger('resize'); 
	});
	$('#accessories .wrap ul.tabs li:eq(0)').click();
	
	// Елки (смена размера)
	var treesList = $('#fir-trees .tree-items');
	$('#fir-trees .tree-item .desc ul.size li').click(function(e) {
		e.preventDefault();
		var that = $(this);
		that.parent().find('li').removeClass('active');
		that.addClass('active');
		
		var price = that.attr('data-price');
		var price_disc = that.attr('data-price_disc');
		//console.log(price);
		that.parents('.desc').find('.price span').html(price);
		that.parents('.desc').find('.price_disc span').html(price_disc);
		//alert(price);
	});

	// Снег
	function snowBodyHeight() {
		var body_height = $('#main-wrapper').height()+91;
		for(var i=1; i<=6; i++) {
			$('#snowfall-'+i).css('height', body_height+'px');
		}
	}
	$(window).resize(function() {
		snowBodyHeight();
	});
	$('#snowfall-1').snowfall({
		image: "images/flake-1.png", 
		minSize: 10, 
		maxSize: 32,
		minSpeed: 4,
		flakeCount : 50,
		round: true,
		shadow: false
	});
	$('#snowfall-2').snowfall({
		image: "images/flake-2.png", 
		minSize: 10, 
		maxSize: 100,
		minSpeed: 2,
		flakeCount : 25,
		round: true,
		shadow: false
	});
	$('#snowfall-3').snowfall({
		image: "images/flake-3.png", 
		minSize: 10, 
		maxSize: 32,
		minSpeed: 3,
		flakeCount : 40,
		round: true,
		shadow: false
	});
	$('#snowfall-4').snowfall({
		image: "images/flake-4.png", 
		minSize: 10, 
		maxSize: 32,
		minSpeed: 6,
		flakeCount : 35,
		round: true,
		shadow: false
	});
	$('#snowfall-5').snowfall({
		minSize: 2, 
		maxSize: 8,
		minSpeed: 3,
		flakeColor: "#fdd700", 
		flakeCount : 30,
		round: true,
		shadow: false
	});
	$('#snowfall-6').snowfall({
		minSize: 2, 
		maxSize: 10,
		minSpeed: 9,
		flakeCount : 100,
		round: true,
		shadow: false
	});

	// Корзина
	var cart = $('#cart');
	var cart_opened = $('#cart-opened');
	var cart_speed = 300;
	var cart_opened_speed = 600;
	var bucket = [];
	$('#fir-trees .tree-item .desc .button-yellow.mini').click(function(e) {
		e.preventDefault();
		//yaCounter40989449.reachGoal('korzina');
		var that = $(this);
		var item = that.parents('.tree-item');
		var prod_title = item.find('.title').text();
		var prod_attr = parseInt(item.find('ul.size li.active > span').text());
		var prod_price = parseInt(item.find('.price > span').text());
		if(bucket.length!=0) {
			var prevent = false;
			for(var i=0; i<bucket.length; i++) {
				var item_b = bucket[i];
				if(item_b.type=='tree') {
					if(item_b.title==prod_title && item_b.attr==prod_attr) {
						bucket[i].count++;
						$('.table .tr[data-id="'+i+'"] .td.kol .count').text(bucket[i].count);
						prevent = true;
						break;
					}
				}
			}
			if(prevent) {
				cartUpdate();
				return false;
			}
		}
		var product = {
			type: 'tree',
			title: prod_title,
			attr: prod_attr,
			price: prod_price,
			count: 1
		};
		bucket.push(product);
		cart.find('.left > span').text(prod_title+', '+prod_attr+' см');
		cartUpdate();
	});
	$('#accessories .item .desc .button-yellow.mini').click(function(e) {
		e.preventDefault();
		//yaCounter40989449.reachGoal('korzina');
		var that = $(this);
		var item = that.parents('.item');
		var prod_title = item.find('.title').text();
		var prod_attr = '';
		var prod_price = parseInt(item.find('.price > span').text());
		if(bucket.length!=0) {
			var prevent = false;
			for(var i=0; i<bucket.length; i++) {
				var item_b = bucket[i];
				if(item_b.type=='accessories') {
					if(item_b.title==prod_title && item_b.attr==prod_attr) {
						bucket[i].count++;
						$('.table .tr[data-id="'+i+'"] .td.kol .count').text(bucket[i].count);
						prevent = true;
						break;
					}
				}
			}
			if(prevent) {
				cartUpdate();
				return false;
			}
		}
		var product = {
			type: 'accessories',
			title: prod_title,
			attr: prod_attr,
			price: prod_price,
			count: 1
		};
		bucket.push(product);
		cart.find('.left > span').text(prod_title);
		cartUpdate();
	});
	cart.on("click", ".button-white-border", function(e) {
		e.preventDefault();
		removeAllCart();
	});
	cart_opened.on("click", ".td.kol .plus", function(e) {
		e.preventDefault();
		cartChangeCount(this, 'plus');
	});
	cart_opened.on("click", ".td.kol .minus", function(e) {
		e.preventDefault();
		cartChangeCount(this, 'minus');
	});
	cart_opened.on("click", ".td.remove .delete", function(e) {
		e.preventDefault();
		var that = $(this);
		var item = that.parents('.tr');
		var item_id = item.data('id');
		if((bucket.length-1)<=0) {
			bucket.remove(item_id);
			cartUpdate(false, false);
			cart.animate({bottom: '-80px'}, cart_speed);
			var cart_opened_height = (cart_opened.height()+60);
			cart_opened.animate({bottom: '-'+cart_opened_height+'px'}, cart_opened_speed, function() {
				cartUpdate();
			});
		} else {
			bucket.remove(item_id);
			cartUpdate();
		}
	});
	function cartUpdate(animate=true, summary_animate=true) {
		if(animate) {
			if(bucket.length>=1) {
				cart.animate({bottom: '0px'}, cart_speed);
			} else {
				cart.animate({bottom: '-80px'}, cart_speed);
			}
			cart_opened.find('.table .tr:not(:eq(0))').remove();
			for(var i=0; i<bucket.length; i++) {
				var attr;
				if(bucket[i].type=='tree') {
					attr = ', '+bucket[i].attr+' см';
				} else {
					attr = '';
				}
				var new_tr = '<div class="tr" data-id="'+i+'"><div class="td title">'+bucket[i].title+attr+'</div><div class="td price">'+bucket[i].price+' руб.</div><div class="td kol"><span class="plus"></span><span class="count">'+bucket[i].count+'</span><span class="minus"></span></div><div class="td remove"><span class="delete"></span></div></div>';
				cart_opened.find('.table').append(new_tr);
			}
		}
		if(summary_animate) {
			var summary = cartSummary();
			$('*[data-summary]').text(summary);
		}
	}
	function cartSummary() {
		var summary = 0;
		for(var i=0; i<bucket.length; i++) {
			summary += (bucket[i].price*bucket[i].count);
		}
		return summary;
	}
	function removeAllCart() {
		cart.animate({bottom: '-80px'}, cart_speed, function () {
			bucket = [];
			$.localStorage.removeItem('products');
		});
	}
	function cartChangeCount(that, action) {
		var that = $(that);
		var item = that.parents('.tr');
		var item_id = parseInt(item.data('id'));
		if(action=='plus') {
			bucket[item_id].count++;
		} else if(action=='minus') {
			if((bucket[item_id].count-1)<1) {
				return false;
			}
			bucket[item_id].count--;
		}
		item.find('.td.kol .count').text(bucket[item_id].count);
		cartUpdate();
	}
	$('.slideCart.slideUp').click(function(e) {
		e.preventDefault();
		var cart_opened_height = (cart_opened.height()+60);
		cart.animate({bottom: '-80px'}, cart_speed, function () {
			cart_opened.css('bottom', '-'+cart_opened_height+'px');
			cart_opened.addClass('active').animate({bottom: '0px'}, cart_opened_speed);
		});
	});
	$('.slideCart.slideDown').click(function(e) {
		e.preventDefault();
		var cart_opened_height = (cart_opened.height()+60);
		cart_opened.animate({bottom: '-'+cart_opened_height+'px'}, cart_opened_speed, function () {
			setTimeout(function(){
				cart_opened.removeClass('active');
			}, 100);
			cart.animate({bottom: '0px'}, cart_speed);
		});
	});
	$(window).unload(function() { 
		$.localStorage.removeItem('products');
		$.localStorage.setItem('products', JSON.stringify(bucket));
	});
	if(!$.isEmptyObject($.localStorage.getItem('products'))) {
		var b_products = $.localStorage.getItem('products');
		bucket = JSON.parse(b_products);
		if(bucket.length>=1) {
			var b_length = bucket.length-1;
			var last_title = bucket[b_length].title;
			if(bucket[b_length].type=='tree') {
				var last_title = bucket[b_length].title+', '+bucket[b_length].attr+' см';
			}
			cart.find('.left > span').text(last_title);
			cartUpdate();
		}
	}



    // Placeholder
    $('input, textarea').placeholder();
	
	// Маски поля
	$(".phone_field").mask("+7 (999) 999-99-99",{completed:function(){ok=1}});

	// Анимация
	if(window.innerWidth>=768) {
		$('.animate').scrolla({once:true});
	}

});

Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};
function NumberDecline(number, titles) {  
	cases = [2, 0, 1, 1, 1, 2];
	return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}
function toObject(arr) {
	var rv = {};
	for (var i=0; i<arr.length; ++i)
	if (arr[i] !== undefined) rv[i] = arr[i];
	return rv;
}
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
$(document).ready(function () {
//код jQuery

//функция вызова таймера
function get_timer() {
	
	//Дата для обратного отсчета
	var date_new = dateEnd; // June 3,2012 02:00
	////////////////////////////////////
	////////////////////////////////////
	
	//Объект даты для обратного отсчета
	var date_t = new Date(date_new);
	//Объект текущей даты
	var date = new Date();
	//Вычесляем сколько миллисекунд пройдет 
	//от текущей даты до даты отсчета времени
	var timer = date_t - date;
	
	//Проверяем не нужно ли закончить отсчет
	//если дата отсчета еще не истекла, то количество
	//миллисекунд в переменной date_t будет больше чем в переменной date
	if(date_t > date) {
		
		//Вычисляем сколько осталось дней до даты отсчета.
		//Для этого количество миллисекунд до даты остчета делим
		//на количество миллисекунд в одном дне
		var day = parseInt(timer/(60*60*1000*24));
		//если полученное число меньше 10 прибавляем 0
		if(day < 10) {
			day = '0' + day;
		}
		//Приводим результат к строке
		day = day.toString();
			
		//Вычисляем сколько осталось часов до даты отсчета.
		//Для этого переменную timer делим на количество
		//миллисекунд в одном часе и отбрасываем дни
		var hour = parseInt(timer/(60*60*1000))%24;
		//если полученное число меньше 10 прибавляем 0
		if(hour < 10) {
			hour = '0' + hour;
		}
		//Приводим результат к строке
		hour = hour.toString();
			
		//Вычисляем сколько осталось минут до даты отсчета.
		//Для этого переменную timer делим на количество
		//миллисекунд в одной минуте и отбрасываем часы
		var min = parseInt(timer/(1000*60))%60;
		//если полученное число меньше 10 прибавляем 0
		if(min < 10) {
			min = '0' + min;
		}
		//Приводим результат к строке
		min = min.toString();
			
		//Вычисляем сколько осталось секунд до даты отсчета.
		//Для этого переменную timer делим на количество
		//миллисекунд в одной минуте и отбрасываем минуты
		var sec = parseInt(timer/1000)%60;
		//если полученное число меньше 10 прибавляем 0
		if(sec < 10) {
			sec = '0' + sec;
		}
		//Приводим результат к строке
		sec = sec.toString();
		
		//Выводим дни
		//Проверяем какие предыдущие цифры времени должны вывестись на экран
		//Для десятков дней
		if(day[1] == 9 && 
			hour[0] == 2 && 
			hour[1] == 3 && 
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($(".day0"),day[0]);
		}
		else {
			$(".day0").html(day[0]);
		}
		//Для единиц дней
		if(hour[0] == 2 && 
			hour[1] == 3 && 
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($(".day1"),day[1]);
		}
		else {
			$(".day1").html(day[1]);
		}
		//Выводим часы
		//Проверяем какие предыдущие цифры времени должны вывестись на экран
		//Для десятков часов
		if(hour[1] == 3 && 
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($(".hour0"),hour[0]);
		}
		else {
			$(".hour0").html(hour[0]);
		}
		//Для единиц чассов	
		if(min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($(".hour1"),hour[1]);
		}
		else {
			$(".hour1").html(hour[1]);
		}
			
		//Выводим минуты
		//Проверяем какие предыдущие цифры времени должны вывестись на экран
		//Для десятков минут
		if(min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($(".min0"),min[0]);
		}
		else {
			$(".min0").html(min[0]);
		}
		//Для единиц минут
		if(sec[0] == 5 && sec[1] == 9) {
			animation($(".min1"),min[1]);
		}
		else {
			$(".min1").html(min[1]);
		}
			
		//Выводим секунды
		//Проверяем какие предыдущие цифры времени должны вывестись на экран
		//Для десятков секунд
		if(sec[1] == 9) {
			animation($(".sec0"),sec[0]);
		}
		else {
			$(".sec0").html(sec[0]);
		}
		animation($(".sec1"),sec[1]);	
		//Переодически вызываем созданную функцию, 
		//интервал вызова одна секунда(1000 милли секунд)
		setTimeout(get_timer,1000);
	}
	else {
        $.cookie("timer", null);
	}
	
}
//Функция для красивого отображения времени.
function animation(vibor,param) {
	vibor.html(param)
		.css({'marginTop':'-20px','opacity':'0'})
		.animate({'marginTop':'0px','opacity':'1'});
}
//Вызываем функцию на исполнение
get_timer();
});