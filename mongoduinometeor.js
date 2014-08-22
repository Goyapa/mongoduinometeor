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
        var xGraph = $('#accelorometerGraphX').epoch({
            type: 'time.area',
            data: [
                {
                    label: 'x',
                    values: [{time: 0, y: 0}]
                }
            ],
            axes: ['left', 'bottom', 'right'],
            historySize: 1,
            queueSize: 1
        });

        var xAxisCursor = accelerometerData.find({axis: 'x'})
        xAxisCursor.observe({
          added: function (document) {
            var data = {
              time: (document.created.getTime() / 1000)|0,
              y: document.value
            }
            xGraph.push([data])
          }
        })

        var yGraph = $('#accelorometerGraphY').epoch({
          type: 'time.area',
          data: [
            {
              label: 'y',
              values: [{time: 0, y: 0}]
            }
          ],
          axes: ['left', 'bottom', 'right'],
          historySize: 1,
          queueSize: 1
        });

        var yAxisCursor = accelerometerData.find({axis: 'y'})
        yAxisCursor.observe({
          added: function (document) {
            var data = {
              time: (document.created.getTime() / 1000)|0,
              y: document.value
            }
            yGraph.push([data])
          }
        })

        var zGraph = $('#accelorometerGraphZ').epoch({
          type: 'time.area',
          data: [
            {
              label: 'z',
              values: [{time: 0, y: 0}]
            }
          ],
          axes: ['left', 'bottom', 'right'],
          historySize: 1,
          queueSize: 1
        });

        var zAxisCursor = accelerometerData.find({axis: 'z'})
        zAxisCursor.observe({
          added: function (document) {
            var data = {
              time: (document.created.getTime() / 1000)|0,
              y: document.value
            }
            zGraph.push([data])
          }
        })
    };
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
