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
                    "iconColor": "#164B56"
                },
                ios: {
                    alert: "true",
                    badge: "true",
                    sound: "true"
                },
                windows: {}
            });

          push.on('notification', function(data) {
              window.location.href = "../drive/status.html";
              navigator.notification.beep(1);
              navigator.vibrate(1000);
              navigator.notification.alert(data.message, statusRedirect, "Road Status Message");
          });

          }, false);

function statusRedirect() {
    window.location.href = "../drive/status.html";
}

