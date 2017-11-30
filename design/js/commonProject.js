
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