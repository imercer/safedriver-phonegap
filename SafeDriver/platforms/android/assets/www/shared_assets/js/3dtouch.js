 function notifyMonitor(data) {
    console.log("Push Received. Message Text: " + data.message + " Coldstart: Unknown");
    //if (data.additionalData.coldstart == true) {
        document.location = '../drive/status.html';
    //}
    alert(data.message);
};

document.addEventListener("deviceready", function() {
        ThreeDeeTouch.onHomeIconPressed = function (payload) {
              console.log("Icon pressed. Type: " + payload.type + ". Title: " + payload.title + ".");
              if (payload.type == 'status') {
                document.location = '../drive/status.html';
              } else if (payload.type == 'notifications') {
                document.location = '../settings/index.html';
              }
          }

        var push = PushNotification.init({
          android: {
                senderID: "233940449476",
                "icon": "icon_outline",
                "iconColor": "#164B56",
                "forceShow": true
            },
            ios: {
                alert: "true",
                badge: "true",
                sound: "true"
            },
            windows: {}
        });
        push.on('notification', notifyMonitor(data))

}, false);