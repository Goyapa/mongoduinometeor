Meteor.publish('nunchuckData', function(){
    return nunchuckData.find({},{limit: 1, sort: {created: -1}});
});
Meteor.publish('accelerometerData', function(){
    return accelerometerData.find({}, {limit: 1, sort: {created: -1}});
});
//Meteor.publish('streamAccelerometerData', function() {
//    return accelerometerData.find();
////        find({}, {limit: 20, sort: {created: -1}});
//});

Meteor.publish('joystickData', function(){
    return joystickData.find({}, {limit: 1, sort: {created: -1}});
});

