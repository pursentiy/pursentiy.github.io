$(function() {

  var ul = document.getElementById('links'), li = ul.children;

  document.body.onclick = function(e){
    var elem = e.target.parentNode;
    if(elem.classList.contains('toCheck') && !elem.classList.contains('active') && !elem.classList.contains('item5')){
     for(let i = 0; i < li.length; i++){
      if(li[i].classList.contains('active')){
        li[i].classList.remove('active'); 
      }
    }
    elem.classList.add('active');
  }
}


$("#menu").on("click","a", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
  top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});

$("#menu1").on("click","a", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
  top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});

$('#review').on('click', function() {
  $('.wrap').css(
    'display','block');
  $('.wrap .box').css(
    'height','auto');
  setTimeout(function () {
    $('.wrap ').css(
      'opacity','1');
  }, 100);
});

$('.pop').on('click', function() {
  $('.window').css(
    'display','block');
  setTimeout(function () {
    $('.window').css(
      'opacity','1');
  }, 100);
  $('.overlay ').css(
    'display','block');
  setTimeout(function () {
    $('.overlay ').css(
      'opacity','0.7');
  }, 100);
});
$('.close').on('click', function() {
  $('.window').css(
    'opacity','0');
  setTimeout(function () {
    $('.window').css(
      'display','none');

  }, 200);
  $('.overlay ').css(
   'opacity','0');
  setTimeout(function () {
    $('.overlay ').css(
      'display','none');

  }, 100);
});

$("#lastForm").submit(function () {
    //Change 
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change 
      data: th.serialize()
    }).done(function () {
      alert("Спасибо за заявку!");
      setTimeout(function () {
        // Done Functions 
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

$("#sec").submit(function () {
    //Change 
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change 
      data: th.serialize()
    }).done(function () {
      alert("Спасибо за заявку!");
      setTimeout(function () {
        // Done Functions 
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

$("#fir").submit(function () {
    //Change 
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change 
      data: th.serialize()
    }).done(function () {
      alert("Спасибо за заявку!");
      setTimeout(function () {
        // Done Functions 
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });


});