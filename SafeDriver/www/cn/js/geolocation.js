var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (iOS == true) {
    document.getElementById("enable-banner").className = "nothidden";
}

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

function loadAlert(audio) {
    console.log('loading sound' + audio);
    var request = new XMLHttpRequest();
    request.open('GET', 'http://app.safedriver.org.nz/geolocation/audio/' + audio + '.mp3', true);
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
function silentPlayer() {
    console.log('silentplayer start');
	// create empty buffer
	var buffer = context.createBuffer(1, 1, 22050);
	var source = context.createBufferSource();
	source.buffer = buffer;

	// connect to output (your speakers)
	source.connect(context.destination);

	// play the file
	source.start(0);
    document.getElementById("enable-banner").className = "hidden";

};    
 
var count = 0;
var xhttp = new XMLHttpRequest();
function success(pos) {
  var crd = pos.coords;
  var mylat = crd.latitude;
  var mylong = crd.longitude;
  if (distance(mylat, mylong, "-36.957576", "174.797595", "K") < 0.025) {
  // Check if in Auckland Airport Motorway
      console.log('Auckland Airport Motorway Junction');
      if (window.sessionStorage.geofence == "airportmwy") {
      }
      else {
            window.sessionStorage.setItem("geofence","airportmwy";
            loadAlert('aklairport');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=AirportMWY&id" + Math.random(), true);
            xhttp.send();
      }
  } else if (distance(mylat, mylong, "-44.775014", "168.006457", "K") < 10) {
      // Check if Avalanche Warning Milford Sound
      console.log('Avalanche Warning Milford Sound');
      if (window.sessionStorage.geofence == "avalanchemilf") {
      }
      else {
            window.sessionStorage.setItem("geofence","avalanchemilf";
            loadAlert('avalanche');
      }
   } else if (distance(mylat, mylong, "-44.956956", "-44.956956", "K") < 1) {
     // Check if Base Crown Range
      console.log('Crown Range Road');
      if (window.sessionStorage.geofence == "crownrange6") {
      }
      else {
            window.sessionStorage.setItem("geofence","crownrange6";
            loadAlert('wetandicy');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=CrownRange&id" + Math.random(), true);
            xhttp.send();
      }
   } else if (distance(mylat, mylong, "-37.219763", "175.001888", "K") < 0.06) {
     // Check if Bombay Hills
      console.log('Bombay Hills');
      if (window.sessionStorage.geofence == "bombay") {
      }
      else {
            window.sessionStorage.setItem("geofence","bombay";
            loadAlert('bombay');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=Bombays&id" + Math.random(), true);
            xhttp.send();
      }
 } else if (distance(mylat, mylong, "-36.06903", "174.421383", "K") < 2.6) {
     // Check if Brynderwyn
      console.log('Brynderwyn Hills');
      if (window.sessionStorage.geofence == "brynderwyn") {
      }
      else {
            window.sessionStorage.setItem("geofence","brynderwyn";
            loadAlert('brynderwyns');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=BrynderwynHills&id" + Math.random(), true);
            xhttp.send();
      } 
 } else if (distance(mylat, mylong, "-44.89228", "168.994017", "K") < 1 ) {
     // Check if Cadrona
      console.log('Cadrona');
      if (window.sessionStorage.geofence == "cadrona") {
      }
      else {
            window.sessionStorage.setItem("geofence","cadrona";
            loadAlert('crownrangeextended');
      }
  } else if (distance(mylat, mylong, "-36.86038", "174.76003", "K") < 0.8) {
     // Check if CMJ
      console.log('Central Motorway Junction');
      if (window.sessionStorage.geofence == "cmj") {
      }
      else {
            window.sessionStorage.setItem("geofence","cmj";
            loadAlert('cmj');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=AKLCentralMotorwayJunction&id" + Math.random(), true);
            xhttp.send();
      }   
   } else if (distance(mylat, mylong, "-36.788", "174.583553", "K") < 0.1) {
     // Check if Coatsville Riverhead Hwy
      console.log('Coatsville Riverhead HWY');
      if (window.sessionStorage.geofence == "crhwy") {
      }
      else {
            window.sessionStorage.setItem("geofence","crhwy";
            loadAlert('highriskintersection');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=CoatsvilleRiverheadSH16&id" + Math.random(), true);
            xhttp.send();
      }  
   } else if (distance(mylat, mylong, "-44.975896", "168.860648", "K") < 0.05) {
     // Check if Crown Range South
      console.log('Crown Range South');
      if (window.sessionStorage.geofence == "crownrange2") {
      }
      else {
            window.sessionStorage.setItem("geofence","crownrange2";
            loadAlert('pullover');
      }    
   } else if (distance(mylat, mylong, "-44.97681", "168.863223", "K") < 1) {
     // Check if Crown Range
      console.log('Bottom of Crown Range');
      if (window.sessionStorage.geofence == "crownrange1") {
      }
      else {
            window.sessionStorage.setItem("geofence","crownrange1";
            loadAlert('crownrangeextended');
      } 
   } else if (distance(mylat, mylong, "-44.918648", "168.973053", "K") < 1) {
     // Check if Crown Range Descent
      console.log('Descent of Crown Range');
      if (window.sessionStorage.geofence == "crownrange5") {
      }
      else {
            window.sessionStorage.setItem("geofence","crownrange5";
            loadAlert('corners');
      } 
    } else if (distance(mylat, mylong, "-39.267437", "175.736685", "K") < 25) {
     // Check if Desert Road
      console.log('Desert Road');
      if (window.sessionStorage.geofence == "desertroad") {
      }
      else {
            window.sessionStorage.setItem("geofence","desertroad";
            loadAlert('desertroad');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=DesertRoad&id" + Math.random(), true);
            xhttp.send();
      } 
     } else if (distance(mylat, mylong, "-45.199407", "168.742583", "K") < 10) {
     // Check if Desert Road
      console.log('Devils Staircase');
      if (window.sessionStorage.geofence == "devilsstaircase") {
      }
      else {
            window.sessionStorage.setItem("geofence","devilsstaircase";
            loadAlert('devilsstaircase');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=DevilsStaircase&id" + Math.random(), true);
            xhttp.send();
      } 
     } else if (distance(mylat, mylong, "-36.361306", "174.606477", "K") < 6) {
     // Check if Desert Road
      console.log('Dome Valley');
      if (window.sessionStorage.geofence == "domevalley") {
      }
      else {
            window.sessionStorage.setItem("geofence","domevalley";
            loadAlert('domevalley');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=DomeValley&id" + Math.random(), true);
            xhttp.send();
      } 
     } else if (distance(mylat, mylong, "-36.903707", "174.811726", "K") < 0.1) {
     // Check if EPHWY
      console.log('Elerslie Pamnure Hwy');
      if (window.sessionStorage.geofence == "ephwy") {
      }
      else {
            window.sessionStorage.setItem("geofence","ephwy";
            loadAlert('followingdistances');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=ElersliePamnureHwy&id" + Math.random(), true);
            xhttp.send();
      } 
     } else if (distance(mylat, mylong, "-37.088006", "174.93872", "K") < 0.1) {
     // Check if Drury
      console.log('Drury');
      if (window.sessionStorage.geofence == "drury") {
      }
      else {
            window.sessionStorage.setItem("geofence","drury";
            loadAlert('followingdistances');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=Drury&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-36.888879", "174.797213", "K") < 0.08) {
     // Check if Greenlane
      console.log('Greenlane');
      if (window.sessionStorage.geofence == "greenlane") {
      }
      else {
            window.sessionStorage.setItem("geofence","greenlane";
            loadAlert('followingdistances');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=Greenlane&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-36.734785", "174.717458", "K") < 0.08) {
     // Check if Greville
      console.log('Greville');
      if (window.sessionStorage.geofence == "greville") {
      }
      else {
            window.sessionStorage.setItem("geofence","greville";
            loadAlert('followingdistances');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=Greville&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-36.830166", "174.746019", "K") < 1.4) {
     // Check if Harbour Bridge
      console.log('Harbour Bridge');
      if (window.sessionStorage.geofence == "harbourbridge") {
      }
      else {
            window.sessionStorage.setItem("geofence","harbourbridge";
            loadAlert('aklharbourbridge');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=AKLHarbourBridge&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-37.246316", "175.199842", "K") < 12) {
     // Check if Hauraki Plains
      console.log('Hauraki Plains');
      if (window.sessionStorage.geofence == "haurakiplains") {
      }
      else {
            window.sessionStorage.setItem("geofence","haurakiplains";
            loadAlert('haurakiplains');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=HaurakiPlains&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-36.825806", "174.617203", "K") < 0.01) {
     // Check if Hobsonville 19B
      console.log('Hobsonville 19B');
      if (window.sessionStorage.geofence == "hobsonville19b") {
      }
      else {
            window.sessionStorage.setItem("geofence","hobsonville19b";
            loadAlert('motorwayinterchange');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=Hobsonville16&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-44.764211", "167.981193", "K") < 1) {
     // Check if Homer Tunnel
      console.log('Homer Tunnel');
      if (window.sessionStorage.geofence == "homer") {
      }
      else {
            window.sessionStorage.setItem("geofence","homer";
            loadAlert('homer');
      }
     } else if (distance(mylat, mylong, "-37.82572", "175.996133", "K") < 10) {
     // Check if Kaimai Ranges
      console.log('Kaimai Ranges');
      if (window.sessionStorage.geofence == "kaimai") {
      }
      else {
            window.sessionStorage.setItem("geofence","kaimai";
            loadAlert('kaimai');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=KaimaiRanges&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-37.418901", "175.742572", "K") < 3) {
     // Check if Karangahake Gorge
      console.log('Karangahake Gorge');
      if (window.sessionStorage.geofence == "karangahake") {
      }
      else {
            window.sessionStorage.setItem("geofence","karangahake";
            loadAlert('karangahake');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=Karangahake&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-45.000789", "169.071008", "K") < 7) {
     // Check if Kawarau Gorge
      console.log('Kawarau Gorge');
      if (window.sessionStorage.geofence == "kawarau") {
      }
      else {
            window.sessionStorage.setItem("geofence","kawarau";
            loadAlert('kgorgeextended');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=KawarauGorge&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-44.585636", "169.643528", "K") < 37) {
     // Check if Lindis Pass
      console.log('Lindis Pass');
      if (window.sessionStorage.geofence == "lindis") {
      }
      else {
            window.sessionStorage.setItem("geofence","lindis";
            loadAlert('lindispass');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=LindisPass&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-36.996038", "174.889909", "K") < 0.25) {
     // Check if Manukau Mwy
      console.log('Manukau');
      if (window.sessionStorage.geofence == "manukau") {
      }
      else {
            window.sessionStorage.setItem("geofence","manukau";
            loadAlert('followingdistances');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=Manukau&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-36.996038", "174.889909", "K") < 0.25) {
     // Check if Milford Road
      console.log('Milford Road');
      if (window.sessionStorage.geofence == "milford") {
      }
      else {
            window.sessionStorage.setItem("geofence","milford";
            loadAlert('milfordroad');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=MilfordRoad&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-39.117149", "176.581215", "K") < 30) {
     // Check if NapierTaupo
      console.log('NapierTaupo');
      if (window.sessionStorage.geofence == "napiertaupo") {
      }
      else {
            window.sessionStorage.setItem("geofence","napiertaupo";
            loadAlert('napiertaupo');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=NapierTaupo&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-38.08931", "176.214178", "K") < 0.2) {
     // Check if Ngongotaha Roundabout
      console.log('Ngongotaha Roundabout');
      if (window.sessionStorage.geofence == "ngongotaharoundabout") {
      }
      else {
            window.sessionStorage.setItem("geofence","ngongotaharoundabout";
            loadAlert('highriskroundabout');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=NgongotahaRoundabout&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-35.039759", "173.16903", "K") < 0.25 || distance(mylat, mylong, "-34.536328", "172.76967", "K") < 0.25) {
     // Check if Ninety Mile Beach
      console.log('Ninety Mile Beach');
      if (window.sessionStorage.geofence == "ninteymile") {
      }
      else {
            window.sessionStorage.setItem("geofence","ninteymile";
            loadAlert('insurance');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=NinetyMileBeach&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-38.08931", "176.214178", "K") < 0.2) {
     // Check if Ngongotaha Roundabout
      console.log('Ngongotaha Roundabout');
      if (window.sessionStorage.geofence == "ngongotaharoundabout") {
      }
      else {
            window.sessionStorage.setItem("geofence","ngongotaharoundabout";
            loadAlert('highriskroundabout');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=NgongotahaRoundabout&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-36.788177", "174.752794", "K") < 0.08) {
     // Check if Northcote
      console.log('Northcote');
      if (window.sessionStorage.geofence == "northcote") {
      }
      else {
            window.sessionStorage.setItem("geofence","northcote";
            loadAlert('followingdistances');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=Northcote&id" + Math.random(), true);
            xhttp.send();
      }
} else if (distance(mylat, mylong, "-36.862476", "174.764413", "K") < 0.016) {
     // Check if Port Southern Onramp
      console.log('Port Southern Onramp');
      if (window.sessionStorage.geofence == "psonramp") {
      }
      else {
            window.sessionStorage.setItem("geofence","psonramp";
            loadAlert('mergingtrucks');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=SouthernPortOnramp&id" + Math.random(), true);
            xhttp.send();
      }
} else if (distance(mylat, mylong, "-41.109769", "175.253011", "K") < 5) {
     // Check if Rimutaka
      console.log('Rimutaka');
      if (window.sessionStorage.geofence == "rimutaka") {
      }
      else {
            window.sessionStorage.setItem("geofence","rimutaka";
            loadAlert('rimutakahill');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=Rimutaka&id" + Math.random(), true);
            xhttp.send();
      }
    } else if (distance(mylat, mylong, "-36.625105", "174.662838", "K") < 0.08) {
     // Check if Silverdale
      console.log('Silverdale');
      if (window.sessionStorage.geofence == "silverdale") {
      }
      else {
            window.sessionStorage.setItem("geofence","silverdale";
            loadAlert('followingdistances');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=Silverdale&id" + Math.random(), true);
            xhttp.send();
      }
    } else if (distance(mylat, mylong, "-36.9225", "174.846823", "K") < 0.2) {
     // Check if MtWellingtonHwyCorner
      console.log('MtWellingtonHwyCorner');
      if (window.sessionStorage.geofence == "tiptop") {
      }
      else {
            window.sessionStorage.setItem("geofence","tiptop";
            loadAlert('followingdistances');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=MtWellingtonHwyCorner&id" + Math.random(), true);
            xhttp.send();
      }
    } else if (distance(mylat, mylong, "-36.535894", "174.680456", "K") < 0.3) {
     // Check if TwinTunnels
      console.log('TwinTunnels');
      if (window.sessionStorage.geofence == "tolltunnels") {
      }
      else {
            window.sessionStorage.setItem("geofence","tolltunnels";
            loadAlert('followingdistances');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=TollRoadTunnels&id" + Math.random(), true);
            xhttp.send();
      }
} else if (distance(mylat, mylong, "-36.849391", "174.753123", "K") < 0.01) {
     // Check if Vic Park Tunnel
      console.log('VicParkTunnel');
      if (window.sessionStorage.geofence == "vicpark") {
      }
      else {
            window.sessionStorage.setItem("geofence","vicpark";
            loadAlert('vicparktunnel');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=VictoriaParkTunnel&id" + Math.random(), true);
            xhttp.send();
      }
} else if (distance(mylat, mylong, "-36.454461", "174.652338", "K") < 4) {
     // Check if Warkworth
      console.log('Warkworth');
      if (window.sessionStorage.geofence == "warkworth") {
      }
      else {
            window.sessionStorage.setItem("geofence","warkworth";
            loadAlert('warkworth');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=Warkworth&id" + Math.random(), true);
            xhttp.send();
      }    
} else if (distance(mylat, mylong, "-36.871983", "174.687641", "K") < 0.8) {
     // Check if WaterviewCauseway
      console.log('WaterviewCauseway');
      if (window.sessionStorage.geofence == "waterview") {
      }
      else {
            window.sessionStorage.setItem("geofence","waterview";
            loadAlert('followingdistances');
            xhttp.open("GET", "http://app.safedriver.org.nz/tracking/area.php?area=WaterviewCauseway&id" + Math.random(), true);
            xhttp.send();
      }    
    } else {
       window.sessionStorage.setItem("geofence","";
      }
    }
function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

options = {
  enableHighAccuracy: true,
  timeout: 1000,
  maximumAge: 0
};
function onDeviceReady() {
    id = navigator.geolocation.watchPosition(success, error, options);
}

document.addEventListener("deviceready", onDeviceReady, false);
