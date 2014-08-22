joystickData = new Meteor.Collection("joystickData");
accelerometerData = new Meteor.Collection("accelerometerData");
nunchuckData = new Meteor.Collection("nunchuckData");
if (Meteor.isClient) {
    Meteor.subscribe('accelerometerData');
    Meteor.subscribe('nunchuckData');
    Meteor.subscribe('joystickData');
    Template.nunchuck.nunchuckButtons = function () {
        return nunchuckData.find({}, {limit: 1, sort: {created: -1}});
    };
    Template.accelorometer.accelorometers = function () {
        return accelerometerData.find({}, {limit: 1, sort: {created: -1}});
    };
    Template.joystick.joysticks = function () {
        return joystickData.find({}, {limit: 1, sort: {created: -1}});
    };
    Template.hello.greeting = function () {
        return "Hello Meteor lovers";
    };
    Template.toggleLEDButton.showToggleText = function () {
        return "Toggle LED";
    };

    Template.toggleLEDButton.events({
//    'click input': function () {
        'click button': function () {
            // template data, if any, is available in 'this'
//      if (typeof console !== 'undefined')
//        console.log("You pressed the button");
            Meteor.call('toggleLED');
        }
    });
    Template.accelorometerStreamGraph.rendered = function () {
        console.log('accelorometerStreamGraph rendered')
        $('#accelorometerGraph').epoch({
            type: 'time.area',
            data: [
                {
                    label: 'x',
                    values: [{time: 1370044800, y: 100}]
                },
                {
                    label: 'y',
                    values: [{time: 1370044800, y: 78}]
                },
                {
                    label: 'z',
                    values: [{time: 1370044801, y: 98}]
                }
            ]
        });
    };
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
