/*
/* Created by michael on 23.07.14.
*/
var five = Meteor.npmRequire("johnny-five"),
    board, nunchuk;

Meteor.startup(function(){
board = new five.Board();

board.on('error', function (error) {
    console.error('Johnny Five Error', error);
});

board.on("ready", Meteor.bindEnvironment(function() {
// Connect the Nunchuck with a adapter to the Arduino Board.
// From the Adapter pin out "+" to "5V" and "-" to "GND".
// Pin out "d" (data) to "A4" and "c" (clock) to "A5".

    new five.Pin("A4").low();
    new five.Pin("A5").low();

    // Create a new `nunchuk` hardware instance.
    nunchuk = new five.Wii.Nunchuk({
        freq: 50
    });


    // Nunchuk Event API
    //

    // "read" (nunchuk)
    //
    // Fired when the joystick detects a change in
    // axis position.
    //
    // nunchuk.on( "read", function( err ) {

    // });

    // "change", "axischange" (joystick)
    //
    // Fired when the joystick detects a change in
    // axis position.
    //
    nunchuk.joystick.on("change", Meteor.bindEnvironment(function(err, event) {
       // console.log("event", JSON.stringify(event, null, '  ')); // Exception in joystickerr: TypeError: Converting circular structure to JSON
       // console.log("event", event);
        console.log(
                "joystick " + event.axis,
            event.target[event.axis],
            event.axis, event.direction
        );
        joystickData.insert({
            created: new Date(),
            value: event.target[event.axis],
            axis: event.axis,
            direction: event.direction
        });
    }, "joystickErr"));

    // "change", "axischange" (accelerometer)
    //
    // Fired when the accelerometer detects a change in
    // axis position.
    //
    nunchuk.accelerometer.on("change", Meteor.bindEnvironment(function(err, event) {
        console.log(
            "accelerometer " + event.axis,
            event.target[event.axis],
            event.axis, event.direction
        );
        accelerometerData.insert({
            created: new Date(),
            value : event.target[event.axis],
            axis : event.axis,
            direction : event.direction
        });
    }, "accelerometerErr"));

    // "down"
    // aliases: "press", "tap", "impact", "hit"
    //
    // Fired when any nunchuk button is "down"
    //

    // "up"
    // alias: "release"
    //
    // Fired when any nunchuk button is "up"
    //

    // "hold"
    //
    // Fired when any nunchuk button is in the "down" state for
    // a specified amount of time. Defaults to 500ms
    //
    // To specify a custom hold time, use the "holdtime"
    // option of the Nunchuk constructor.
    //


    ["down", "up", "hold"].forEach(function(type) {

        nunchuk.on(type, Meteor.bindEnvironment(function(err, event) {
            console.log(
                    event.target.which + " is " + type,

                {
                    isUp: event.target.isUp,
                    isDown: event.target.isDown
                }
            );
            nunchuckData.insert({
                created: new Date(),
                targetButton : event.target.which,
                buttonState : type,
                states : {
                isUp: event.target.isUp,
                isDown: event.target.isDown
            }});
        }, "nunchuckErr"));

    });


    // Further reading
    // http://media.pragprog.com/titles/msard/tinker.pdf
    // http://lizarum.com/assignments/physical_computing/2008/wii_nunchuck.html

    // Create a standard `led` hardware instance
    led = new five.Led({
        pin: 12
    });

    // "on" turns the led _on_
//    led.on();

    // "off" turns the led _off_
//   led.off();

    // Create an Led on pin 13 and strobe it on/off
    // Optionally set the speed; defaults to 100ms
//    (new five.Led(13)).strobe();
}, "ready"));
});
