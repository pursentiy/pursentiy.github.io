
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

  /*
  $(".owl-carousel").owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 23000,
    margin:10,
    nav:false,
    dots: true,
    items: 1,
  });
  */
  

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


  var owl = $('.owl-carousel');
  var owlProj = $('.owl-carousel-proj');

    owlProj.on('changed.owl.carousel', function(event) {
   var item  = event.page.index;
   switch (item) {
    case 0:
    dotesColoring(item);
    break;
    case 1:
    dotesColoring(item);
    break;
    case 2:
    dotesColoring(item);
    break;
    case 3:
    dotesColoring(item);
    break;
    case 4:
    dotesColoring(item);
    break;
  }
});

  owl.on('changed.owl.carousel', function(event) {
   var item  = event.page.index;
   switch (item) {
    case 0:
    colorChange.style.color = "#00ff00";
    colorUnderline.style.borderBottom = " 2px solid #00ff00";
    dotesColoring(item);
    break;
    case 1:
    colorChange.style.color = "#ff2ba6";
    colorUnderline.style.borderBottom = " 2px solid #ff2ba6";
    dotesColoring(item);
    break;
    case 2:
    colorChange.style.color = "#fffd31";
    colorUnderline.style.borderBottom = " 2px solid #fffd31";
    dotesColoring(item);
    break;
    case 3:
    colorChange.style.color = "#FF9100";
    colorUnderline.style.borderBottom = " 2px solid #FF9100";
    dotesColoring(item);
    break;
    case 4:
    colorChange.style.color = "#56ffec";
    colorUnderline.style.borderBottom = " 2px solid #56ffec";
    dotesColoring(item);
    break;
  }

});
 //alert(element); 

 function dotesColoring(index){
  var active = document.getElementsByClassName('active');
  var dot = document.getElementsByClassName('owl-dot');
  for( let i = 0; i < dot.length; i++){
    if(dot[i].classList.contains('active')){
//dot[i].firstChild.classList.add('green');
      switch (index) {
        case 0:
        dot[i].firstChild.classList.add('green');
        break;
        case 1:
        dot[i].firstChild.classList.add('pink');
        break;
        case 2:
        dot[i].firstChild.classList.add('yellow');
        break;
        case 3:
        dot[i].firstChild.classList.add('orange');
        break;
        case 4:
        dot[i].firstChild.classList.add('blue');
        break;
      }
    }
      else if(!dot[i].classList.contains('active')){
        dot[i].firstChild.classList.remove('green');
        dot[i].firstChild.classList.remove('pink');
        dot[i].firstChild.classList.remove('yellow');
        dot[i].firstChild.classList.remove('orange');
        dot[i].firstChild.classList.remove('blue');
      }
    }



/*
  $(".owl-theme .owl-dots .owl-dot.active span:before").css({
    background: "#00ff1b"
  });
  $(".owl-theme .owl-dots .owl-dot.active span:after").css({
    background: "#00ff1b"
  });
  $(".owl-theme .owl-dots .owl-dot.active span:after").css({
    background: "#00ff1b"
  });
  */
}



});