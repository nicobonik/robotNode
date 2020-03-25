let payload = [0, 0, 0, 0, 0];
let lastPayload = [0, 0, 0, 0, 0];
let on = 0;
let radius = 20;
let offsetX = 0;
let offsetY = 0;
let payloadSize = 5;
let consoleColor = 0;
$(function() {
    const socket = io();

    //buttons
    $('#toggle').click(function(){
        if(on == 0) {
            var $this = $(this);
            socket.emit('dataRequest');
            on = 1;
            log("started");
            $this.html("stop");
            
        }
        else if(on == 1) {
            on = 0;
            log("stopped");
            $('#toggle').html("start");
        }
    });

    $('#reset').click(function(){
        alert("reloading...");
        window.location.reload();
    });

    $('#clear').click(function(){
        $('#console').empty();
    });


    //send request to start loop
    socket.emit('dataRequest');

    //this runs when we get a request back
    socket.on('data', function(data){
        $('#test').text(data);

        payload = data;
        if(!validatePayload(payload, 5)) {
            // console.log(validatePayload(payload));
            log("invalid payload.");
            payload = lastPayload
        } else {
            // console.log(validatePayload(payload));
            lastPayload = payload;
        }
        
        //loop toggle
        if(on == 1) {
            socket.emit('dataRequest');
        }
        
    });

    $('#resetPos').click(function(){
        if(validatePayload(payload, 5)) {
            let x = parseInt(payload[2]) - offsetX;
            let y = parseInt(payload[3]) - offsetY;
            log("robot position reset to origin(0,0) from (" + x + "," + y + ")");
            offsetX = parseInt(payload[2]);
            offsetY = parseInt(payload[3]);
        } else {
            log('invalid payload.');
        }
    });

var canvas1 = new p5(s1, 'canvas1');
var canvas2 = new p5(s2, 'canvas2');

});

var s1 = function(c) {
    let x, y;
    let width, height;
    
    c.setup = function(){
        width = 300;
        height = 300;

        c.createCanvas(width, height);
    }

    c.draw = function(){
        c.clear();
        c.background(30);

        //center circle
        c.stroke(180);
        c.fill(30);
        c.ellipse(width / 2, height / 2, 20)

        //joystick circle
        c.stroke(180);
        c.fill(100);
        x = parseInt(-payload[0]);
        y = parseInt(payload[1]);
        c.ellipse((x / 4) + (width / 2), (y / 4) + (height / 2), 40);
        
        //line to joystick
        c.stroke(220);
        c.line(width / 2, height / 2, (x / 4) + (width / 2), (y / 4) + (height / 2));

    }
}

var s2 = function(c){
    let x, y;
    let theta_x, theta_y;
    let gain = 0.5;
    let width, height;

    c.setup = function(){
        width = 1200;
        height = 600;

        c.createCanvas(width, height);
    }

    c.draw = function(){
        c.clear();
        c.background(30);

        x = parseFloat(parseInt(payload[2]) - offsetX);
        y = parseFloat(parseInt(payload[3]) - offsetY);

        x = (x * gain) + (width / 2);
        y = (y * gain) + (height / 2);

        c.stroke(180);
        c.fill(250);
        c.ellipse(x, y, radius);

        theta_x = (1.2 * radius) * Math.cos(parseFloat(payload[4]) + (Math.PI / 4)) + x;
        theta_y = (1.2 * radius) * Math.sin(parseFloat(payload[4]) + (Math.PI / 4)) + y;
        // console.log(Math.sin(parseFloat(payload[4])));
        

        c.stroke(255);
        c.line(x, y, theta_x, theta_y);
        // c.ellipse(x, y, radius);

    }
}
            
var validatePayload = function(payload, length){

    if(payload.length != length) {
        return false;
    } else {
        return true;
    }
}

var log = function(message){
    let d = new Date();
    console.log(message);
    if(consoleColor == 0){
        $('#console').append("<p style=\"background-color: #404040; margin: 0; font-size:15px\">" + d.getHours() + ":" + d.getMinutes() + "." + d.getSeconds() + ":  " + message + "</p>");
        consoleColor = 1;
    } else if(consoleColor == 1) {
        $('#console').append("<p style=\"background-color: #262626; margin: 0; font-size: 15px\">" + d.getHours() + ":" + d.getMinutes() + "." + d.getSeconds() + ":  " + message + "</p>");
        consoleColor = 0;
    }
    $('#console').scrollTop($('#console').height());
    
}