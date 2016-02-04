function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function distance(lat1, lon1, lat2, lon2, unit) {
	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var radlon1 = Math.PI * lon1/180
	var radlon2 = Math.PI * lon2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	if (unit=="K") { dist = dist * 1.609344 }
	if (unit=="N") { dist = dist * 0.8684 }
	return dist
}

var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var playAudio = function (buffer) {
    var sourceBuffer = context.createBufferSource();
    sourceBuffer.buffer = buffer;
    sourceBuffer.connect(context.destination);
    sourceBuffer.start(context.currentTime);
};

var loadAudioFile = function () {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://app.safedriver.org.nz/drive/slowdown.mp3', true);
    request.responseType = 'arraybuffer';
    request.onload = function () {
        var undecodedAudio = request.response;
        context.decodeAudioData(undecodedAudio, function (buffer) {
            playAudio(buffer);
        });
    };
    request.send();
};

// Silent Play for iOS
window.addEventListener('touchstart', function() {

	// create empty buffer
	var buffer = context.createBuffer(1, 1, 22050);
	var source = context.createBufferSource();
	source.buffer = buffer;

	// connect to output (your speakers)
	source.connect(context.destination);

	// play the file
	source.start(0);

}, false);    
    

var count = 0;
function success(pos) {
  var crd = pos.coords;
  var speed = crd.speed * 3.6;
  var mylat = crd.latitude;
  var mylong = crd.longitude;
  console.log(Math.round(speed));
  // document.getElementById("speed").innerHTML = Math.round(speed);
  // Check if in Central/East AKL metropolitan area 1
  if (distance(mylat, mylong, "-36.813732", "174.884693", "K") < 10) {
      if (crd.speed > target.fifty) {
        if (count % 20 === 0) {
            count = count + 1;
            loadAudioFile();
            console.log('SLOW DOWN');
            // document.getElementById("body").className = "alert";
            navigator.vibrate(500);
        } else {
            count = count + 1;
        }
      } else {
        count = 0;
        sessionStorage.removeItem("audio");
        // document.getElementById("body").className = "non-alert";
        navigator.vibrate(0);
      }
  } else if (distance(mylat, mylong, "-36.674987", "174.867588", "K") < 14) {
// Check if in AKL east coast bays metropolitan area 1
     if (crd.speed > target.fifty) {
        if (count % 20 === 0) {
            count = count + 1;
            loadAudioFile();
            console.log('SLOW DOWN');
            // document.getElementById("body").className = "alert";
            navigator.vibrate(500);
        } else {
            count = count + 1;
        }
      } else {
        count = 0;
        sessionStorage.removeItem("audio");
        // document.getElementById("body").className = "non-alert";
        navigator.vibrate(0);
      }
   } else if (distance(mylat, mylong, "-36.837069", "174.741260", "K") < 2) {
// Check if in AKL Harbour Bridge (Nthrn MWY)
     if (crd.speed > target.eighty) {
        if (count % 20 === 0) {
            count = count + 1;
            loadAudioFile();
            console.log('SLOW DOWN');
            // document.getElementById("body").className = "alert";
            navigator.vibrate(500);
        } else {
            count = count + 1;
        }
      } else {
        count = 0;
        sessionStorage.removeItem("audio");
        // document.getElementById("body").className = "non-alert";
        navigator.vibrate(0);
      }
   } else if (distance(mylat, mylong, "-36.860127", "174.760617", "K") < 0.9 || distance(mylat, mylong, "-36.869444", "174.771120", "K") < 1) {
// Check if in CentralMotorwayJunction (SH1/SH16)
     if (crd.speed > target.eighty) {
        if (count % 20 === 0) {
            count = count + 1;
            loadAudioFile();
            console.log('SLOW DOWN');
            // document.getElementById("body").className = "alert";
            navigator.vibrate(500);
        } else {
            count = count + 1;
        }
      } else {
        count = 0;
        sessionStorage.removeItem("audio");
        // document.getElementById("body").className = "non-alert";
        navigator.vibrate(0);
      }
 } else if (distance(mylat, mylong, "-36.347948", "174.587621", "K") < 4.2) {
// Check if DOME VALLEY (SH1)
     if (crd.speed > target.eighty) {
        if (count % 20 === 0) {
            count = count + 1;
            loadAudioFile();
            console.log('SLOW DOWN');
            // document.getElementById("body").className = "alert";
            navigator.vibrate(500);
        } else {
            count = count + 1;
        }
      } else {
        count = 0;
        sessionStorage.removeItem("audio");
        // document.getElementById("body").className = "non-alert";
        navigator.vibrate(0);
      }  
 } else if (distance(mylat, mylong, "-37.216238", "175.057654", "K") < 3.6 || distance(mylat, mylong, "-37.262031", "175.248288", "K") < 8.5) {
// Check if Hauraki Plains (SH2)
     if (crd.speed > target.ninety) {
        if (count % 20 === 0) {
            count = count + 1;
            loadAudioFile();
            console.log('SLOW DOWN');
            // document.getElementById("body").className = "alert";
            navigator.vibrate(500);
        } else {
            count = count + 1;
        }
      } else {
        count = 0;
        sessionStorage.removeItem("audio");
        // document.getElementById("body").className = "non-alert";
        navigator.vibrate(0);
      }
  } else if (distance(mylat, mylong, "-37.418679", "175.746423", "K") < 3.5) {
// Check if KARANGAHEKE GORGE (SH2)
     if (crd.speed > target.eighty) {
        if (count % 20 === 0) {
            count = count + 1;
            loadAudioFile();
            console.log('SLOW DOWN');
            // document.getElementById("body").className = "alert";
            navigator.vibrate(500);
        } else {
            count = count + 1;
        }
      } else {
        count = 0;
        sessionStorage.removeItem("audio");
        // document.getElementById("body").className = "non-alert";
        navigator.vibrate(0);
      }   
   } else if (distance(mylat, mylong, "-41.009416", "174.922994", "K") < 3) {
// Check if WLG Costal Road (SH1)
     if (crd.speed > target.eighty) {
        if (count % 20 === 0) {
            count = count + 1;
            loadAudioFile();
            console.log('SLOW DOWN');
            // document.getElementById("body").className = "alert";
            navigator.vibrate(500);
        } else {
            count = count + 1;
        }
      } else {
        count = 0;
        sessionStorage.removeItem("audio");
        // document.getElementById("body").className = "non-alert";
        navigator.vibrate(0);
      }   
   } else if (distance(mylat, mylong, "-42.464052", "173.541664", "K") < 5.5) {
// Check if Kaikoura Costal Road (SH1)
     if (crd.speed > target.eighty) {
        if (count % 20 === 0) {
            count = count + 1;
            loadAudioFile();
            console.log('SLOW DOWN');
            // document.getElementById("body").className = "alert";
            navigator.vibrate(500);
        } else {
            count = count + 1;
        }
      } else {
        count = 0;
        sessionStorage.removeItem("audio");
        // document.getElementById("body").className = "non-alert";
        navigator.vibrate(0);
      }   
   } else {
        // Generic Speed (100KM/h)
      if (crd.speed > target.onehundred) {
        if (count % 20 === 0) {
            count = count + 1;
            loadAudioFile();
            console.log('SLOW DOWN');
            // document.getElementById("body").className = "alert";
            navigator.vibrate(500);
        } else {
            count = count + 1;
        }
      } else {
        count = 0;
        // document.getElementById("body").className = "non-alert";
        navigator.vibrate(0);
      }
    }
}
function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

target = {
  onehundred : 28.055555555556,
  ninety : 25,
  eighty : 22.222222222222,
  seventy : 19.444444444444,
  sixty : 16.666666666667,
  fifty : 13.888888888889
};

options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);