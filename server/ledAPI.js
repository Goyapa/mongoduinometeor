ledOn  = false;
Meteor.methods({'toggleLED': function () {
    if (ledOn == false) {
        led.on();
        ledOn = true;
    }
    else {
        led.off();
        ledOn = false;
    }
}
});