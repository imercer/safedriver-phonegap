document.addEventListener("deviceready", function() {
        ThreeDeeTouch.onHomeIconPressed = function (payload) {
              console.log("Icon pressed. Type: " + payload.type + ". Title: " + payload.title + ".");
              if (payload.type == 'status') {
                document.location = '../drive/status.html';
              } else if (payload.type == 'notifications') {
                document.location = '../settings/index.html';
              }
          }
          }, false);