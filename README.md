[![Stories in Ready](https://badge.waffle.io/Goyapa/mongoduinometeor.png?label=ready&title=Ready)](https://waffle.io/Goyapa/mongoduinometeor)
mongoduinometeor
================

# Real-time Meteor App connected with Arduino plus Wii Nunchuck.

This is a project where i try to figure out how Meteors real-time synchronization feature help with handling and viewing Sensor data. Figure out how it fits to the "Internet of Things" IoT. And how the sensor Data stored in MongoDB can be used for data analysis and visualization.

##### Slides of related [talk](http://slides.com/michaelmacherey/meteornunduino).


#### This project is based on 

- Hardware
    - [Arduino] (https://github.com/arduino/Arduino), an open-source electronics prototyping platform.
    - [Wii Nunchuck] (https://github.com/rwaldron/johnny-five/blob/master/docs/nunchuk.md), data can be read directly into an Arduino, using TWI (aka I2C).
    
      [Nunchuck Characteristics] (http://lizarum.com/assignments/physical_computing/2008/wii_nunchuck.html)
     
        -    Standard I2C interface
        -    3-axis accelerometer with 10-bit accuracy
        -    2-axis analog joystick with 8-bit A/D converter
        -    2 buttons
        -    $20


- Software
    - [Meteor] (https://github.com/meteor/meteor), an ultra-simple, database-everywhere, data-on-the-wire, pure-Javascript web framework. 

    - [Johnny-Five] (https://github.com/rwaldron/johnny-five) is an JavaScript Arduino programming framework.

    - [d3.js] (https://github.com/mbostock/d3) is a JavaScript library for manipulating documents based on data.

#### Hardware installation:

[Wire up your Wii Nunchuck] (http://lizarum.com/assignments/physical_computing/2008/wii_nunchuck.html)
 with a adapter to a breadboard and the Arduino.
 LED attached to Pin 12.


#### Software installation:

You need to have installed Git and Node.js.

``` bash
$ curl https://install.meteor.com | /bin/sh

$ git clone https://github.com/Goyapa/mongoduinometeor.git && cd mongoduinometeor

$ meteor
```

### Todos
Setting up Arduino Yun and
install DDP client

### Update
After i had invested a lot of time figuring out how to get started Node.js on ArduioYun, and failed miserably.
(There was an [issiu with Yun](https://github.com/rwaldron/johnny-five/issues/465) at that time, don't know if it is actually fixed.)


### I decided to set up a new Project named [connected-galaxy](https://github.com/Goyapa/connected-galaxy) with an RaspberryPi, Docker container and Meteor 1.3
