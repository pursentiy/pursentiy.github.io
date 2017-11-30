
$(document).ready(function(){



 var elements = document.getElementsByClassName('item');
 var colorChange = document.getElementById('color');
 var colorUnderline = document.getElementById('underline');
 var sideBar = document.getElementsByClassName('side_bar'),
 li = document.getElementById('crack'), liSize = li.getBoundingClientRect();
 let test = window.getComputedStyle(li, null);
 if(window.innerWidth >= 1203){
  sideBar[0].style.width = liSize.left + 0.9*test.paddingRight.substr(0,2) + 'px';
}

var winWidth  = 0;
$(window).resize(function() {
  winWidth = $(window).width();
  console.log(winWidth);
  if(winWidth <= 1203){
    sideBar[0].style.width = 100 + '%';
  }
  else{
   sideBar[0].style.width = liSize.left + 0.9*test.paddingRight.substr(0,2) + 'px';
 }
});

var trigger = document.getElementsByClassName('trigger');
var pressed = false;

$('.trigger').on('click',function(){
  if(!pressed){
   $('.trigger').css({
    '-webkit-transform' : 'rotate(-45deg)',
    '-moz-transform'    : 'rotate(-45deg)',
    '-ms-transform'     : 'rotate(-45deg)',
    '-o-transform'      : 'rotate(-45deg)',
    'transform'         : 'rotate(-45deg)',
    'left' : '103%'
  }); 
   pressed = true;  
 }
 else{
   $('.trigger').css({
    '-webkit-transform' : 'rotate(' +  140 + 'deg)',
    '-moz-transform'    : 'rotate(' + 140 + 'deg)',
    '-ms-transform'     : 'rotate(' + 140 + 'deg)',
    '-o-transform'      : 'rotate(' + 140 + 'deg)',
    'transform'         : 'rotate(' + 140 + 'deg)',

    'left' : '110%'
  });
   pressed = false;    
 }

});

$('.above2').css({
  height: $(window).height() - 160 + 'px'
});


$(".owl-carousel").owlCarousel({
  loop:true,
  autoplay: true,
  autoplayTimeout: 23000,
  margin:10,
  nav:false,
  dots: true,
  items: 1,
});


$('.button_toggle').on('click',function(){
  $('.main_navigation').toggleClass('open');
  $('.close_menu').toggleClass('close');
});

$('.trigger').on('click',function(){
  $('.side_bar').toggleClass('closeBar');
});

let dott = document.getElementsByClassName('owl-dot');
dott[0].firstChild.classList.add('white');

var owl = $('.owl-carousel');

owl.on('changed.owl.carousel', function(event) {
 var item  = event.page.index;
 dotesColoring(item);

});
 //alert(element); 


 function dotesColoring(index){
  var active = document.getElementsByClassName('active');
  var dot = document.getElementsByClassName('owl-dot');
  for( let i = 0; i < dot.length; i++){
    if(dot[i].classList.contains('active')){
//dot[i].firstChild.classList.add('green');
dot[i].firstChild.classList.add('white');
}
else if(!dot[i].classList.contains('active')){
  dot[i].firstChild.classList.remove('white');
}
}
}
 //alert(element); 





});