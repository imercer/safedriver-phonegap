document.addEventListener("deviceready", onDeviceReady, false);
	var xhttp = new XMLHttpRequest();
	function onDeviceReady() {
        cordova.plugins.locationManager.requestAlwaysAuthorization();
        cordova.plugins.notification.local.cancelAll();
        cordova.plugins.backgroundMode.enable();
        cordova.plugins.backgroundMode.setDefaults({
            title:  'SafeDriver is running...',
            text:   'Open SafeDriver to receive safety messages.',
            ticker: 'SafeDriver is still running',
          })
        if (cordova.platformId == 'android') {
          StatusBar.backgroundColorByHexString("#232323");
        }
        StatusBar.show();
        window.analytics.startTrackerWithId('UA-55227067-7');
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
        push.on('registration', function(data) {
            console.log("registration - " + data.registrationId);
                $.get( "http://safedriver.nz/push/register.php?deviceToken=" + data.registrationId + "&platform=" + cordova.platformId, function( data ) {
                  console.log( "Data Loaded: " + data );
                  launch();
                });
                $( document ).ajaxError(function( event, request, settings ) {
                  console.warn( "An error occurred when registering for notifications (e:) " + event);
                  launch();
                });
        });
        push.on('error', function(e) {
            console.error("push error");
            console.error(e);
            launch();
        });
	}


    function checkLanguage() {
	  var en = "en";
	  var zh = "zh";
	  var ko = "ko";
      navigator.globalization.getPreferredLanguage(
	    function (language) {
		var lang = language.value;
			  if (lang.substring(0, en.length) === en)
				{ window.location.href='en/en.html' }
			  else if (lang.substring(0, zh.length) === zh)
				{ window.location.href='cn/cn.html' }
			  else if (lang.substring(0, ko.length) === ko)
				{ window.location.href='kr/kr.html' }
			  else { window.location.href='en/en.html' };
		},
        function () {window.location.href='en/en.html';}
      );
    }

	function checkLanguageInitial() {
	  var en = "en";
	  var zh = "zh";
	  var ko = "ko";
      navigator.globalization.getPreferredLanguage(
	    function (language) {
		var lang = language.value;
			  if (lang.substring(0, en.length) === en)
				{ window.location.href='en/welcome/en.html' }
			  else if (lang.substring(0, zh.length) === zh)
				{ window.location.href='cn/cn.html' }
			  else if (lang.substring(0, ko.length) === ko)
				{ window.location.href='kr/kr.html' }
			  else { window.location.href='en/welcome/en.html' };
		},
        function () {window.location.href='en/welcome/en.html';}
      );
    }
	function launch() {
	if (localStorage.isNotInitialLaunch) {
		checkLanguage();
	} else {
		localStorage.isNotInitialLaunch = 1;
		checkLanguageInitial();
	}
	}