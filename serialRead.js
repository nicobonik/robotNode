const SerialPort = require("serialport");
const Readline = require('@serialport/parser-readline');
const port = new SerialPort("/dev/cu.usbmodem14201", {
  baudRate: 2500000
  
});

const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

var output;
var parsedOutput;

var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));
parser.on('data', function(data) {
    output = data;
    parsedOutput = output.split(", ");

    // console.log(parseInt(parsedOutput[0]));
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

io.on('connection', function(socket){
    socket.on('dataRequest', function(){
        socket.emit('data', parsedOutput);
    });
    console.log("user connected");
    
});
  
  http.listen(3000, function(){
    console.log('listening on *:3000');
  });