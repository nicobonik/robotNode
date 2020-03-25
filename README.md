# RobotNode
node app for a lil robob i'm building during quarantine. His name is Finley and I love him very much. Also, he "bytes" so be careful :)

## Running RobotNode
make sure you have set up everything in [FinleyCore]() before trying to run RobotNode. 

# Finley
Finley is a 3 wheel differential drive robot with 2 motors and a ball caster wheel out the back. The motors have a secondary shaft with neodymium magnets and an analog hall effect sensor as an encoder setup. I made him to test out my autonomous control systems, but he can also be tele-operated.

## Parts List
Finley is about $80 to $150 to build, depending on how much stuff you already have.<br>
<img src="https://images-na.ssl-images-amazon.com/images/I/51rmayrbsPL._AC_SX425_.jpg" width=200>
<br>Arduino Uno (x2) -- $20 ea.<br>
This is the main control system for Finley. One is for the brain of the robot, and one is for the controller.<br><br>
<img src="https://cdn.sparkfun.com//assets/parts/8/5/0/3/12002-Breadboard_-_Self-Adhesive__White_-01.jpg" width=200>
<br>Breadboard for prototyping (x2) -- $5 ea.<br>
This is a simple breadboard for connecting everything together. You could use protoboard or just solder everything depending on your experience level, but breadboards are definitely the easiest.<br><br>
<img src="https://cdn.sparkfun.com//assets/parts/1/0/4/6/4/13260-01.jpg" width=200>
<br>Sparkfun Hobby Motor Encoder Kit -- $20<br>
This kit includes Finley's front wheels, motors, encoders, and some helpful mounting plates. the Hookup You can find the setup guide for the encoders [here](https://learn.sparkfun.com/tutorials/redbot-assembly-guide-rev-02/wheel-encoder). <br><br>
<img src="https://cdn.sparkfun.com//assets/parts/1/2/4/8/2/14450a-01.jpg" width=200 />
<br>Dual TB6612FNG Dual Motor Driver -- $6<br>
This is the motor controller that allows the arduino to interface with the motors. It needs an external power source, as the arduino cannot supply enough voltage.<br><br>
<img src="https://cdn.sparkfun.com//assets/parts/8/7/1/2/12083-03.jpg" width=200>
<br>4x AA battery holder -- $2<br>
This is for holding the 4 AA batteries needed for the Motor Driver.<br><br>
<img src="https://cdn.sparkfun.com//assets/parts/4/8/8/00705-01.jpg" width=200>
<br>nRF24L01+ Transceiver module (x2) -- $20 ea.<br>
This transceiver module has a built in antenna, so you should only have to buy one RP-SMA module and the other will just use the built in.<br><br>
<img src="https://cdn.sparkfun.com//assets/parts/1/2/8/00145-02-L.jpg" width=200>
<br>2.4GHz Antenna (optional) -- $8<br>
This is the antenna attachment for if you decide to use an RP-SMA transceiver chip.<br><br>
<img src="https://cdn.sparkfun.com//assets/parts/9/4/2/7/12693-02.jpg" width=200>
<br>Breakaway Headers -- $1<br>
These are the headers for the Transceiver modules, you can use whatever works for you on this one.<br><br>
<img src="https://cdn.sparkfun.com//assets/parts/2/1/8/6/08909-03-L.jpg" width=200>
<br>Ball Caster Kit -- $3<br>
This is a simple ball caster kit, and its cheap so I figured it would work for my needs.<br><br>
Now it's time to set up the controller. You can use whatever setup you want for this, I happened to have an old Arduino esplora lying around so I used that. However I do not reccommend using my specific configuration as the serial communication between the Uno and the Esplora board is slow and a little bit unpredictable. I suggest buying some protoboard and joystick modules to make your own controller.

<br><br>You will also need something to build the chassis out of, I'm probably just gonna use cardboard and wood. If you want to CAD and 3d print mounts and things, send me the STEP Files as I'd love to see what people do with the chassis design given the hardware.