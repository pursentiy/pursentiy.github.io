  var dayTime = ['#mountainMorning', '#mountainDay', '#mountainSunset', '#mountainNight']

  function backgroundChanging(elem){
    var gapDis = 1, gapApp = 0, changing = true;
    var timerId = setInterval(function() {
      gapDis -= 0.1;
      gapApp += 0.1;
      if(gapDis > 0){
        $(dayTime[elem]).css({
          opacity:  Math.round(gapDis)
        });
        $(dayTime[elem+1]).css({
          opacity:  Math.round(gapApp)
        });
      }
      else{

        gapDis = 1;
        gapApp = 0;
        clearInterval(timerId);
      }
    }, 300);
  };

  backgroundChanging(0);


  var colors = new Array(
   [255, 207, 186], 
   [168, 247, 234], 
   [168, 247, 234], 
   [138, 193, 235], 
   [255, 71, 40], 
   [53, 114, 161], 
   [4, 26, 85], 
   [0, 5, 30]);

  var c0_0 = +[colors[0][0]];
  var c0_1 = +[colors[0][1]];
  var c0_2 = +[colors[0][2]];

  var c1_0 = +[colors[1][0]];
  var c1_1 = +[colors[1][1]];
  var c1_2 = +[colors[1][2]];

  var r1 = 0, r2 = 0, g1 = 0, g2 = 0, b1 = 0, b2 = 0;

  var step = 0, num = 4;

  dayChanging(2);

  function dayChanging(index){

    var c2_0 = +[colors[index][0]];
    var c2_1 = +[colors[index][1]];
    var c2_2 = +[colors[index][2]];

    var c3_0 = +[colors[index+1][0]];
    var c3_1 = +[colors[index+1][1]];
    var c3_2 = +[colors[index+1][2]];

    var timerDay = setInterval(function() {

      if(c2_0 == c0_0) {
        clearInterval(timerDay);
        dayChanging(num);
        if(num >= 6) {
          num = 0;
        }
        num += 2;
        return;
      }

      if(c2_0 > c0_0)   r1 = c0_0 += 1;
      else   r1 = c0_0 -= 1;

      if(c2_1 > c0_1)    g1 = c0_1 += 1;
      else   g1 = c0_1 -= 1 ;

      if(c2_2 > c0_2)    b1 = c0_2 += 1;
      else   b1 = c0_2 -= 1;

      var color1 = "rgb("+r1+","+g1+","+b1+")";



      if(c3_0 > c1_0)    r2 = c1_0 += 1;
      else   r2 = c1_0 -= 1;

      if(c3_1 > c1_1)   g2 = c1_1 += 1;
      else   g2 = c1_1 -= 1;

      if(c3_2 > c1_2)    b2 = c1_2 += 1;
      else   b2 = c1_2 -= 1;

      var color2 = "rgb("+r2+","+g2+","+b2+")";

      $('#particles-js').css({
       background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
        background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

     }, 50);


  }