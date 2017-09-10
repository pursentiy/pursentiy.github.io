

var app = function () {
  var body = undefined;
  var menu = undefined;
  var menuItems = undefined;
  var open = document.getElementById('open');
  var close = document.getElementById('close');
  var elemMenu = document.getElementsByClassName('nav__content');

  var init = function init() {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    menuItems = document.querySelectorAll('.nav__list-item');

    applyListeners();
  };

  var applyListeners = function applyListeners() {
    menu.addEventListener('click', function () {
      return toggleClass(body, 'nav-active');
    });
  };

  var toggleClass = function toggleClass(element, stringClass) {
    if (element.classList.contains(stringClass)){
     element.classList.remove(stringClass);
     open.innerHTML="МЕНЮ";
     setTimeout(function() {
          elemMenu[0].style.top = "-150%";
        }, 500);

   }
   else {
    element.classList.add(stringClass);
    open.innerHTML="ЗАКРЫТЬ";
    elemMenu[0].style.top = "50%";

  }
};

init();
}();


$(function() {

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollup').css("display:block")
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  $('.button_toggle').on('click',function(){
    $('.main_navigation').css({
      WebkitTransition : 'transform 1s ease-in-out',
      MozTransition    : 'transform 1s ease-in-out',
      MsTransition     : 'transform 1s ease-in-out',
      OTransition      : 'transform 1s ease-in-out',
      transition       : 'transform 1s ease-in-out'
    });

    $('.main_navigation').toggleClass('scroll');
    //$('#wrapper').toggleClass('wrapper_small');

  });

});
