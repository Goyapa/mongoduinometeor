mongoduinometeor
================

# Realtime Meteor App connected with Arduino plus Wii Nunchuck.

This is a project where i try to figure out how Meteors realtime synchronization feature help with handling and viewing Sensor data. Figure out how it fits to the "Internet of Things" IoT. And how the sensor Data stored in MongoDB can be used for data analysis and visualisation.

This project is based on 

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
