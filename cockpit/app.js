var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require("path");
var fs = require('fs');
var bodyParser = require('body-parser');
var math = require('mathjs');

var portsNum = [], SerialPortCheck = false, thermodata = [], settingsCOM, parsedSettings, arrayPos = [], arrayBuff = [] ;
var meanResuts = [[],[],[],[],[],[]];

var SerialPort = require("serialport");
var angles = 0, timer, portOpen = false, COM, Input,serialPort, anglesArray = [], i =0, check = 1;

app.use(express.static('views'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

//полчение и запись всех доступных портов на компьютере 
SerialPort.list(function (err, ports) {
  ports.forEach(function(port) {
    portsNum.push(port.comName)
    
  });
  fs.writeFileSync(__dirname +'/views/COM.json',JSON.stringify({portsNum}, null, 4));
  console.log(portsNum);
});

function meanValue(){
  for(let y = 1; y < 7; y++){
    var row = -1;
    fs.readFile(__dirname +'/views/cal' + y +'.json', 'utf8', function(err, data) {
      row ++;
            //fs.readFile(__dirname +'/views/cal2.json', 'utf8', function(err, data) {
              if (err) throw err;
              var dataColibration = JSON.parse(data);
              dataColibration.shift();
              dataColibration.pop();
            //console.log(dataColibration);
            for(let y =0; y < 3; y++) {
              for (let i = 0; i < dataColibration.length; i++) {
                if (dataColibration[i].length < 15 || dataColibration[i].length > 18) {
                  console.log( "удаляем элемент массива: " + dataColibration[i]);
                  dataColibration.splice(i, 1);
                  i--;
                  continue;
                }
                let buf = dataColibration[i].split(';');
                    if (+buf[y] >= -1.5 && +buf[y] <= 1.5) {
                      arrayPos.push(buf[y]);
                    }
                    else {
                      console.log("Не попало значение: " + buf);

                    }
                  }
                  console.log( "среднее значение: " + math.mean(arrayPos));
                  meanResuts[row].push((math.mean(arrayPos)).toFixed(3));
                  arrayPos.splice(0, arrayPos.length);

                }
                console.log("meanResuts " + meanResuts);
              });
  }

  setTimeout(function() { 
   console.log( meanResuts);
   positionDedect();
 }, 1000);

};

function chesck(){
  meanValue();

}

chesck();


function positionDedect(){
 let buf = 0;
 console.log('test');
 for(let i = 0; i < 3; i++){
  for(let y = 0; y < 6; y++){
    if(+meanResuts[y][i] >= 0.9 && +meanResuts[y][i] <= 1.2){
      if(i==0){
        buf = meanResuts[0];
        meanResuts[0] = meanResuts[y];
        meanResuts[y] = buf;
      }
      else if(i==1){
        buf = meanResuts[2];
        meanResuts[2] = meanResuts[y];
        meanResuts[y] = buf;
      }
      else if(i==2){
        buf = meanResuts[4];
        meanResuts[4] = meanResuts[y];
        meanResuts[y] = buf;
      }
    }
    else if(+meanResuts[y][i] <= -0.9 && +meanResuts[y][i] >= -1.2){
      if(i==0){
        buf = meanResuts[1];
        meanResuts[1] = meanResuts[y];
        meanResuts[y] = buf;
      }
      else if(i==1){
        buf = meanResuts[3];
        meanResuts[3] = meanResuts[y];
        meanResuts[y] = buf;
      }
      else if(i==2){
        buf = meanResuts[5];
        meanResuts[5] = meanResuts[y];
        meanResuts[y] = buf;
      }
    }
  }
}
console.log(meanResuts);

}



//setTimeout(function() { positionDedect(); }, 1000);


//открытие порта для передачи данных
function SerialPortStart(COM, Input){
  serialPort = new SerialPort(COM, {
    parser: SerialPort.parsers.readline('\n'),
    baudrate: +Input || 9600
  });
  serialPort.on('data', function (data) { 
   angles = data.toString(); 
 });
  portOpen = true;
};

//закрытие порта
function portClosing(){
  serialPort.close(function (err) {
    console.log('port closed', err);
  });

  portOpen = false;
}


//сбор логов с платы, их сохранение и закрытие порта
function dataSaving(){
 serialPort = new SerialPort(COM, {
  parser: SerialPort.parsers.readline('\n'),
  baudrate: +Input || 9600
});

 serialPort.on('data', function (data) { 
   angles = data.toString(); 
   anglesArray[i] =  data.toString();
   i++; 
 });

 portOpen = true;
 setTimeout(function() {
   serialPort.close(function (err) {
    console.log('цикл завершен' + check);
  });
   fs.writeFileSync(__dirname +'/views/cal' + check +'.json',JSON.stringify(anglesArray));
   i = 0;
   portOpen = false;

 }, 5000);

}


//прием запросов с сервера: с пометкой "check" (значит, нужен будет сбор данных) и все остальные запросы для которых идет обычная обработка 
app.post('/', function(req, res){
  var obj = {};
  if(req.body.test == 'check'){
    check = req.body.number;
    if(portOpen)     portClosing();

    setTimeout(function() { dataSaving();
    }, 1000);
    //clearTimeout(timer);
  }
  else if(req.body){
    console.log(req.body);
    COM = req.body.COM;
    Input = req.body.Input;
    console.log( portOpen);
    if(portOpen) {
      console.log("Port was closed")
      portClosing();
    }  
    console.log('serialport has started');
    setTimeout(function() { SerialPortStart(req.body.COM, req.body.Input); }, 1000);
  }
  res.send(req.body);
});


app.get('/', function(req, res){ 
  res.sendFile(__dirname + '/index.html'); 
}); 

//передача данных с сервера на сторону клиента
io.on('connection', function(socket){ 
  timer = setInterval(function() {
    io.emit('input', angles) 
  }, 100);

}); 

http.listen(3000, function(){ 
  console.log('server has started') 
});