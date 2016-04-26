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

function loadAlert(audio) {
    console.log('loading sound' + audio);
    if(device.platform.toLowerCase() === "android") {
        // Play the audio file at url
                var my_media = new Media('/android_asset/www/shared_assets/audio/' + audio + '.mp3',
                    // success callback
                    function () {
                        console.log("playAudio():Audio Success");
                        my_media.release();
                    },
                    // error callback
                    function (err) {
                        console.log("playAudio():Audio Error: " + err);
                    }
                );
    } else {
                var my_media = new Media('shared_assets/audio/' + audio + '.mp3',
                    // success callback
                    function () {
                        console.log("playAudio():Audio Success");
                        my_media.release();
                    },
                    // error callback
                    function (err) {
                        console.log("playAudio():Audio Error: " + err);
                    }
                );
    }
        // Play audio
        my_media.play();
};
var xhttp = new XMLHttpRequest();
var count = 0;
var speedcount = 0;

var availablesound = ['unsealed','drivetoconditions','extratime','pullovertopass','onewaybridges','overtaking','corners','left','pullover'];

function success(pos) {
  var crd = pos.coords;
  var mylat = crd.latitude;
  var mylong = crd.longitude;
  var speed = crd.speed * 3.6;
  console.log('Latitude:' + mylat + 'Longitude:' + mylong + 'Speed:' + speed);
  if (localStorage.getItem('RegularReminders') == "disabled") {
            console.log('not alerting RegularReminders, user disabled messages')
  } else {
    if (window.sessionStorage.startlat) {
        var startlat = window.sessionStorage.startlat;
        var startlong = window.sessionStorage.startlong;
        var distancefromstart = distance(mylat, mylong, startlat, startlong, "K");
        console.log(distancefromstart);
        if (distancefromstart > 5 && distancefromstart < 10) {
            if (window.sessionStorage.lastdistancealert == "5 to 10") {
            } else {
                window.sessionStorage.setItem("lastdistancealert", "5 to 10");
                var ri = Math.floor(Math.random() * availablesound.length); // Random Index position in the array
                var chosenalert = availablesound.splice(ri, 1); // Splice out a random element using the ri var
                console.log(chosenalert);
                loadAlert(chosenalert);
            }
        } else if (distancefromstart > 15 && distancefromstart < 25) {
            if (window.sessionStorage.lastdistancealert == "15 to 25") {
            } else {
                window.sessionStorage.setItem("lastdistancealert", "15 to 25");
                var ri = Math.floor(Math.random() * availablesound.length); // Random Index position in the array
                var chosenalert = availablesound.splice(ri, 1); // Splice out a random element using the ri var
                console.log(chosenalert);
                loadAlert(chosenalert);
            }
        } else if (distancefromstart > 30 && distancefromstart < 40) {
            if (window.sessionStorage.lastdistancealert == "30 to 40") {
            } else {
                window.sessionStorage.setItem("lastdistancealert", "30 to 40");
                var ri = Math.floor(Math.random() * availablesound.length); // Random Index position in the array
                var chosenalert = availablesound.splice(ri, 1); // Splice out a random element using the ri var
                console.log(chosenalert);
                loadAlert(chosenalert);
            }
        } else if (distancefromstart > 45 && distancefromstart < 60) {
            if (window.sessionStorage.lastdistancealert == "45 to 60") {
            } else {
                window.sessionStorage.setItem("lastdistancealert", "45 to 60");
                var ri = Math.floor(Math.random() * availablesound.length); // Random Index position in the array
                var chosenalert = availablesound.splice(ri, 1); // Splice out a random element using the ri var
                console.log(chosenalert);
                loadAlert(chosenalert);
            }
        } else if (distancefromstart > 65 && distancefromstart < 75) {
            if (window.sessionStorage.lastdistancealert == "65 to 75") {
            } else {
                window.sessionStorage.setItem("lastdistancealert", "65 to 75");
                var ri = Math.floor(Math.random() * availablesound.length); // Random Index position in the array
                var chosenalert = availablesound.splice(ri, 1); // Splice out a random element using the ri var
                console.log(chosenalert);
                loadAlert(chosenalert);
            }
        } else if (distancefromstart > 80 && distancefromstart < 90) {
            if (window.sessionStorage.lastdistancealert == "80 to 90") {
            } else {
                window.sessionStorage.setItem("lastdistancealert", "80 to 90");
                var ri = Math.floor(Math.random() * availablesound.length); // Random Index position in the array
                var chosenalert = availablesound.splice(ri, 1); // Splice out a random element using the ri var
                console.log(chosenalert);
                loadAlert(chosenalert);
            }
        } else if (distancefromstart > 95) {
            if (window.sessionStorage.lastdistancealert == "95+") {
            } else {
                window.sessionStorage.setItem("lastdistancealert", "95+");
                var ri = Math.floor(Math.random() * availablesound.length); // Random Index position in the array
                var chosenalert = availablesound.splice(ri, 1); // Splice out a random element using the ri var
                console.log(chosenalert);
                loadAlert(chosenalert);
                console.log('95km+ Resetting distance and arrays')
                window.sessionStorage.setItem("startlat", mylat);
                window.sessionStorage.setItem("startlong", mylong);
                window.availablesound = ['unsealed','drivetoconditions','extratime','pullovertopass','onewaybridges','overtaking','corners','left','pullover'];
            }
        } else {
        }
    } else {
        window.sessionStorage.setItem("startlat", mylat);
        window.sessionStorage.setItem("startlong", mylong);
    }
    }

  if (localStorage.getItem('LocationAlerts') == "disabled") {
          console.log('not alerting based on location, user disabled messages')
  } else {
    var multiplier = count % 69;
    console.log(multiplier);
    if (multiplier == 0){
          /*

     / ___/ ___  ___  ____ ___  ___/ /  (_)  ___   ___ _
    / (_ / / -_)/ _ \/ __// _ \/ _  /  / /  / _ \ / _ `/
    \___/  \__/ \___/\__/ \___/\_,_/  /_/  /_//_/ \_, /
                                                 /___/
          */
          var geocoder = new google.maps.Geocoder();
          var latLng = new google.maps.LatLng(mylat,mylong);
          if (geocoder) {
              geocoder.geocode({ 'latLng': latLng}, function (results, status) {
                 if (status == google.maps.GeocoderStatus.OK) {
                    var address = (results[0].formatted_address);
                    console.log(address);
                    if (address.indexOf("Crown Range Rd") >= 0) {
                          document.getElementById("detail_sign").src="../../shared_assets/images/windy.gif";
                          console.log('Crown Range Road');
                          document.getElementById("location").innerHTML = "Crown Range Road";
                          document.getElementById("info-msg").innerHTML = "Slow down around corners. Drive carefully, especially in icy and wet conditions.";
                          if (localStorage.getItem("addressgeofence") == "crownrange6") {
                          }
                          else {
                                window.localStorage.setItem("addressgeofence", "crownrange6");
                                loadAlert('crownrangeextended');
                                xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=CrownRange&id" + Math.random(), true);
                                xhttp.send();
                          }
                    } else if (address.indexOf("Kawarau Gorge Rd") >= 0){
                          document.getElementById("detail_sign").src="../../shared_assets/images/windy.gif";
                          console.log('Kawarau Gorge');
                          document.getElementById("location").innerHTML = "Kawarau Gorge";
                          document.getElementById("info-msg").innerHTML = "Slow down around corners. Drive carefully, especially in icy and wet conditions. Keep Left";
                          if (localStorage.getItem("addressgeofence") == "kawarau") {
                          }
                          else {
                                window.localStorage.setItem("addressgeofence","kawarau");
                                loadAlert('kgorgeextended');
                                xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=KawarauGorge&id" + Math.random(), true);
                                xhttp.send();
                          }
                    } else if (address.indexOf("Napier-Taupo Rd") >= 0){
                          document.getElementById("detail_sign").src="../../shared_assets/images/slippery.gif";
                          console.log('NapierTaupo');
                          document.getElementById("location").innerHTML = "Napier-Taupo Road";
                          document.getElementById("info-msg").innerHTML = "Slow down around corners. Increase your following distances in wet conditions.";
                          if (localStorage.getItem("addressgeofence") == "napiertaupo") {
                          }
                          else {
                                window.localStorage.setItem("addressgeofence","napiertaupo");
                                loadAlert('napiertaupo');
                                xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=NapierTaupo&id" + Math.random(), true);
                                xhttp.send();
                          }
                    } else if (address.indexOf("Cape Reinga Rd") >= 0){
                          document.getElementById("detail_sign").src="../../shared_assets/images/animals.gif";
                          console.log('CapeReinga');
                          document.getElementById("location").innerHTML = "Cape Reinga";
                          document.getElementById("info-msg").innerHTML = "Expect animals on the road and varying weather conditions. Drive to the conditions.";
                          if (localStorage.getItem("addressgeofence") == "CapeReinga") {
                          }
                          else {
                                window.localStorage.setItem("addressgeofence","CapeReinga");
                                loadAlert('capereinga');
                                xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=CapeReinga&id" + Math.random(), true);
                                xhttp.send();
                          }
                    } else if (address.indexOf("Northern Gateway Toll Rd") >= 0){
                          console.log('NGTRoad');
                          document.getElementById("location").innerHTML = "Northern Gateway Toll Road";
                          document.getElementById("info-msg").innerHTML = "Watch your following distances on Auckland Motorways.";
                          if (localStorage.getItem("addressgeofence") == "ngtroad") {
                          }
                          else {
                                window.localStorage.setItem("addressgeofence","ngtroad");
                                loadAlert('ngtroad');
                                xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=NGTRoad&id" + Math.random(), true);
                                xhttp.send();
                          }
                    } else if (address.indexOf("Te Paki Stream Stream Rd") >= 0){
                          document.getElementById("detail_sign").src="../../shared_assets/images/gravel.gif";
                          console.log('TePakiStreamRd');
                          document.getElementById("location").innerHTML = "Te Paki Stream";
                          document.getElementById("info-msg").innerHTML = "Keep Left.";
                          if (localStorage.getItem("addressgeofence") == "tepakistreamrd") {
                          }
                          else {
                                window.localStorage.setItem("addressgeofence","tepakistreamrd");
                                loadAlert('tepakistream');
                                xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=tepakistreamrd&id" + Math.random(), true);
                                xhttp.send();
                          }
                    } else if (address.indexOf("Waikato Expy") >= 0){
                          console.log('Waikato Expy');
                          document.getElementById("location").innerHTML = "Waikato Expressway";
                          document.getElementById("info-msg").innerHTML = "Watch your speed. Slow down around towns.";
                          if (localStorage.getItem("addressgeofence") == "waikatoexpressway") {
                                console.log('sessionStorage is waikatoexpressway');
                          }
                          else {
                                console.log(localStorage.getItem("addressgeofence"));
                                window.localStorage.setItem("addressgeofence","waikatoexpressway");
                                loadAlert('waikatoexpressway');
                                xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=WaikatoExpy&id" + Math.random(), true);
                                xhttp.send();
                          }
                    } else if (address.indexOf("Queen Charlotte Dr") >= 0){
                          document.getElementById("detail_sign").src="../../shared_assets/images/windy.gif";
                          console.log('Queen Charlotte Dr - Picton to Havelock');
                          document.getElementById("location").innerHTML = "Queen Charlotte Drive";
                          document.getElementById("info-msg").innerHTML = "Keep Left. Pull over to take photographs. Slow down around corners";
                          if (localStorage.getItem("addressgeofence") == "queencharlottedr") {
                          }
                          else {
                                window.localStorage.setItem("addressgeofence","queencharlottedr");
                                loadAlert('queencharlottedr');
                                xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=queencharlottedr&id" + Math.random(), true);
                                xhttp.send();
                          }
                    } else if (address.indexOf("Dunedin Southern Motorway") >= 0){
                          console.log('Dunedin Southern Motorway');
                          document.getElementById("location").innerHTML = "Dunedin Southern Motorway";
                          document.getElementById("info-msg").innerHTML = "Watch your following distances on Dunedin Motorways.";
                          if (localStorage.getItem("addressgeofence") == "dunedinsthmwy") {
                          }
                          else {
                                window.localStorage.setItem("addressgeofence","dunedinsthmwy");
                                loadAlert('dunedinsthmwy');
                                xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=dunedinsthmwy&id" + Math.random(), true);
                                xhttp.send();
                          }
                    }
                 } else {
                    console.log("Geocoding failed: " + status);
                 }
              });
            }
      };
      count = count + 1;
      /*
  _____             ___
 / ___/ ___  ___   / _/ ___   ___  ____ ___   ___
/ (_ / / -_)/ _ \ / _/ / -_) / _ \/ __// -_) (_-<
\___/  \__/ \___//_/   \__/ /_//_/\__/ \__/ /___/

      */
  if (distance(mylat, mylong, "-36.957576", "174.797595", "K") < 0.025) {
  // Check if in Auckland Airport Motorway
      console.log('Auckland Airport Motorway Junction');
      if (localStorage.getItem("geofence") == "airportmwy") {
      }
      else {
            window.localStorage.setItem("geofence","airportmwy");
            loadAlert('aklairport');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=AirportMWY&id" + Math.random(), true);
            xhttp.send();
      }
  } else if (distance(mylat, mylong, "-44.775014", "168.006457", "K") < 10) {
      // Check if Avalanche Warning Milford Sound
      console.log('Avalanche Warning Milford Sound');
      if (localStorage.getItem("geofence") == "avalanchemilf") {
      }
      else {
            window.localStorage.setItem("geofence","avalanchemilf");
            loadAlert('avalanche');
      }
   } else if (distance(mylat, mylong, "-44.956956", "-44.956956", "K") < 1) {
     // Check if Base Crown Range
      console.log('Crown Range Road');
      if (localStorage.getItem("geofence") == "crownrange6") {
      }
      else {
            window.localStorage.setItem("geofence","crownrange6");
            loadAlert('wetandicy');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=CrownRange&id" + Math.random(), true);
            xhttp.send();
      }
   } else if (distance(mylat, mylong, "-37.219763", "175.001888", "K") < 0.06) {
     // Check if Bombay Hills
      console.log('Bombay Hills');
      if (localStorage.getItem("geofence") == "bombay") {
      }
      else {
            window.localStorage.setItem("geofence","bombay");
            loadAlert('bombay');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=Bombays&id" + Math.random(), true);
            xhttp.send();
      }
 } else if (distance(mylat, mylong, "-36.06903", "174.421383", "K") < 2.6) {
     // Check if Brynderwyn
      console.log('Brynderwyn Hills');
      if (localStorage.getItem("geofence") == "brynderwyn") {
      }
      else {
            window.localStorage.setItem("geofence","brynderwyn");
            loadAlert('brynderwyns');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=BrynderwynHills&id" + Math.random(), true);
            xhttp.send();
      } 
 } else if (distance(mylat, mylong, "-36.86038", "174.76003", "K") < 0.8) {
     // Check if CMJ
      console.log('Central Motorway Junction');
      if (localStorage.getItem("geofence") == "cmj") {
      }
      else {
            window.localStorage.setItem("geofence","cmj");
            loadAlert('cmj');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=AKLCentralMotorwayJunction&id" + Math.random(), true);
            xhttp.send();
      }   
   } else if (distance(mylat, mylong, "-36.788", "174.583553", "K") < 0.1) {
     // Check if Coatsville Riverhead Hwy
      console.log('Coatsville Riverhead HWY');
      if (localStorage.getItem("geofence") == "crhwy") {
      }
      else {
            window.localStorage.setItem("geofence","crhwy");
            loadAlert('highriskintersection');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=CoatsvilleRiverheadSH16&id" + Math.random(), true);
            xhttp.send();
      }  
   } else if (distance(mylat, mylong, "-44.975896", "168.860648", "K") < 0.05) {
     // Check if Crown Range South
      console.log('Crown Range South');
      if (localStorage.getItem("geofence") == "crownrange2") {
      }
      else {
            window.localStorage.setItem("geofence","crownrange2");
            loadAlert('pullover');
      }    
   } else if (distance(mylat, mylong, "-44.918648", "168.973053", "K") < 1) {
     // Check if Crown Range Descent
      console.log('Descent of Crown Range');
      if (localStorage.getItem("geofence") == "crownrange5") {
      }
      else {
            window.localStorage.setItem("geofence","crownrange5");
            loadAlert('corners');
      } 
    } else if (distance(mylat, mylong, "-39.267437", "175.736685", "K") < 25) {
     // Check if Desert Road
      console.log('Desert Road');
      if (localStorage.getItem("geofence") == "desertroad") {
      }
      else {
            window.localStorage.setItem("geofence","desertroad");
            loadAlert('desertroad');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=DesertRoad&id" + Math.random(), true);
            xhttp.send();
      } 
     } else if (distance(mylat, mylong, "-45.199407", "168.742583", "K") < 10) {
     // Check if Desert Road
      console.log('Devils Staircase');
      if (localStorage.getItem("geofence") == "devilsstaircase") {
      }
      else {
            window.localStorage.setItem("geofence","devilsstaircase");
            loadAlert('devilsstaircase');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=DevilsStaircase&id" + Math.random(), true);
            xhttp.send();
      } 
     } else if (distance(mylat, mylong, "-36.361306", "174.606477", "K") < 6) {
     // Check if Desert Road
      console.log('Dome Valley');
      if (localStorage.getItem("geofence") == "domevalley") {
      }
      else {
            window.localStorage.setItem("geofence","domevalley");
            loadAlert('domevalley');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=DomeValley&id" + Math.random(), true);
            xhttp.send();
      } 
     } else if (distance(mylat, mylong, "-36.903707", "174.811726", "K") < 0.1) {
     // Check if EPHWY
      console.log('Elerslie Pamnure Hwy');
      if (localStorage.getItem("geofence") == "ephwy") {
      }
      else {
            window.localStorage.setItem("geofence","ephwy");
            loadAlert('followingdistances');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=ElersliePamnureHwy&id" + Math.random(), true);
            xhttp.send();
      } 
     } else if (distance(mylat, mylong, "-37.088006", "174.93872", "K") < 0.1) {
     // Check if Drury
      console.log('Drury');
      if (localStorage.getItem("geofence") == "drury") {
      }
      else {
            window.localStorage.setItem("geofence","drury");
            loadAlert('followingdistances');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=Drury&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-36.888879", "174.797213", "K") < 0.08) {
     // Check if Greenlane
      console.log('Greenlane');
      if (localStorage.getItem("geofence") == "greenlane") {
      }
      else {
            window.localStorage.setItem("geofence","greenlane");
            loadAlert('followingdistances');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=Greenlane&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-36.734785", "174.717458", "K") < 0.08) {
     // Check if Greville
      console.log('Greville');
      if (localStorage.getItem("geofence") == "greville") {
      }
      else {
            window.localStorage.setItem("geofence","greville");
            loadAlert('followingdistances');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=Greville&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-36.830166", "174.746019", "K") < 1.4) {
     // Check if Harbour Bridge
      console.log('Harbour Bridge');
      if (localStorage.getItem("geofence") == "harbourbridge") {
      }
      else {
            window.localStorage.setItem("geofence","harbourbridge");
            loadAlert('aklharbourbridge');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=AKLHarbourBridge&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-37.246316", "175.199842", "K") < 12) {
     // Check if Hauraki Plains
      console.log('Hauraki Plains');
      if (localStorage.getItem("geofence") == "haurakiplains") {
      }
      else {
            window.localStorage.setItem("geofence","haurakiplains");
            loadAlert('haurakiplains');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=HaurakiPlains&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-36.825806", "174.617203", "K") < 0.01) {
     // Check if Hobsonville 19B
      console.log('Hobsonville 19B');
      if (localStorage.getItem("geofence") == "hobsonville19b") {
      }
      else {
            window.localStorage.setItem("geofence","hobsonville19b");
            loadAlert('motorwayinterchange');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=Hobsonville16&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-44.764211", "167.981193", "K") < 1) {
     // Check if Homer Tunnel
      console.log('Homer Tunnel');
      if (localStorage.getItem("geofence") == "homer") {
      }
      else {
            window.localStorage.setItem("geofence","homer");
            loadAlert('homer');
      }
     } else if (distance(mylat, mylong, "-37.82572", "175.996133", "K") < 10) {
     // Check if Kaimai Ranges
      console.log('Kaimai Ranges');
      if (localStorage.getItem("geofence") == "kaimai") {
      }
      else {
            window.localStorage.setItem("geofence","kaimai");
            loadAlert('kaimai');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=KaimaiRanges&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-37.418901", "175.742572", "K") < 3) {
     // Check if Karangahake Gorge
      console.log('Karangahake Gorge');
      if (localStorage.getItem("geofence") == "karangahake") {
      }
      else {
            window.localStorage.setItem("geofence","karangahake");
            loadAlert('karangahake');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=Karangahake&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-44.585636", "169.643528", "K") < 37) {
     // Check if Lindis Pass
      console.log('Lindis Pass');
      if (localStorage.getItem("geofence") == "lindis") {
      }
      else {
            window.localStorage.setItem("geofence","lindis");
            loadAlert('lindispass');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=LindisPass&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-36.996038", "174.889909", "K") < 0.25) {
     // Check if Manukau Mwy
      console.log('Manukau');
      if (localStorage.getItem("geofence") == "manukau") {
      }
      else {
            window.localStorage.setItem("geofence","manukau");
            loadAlert('followingdistances');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=Manukau&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-36.996038", "174.889909", "K") < 0.25) {
     // Check if Milford Road
      console.log('Milford Road');
      if (localStorage.getItem("geofence") == "milford") {
      }
      else {
            window.localStorage.setItem("geofence","milford");
            loadAlert('milfordroad');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=MilfordRoad&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-38.08931", "176.214178", "K") < 0.2) {
     // Check if Ngongotaha Roundabout
      console.log('Ngongotaha Roundabout');
      if (localStorage.getItem("geofence") == "ngongotaharoundabout") {
      }
      else {
            window.localStorage.setItem("geofence","ngongotaharoundabout");
            loadAlert('highriskroundabout');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=NgongotahaRoundabout&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-35.039759", "173.16903", "K") < 0.25 || distance(mylat, mylong, "-34.536328", "172.76967", "K") < 0.25) {
     // Check if Ninety Mile Beach
      console.log('Ninety Mile Beach');
      if (localStorage.getItem("geofence") == "ninteymile") {
      }
      else {
            window.localStorage.setItem("geofence","ninteymile");
            loadAlert('insurance');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=NinetyMileBeach&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-38.08931", "176.214178", "K") < 0.2) {
     // Check if Ngongotaha Roundabout
      console.log('Ngongotaha Roundabout');
      if (localStorage.getItem("geofence") == "ngongotaharoundabout") {
      }
      else {
            window.localStorage.setItem("geofence","ngongotaharoundabout");
            loadAlert('highriskroundabout');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=NgongotahaRoundabout&id" + Math.random(), true);
            xhttp.send();
      }
     } else if (distance(mylat, mylong, "-36.788177", "174.752794", "K") < 0.08) {
     // Check if Northcote
      console.log('Northcote');
      if (localStorage.getItem("geofence") == "northcote") {
      }
      else {
            window.localStorage.setItem("geofence","northcote");
            loadAlert('followingdistances');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=Northcote&id" + Math.random(), true);
            xhttp.send();
      }
} else if (distance(mylat, mylong, "-36.862476", "174.764413", "K") < 0.016) {
     // Check if Port Southern Onramp
      console.log('Port Southern Onramp');
      if (localStorage.getItem("geofence") == "psonramp") {
      }
      else {
            window.localStorage.setItem("geofence","psonramp");
            loadAlert('mergingtrucks');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=SouthernPortOnramp&id" + Math.random(), true);
            xhttp.send();
      }
} else if (distance(mylat, mylong, "-41.284172", "174.005419", "K") < 0.150) {
     // Check if Picton Warf
      console.log('Picton Warf');
      if (localStorage.getItem("geofence") == "pictonwarf") {
      }
      else {
            window.localStorage.setItem("geofence","pictonwarf");
            loadAlert('pictonwarf');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=PictonWarf&id" + Math.random(), true);
            xhttp.send();
      }
} else if (distance(mylat, mylong, "-41.109769", "175.253011", "K") < 5) {
     // Check if Rimutaka
      console.log('Rimutaka');
      if (localStorage.getItem("geofence") == "rimutaka") {
      }
      else {
            window.localStorage.setItem("geofence","rimutaka");
            loadAlert('rimutakahill');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=Rimutaka&id" + Math.random(), true);
            xhttp.send();
      }
    } else if (distance(mylat, mylong, "-36.625105", "174.662838", "K") < 0.08) {
     // Check if Silverdale
      console.log('Silverdale');
      if (localStorage.getItem("geofence") == "silverdale") {
      }
      else {
            window.localStorage.setItem("geofence","silverdale");
            loadAlert('followingdistances');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=Silverdale&id" + Math.random(), true);
            xhttp.send();
      }
    } else if (distance(mylat, mylong, "-36.9225", "174.846823", "K") < 0.2) {
     // Check if MtWellingtonHwyCorner
      console.log('MtWellingtonHwyCorner');
      if (localStorage.getItem("geofence") == "tiptop") {
      }
      else {
            window.localStorage.setItem("geofence","tiptop");
            loadAlert('followingdistances');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=MtWellingtonHwyCorner&id" + Math.random(), true);
            xhttp.send();
      }
    } else if (distance(mylat, mylong, "-36.535894", "174.680456", "K") < 0.3) {
     // Check if TwinTunnels
      console.log('TwinTunnels');
      if (localStorage.getItem("geofence") == "tolltunnels") {
      }
      else {
            window.localStorage.setItem("geofence","tolltunnels");
            loadAlert('followingdistances');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=TollRoadTunnels&id" + Math.random(), true);
            xhttp.send();
      }
} else if (distance(mylat, mylong, "-36.849391", "174.753123", "K") < 0.01) {
     // Check if Vic Park Tunnel
      console.log('VicParkTunnel');
      if (localStorage.getItem("geofence") == "vicpark") {
      }
      else {
            window.localStorage.setItem("geofence","vicpark");
            loadAlert('vicparktunnel');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=VictoriaParkTunnel&id" + Math.random(), true);
            xhttp.send();
      }
} else if (distance(mylat, mylong, "-36.454461", "174.652338", "K") < 4) {
     // Check if Warkworth
      console.log('Warkworth');
      if (localStorage.getItem("geofence") == "warkworth") {
      }
      else {
            window.localStorage.setItem("geofence","warkworth");
            loadAlert('warkworth');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=Warkworth&id" + Math.random(), true);
            xhttp.send();
      }    
} else if (distance(mylat, mylong, "-36.871983", "174.687641", "K") < 0.8) {
     // Check if WaterviewCauseway
      console.log('WaterviewCauseway');
      if (localStorage.getItem("geofence") == "waterview") {
      }
      else {
            window.localStorage.setItem("geofence","waterview");
            loadAlert('followingdistances');
            xhttp.open("GET", "http://app.safedriver.nz/tracking/area.php?area=WaterviewCauseway&id" + Math.random(), true);
            xhttp.send();
      }    
} else {
      }
    }
    /*
   ____                      __        ___    __             __
  / __/   ___  ___  ___  ___/ /       / _ |  / / ___   ____ / /_  ___
 _\ \    / _ \/ -_)/ -_)/ _  /       / __ | / / / -_) / __// __/ (_-<
/___/   / .__/\__/ \__/ \_,_/       /_/ |_|/_/  \__/ /_/   \__/ /___/
       /_/
    */
    console.log('Speed: ' + Math.round(speed) + 'km/h');
        document.getElementById("speed_reading").innerHTML = Math.round(speed);
        window.analytics.addCustomDimension('DriverSpeed', Math.round(speed));
      // document.getElementById("speed").innerHTML = Math.round(speed);
      // Check if in Central/East AKL metropolitan area 1
      if (localStorage.getItem('SpeedAlerts') == "disabled") {
        console.log('not alerting based on speed, user disabled messages')
      } else {
        if (distance(mylat, mylong, "-36.813732", "174.884693", "K") < 10) {
            document.getElementById("detail_sign").src="../../shared_assets/images/50kmph.gif";
          if (crd.speed > target.fifty) {
            if (speedcount % 20 === 0) {
                speedcount = speedcount + 1;
                loadAlert('slowdown');
                console.log('SLOW DOWN');
                document.getElementById("speed_reading").style.color = "#990000"; document.getElementById("info-msg").innerHTML = "SLOW DOWN";
                navigator.vibrate(500);
            } else {
                speedcount = speedcount + 1;
                document.getElementById("speed_reading").style.color = "#990000"; document.getElementById("info-msg").innerHTML = "SLOW DOWN";
            }
          } else {
            count = 0;
            window.sessionStorage.removeItem("audio");
            document.getElementById("speed_reading").style.color = "whitesmoke";
            navigator.vibrate(0);
          }
      } else if (distance(mylat, mylong, "-36.674987", "174.867588", "K") < 14) {
    // Check if in AKL east coast bays metropolitan area 1
         document.getElementById("detail_sign").src="../../shared_assets/images/50kmph.gif";
         if (crd.speed > target.fifty) {
            if (speedcount % 20 === 0) {
                speedcount = speedcount + 1;
                loadAlert('slowdown');
                console.log('SLOW DOWN');
                document.getElementById("speed_reading").style.color = "#990000"; document.getElementById("info-msg").innerHTML = "SLOW DOWN";
                navigator.vibrate(500);
            } else {
                speedcount = speedcount + 1;
                document.getElementById("speed_reading").style.color = "#990000"; document.getElementById("info-msg").innerHTML = "SLOW DOWN";
            }
          } else {
            count = 0;
            window.sessionStorage.removeItem("audio");
            document.getElementById("speed_reading").style.color = "whitesmoke";
            navigator.vibrate(0);
          }
       } else if (distance(mylat, mylong, "-36.837069", "174.741260", "K") < 2) {
    // Check if in AKL Harbour Bridge (Nthrn MWY)
    document.getElementById("detail_sign").src="../../shared_assets/images/80kmph.gif";
         if (crd.speed > target.eighty) {
            if (speedcount % 20 === 0) {
                speedcount = speedcount + 1;
                loadAlert('slowdown');
                console.log('SLOW DOWN');
                document.getElementById("speed_reading").style.color = "#990000"; document.getElementById("info-msg").innerHTML = "SLOW DOWN";
                navigator.vibrate(500);
            } else {
                speedcount = speedcount + 1;
                document.getElementById("speed_reading").style.color = "#990000"; document.getElementById("info-msg").innerHTML = "SLOW DOWN";
            }
          } else {
            window.sessionStorage.removeItem("audio");
            document.getElementById("speed_reading").style.color = "whitesmoke";
            navigator.vibrate(0);
          }
       } else if (distance(mylat, mylong, "-36.860127", "174.760617", "K") < 0.9 || distance(mylat, mylong, "-36.869444", "174.771120", "K") < 1) {
    // Check if in CentralMotorwayJunction (SH1/SH16)
    document.getElementById("detail_sign").src="../../shared_assets/images/80kmph.gif";
         if (crd.speed > target.eighty) {
            if (speedcount % 20 === 0) {
                speedcount = speedcount + 1;
                loadAlert('slowdown');
                console.log('SLOW DOWN');
                document.getElementById("speed_reading").style.color = "#990000"; document.getElementById("info-msg").innerHTML = "SLOW DOWN";
                navigator.vibrate(500);
            } else {
                speedcount = speedcount + 1;
                document.getElementById("speed_reading").style.color = "#990000"; document.getElementById("info-msg").innerHTML = "SLOW DOWN";
            }
          } else {
            window.sessionStorage.removeItem("audio");
            document.getElementById("speed_reading").style.color = "whitesmoke";
            navigator.vibrate(0);
          }
     } else if (distance(mylat, mylong, "-36.347948", "174.587621", "K") < 4.2) {
    // Check if DOME VALLEY (SH1)
    document.getElementById("detail_sign").src="../../shared_assets/images/80kmph.gif";
         if (crd.speed > target.eighty) {
            if (speedcount % 20 === 0) {
                speedcount = speedcount + 1;
                loadAlert('slowdown');
                console.log('SLOW DOWN');
                document.getElementById("speed_reading").style.color = "#990000"; document.getElementById("info-msg").innerHTML = "SLOW DOWN";
                navigator.vibrate(500);
            } else {
                speedcount = speedcount + 1;
                document.getElementById("speed_reading").style.color = "#990000"; document.getElementById("info-msg").innerHTML = "SLOW DOWN";
            }
          } else {
            window.sessionStorage.removeItem("audio");
            document.getElementById("speed_reading").style.color = "whitesmoke";
            navigator.vibrate(0);
          }
     } else if (distance(mylat, mylong, "-37.216238", "175.057654", "K") < 3.6 || distance(mylat, mylong, "-37.262031", "175.248288", "K") < 8.5) {
    // Check if Hauraki Plains (SH2)
        document.getElementById("detail_sign").src="../../shared_assets/images/90kmph.gif";
         if (crd.speed > target.ninety) {
            if (speedcount % 20 === 0) {
                speedcount = speedcount + 1;
                loadAlert('slowdown');
                console.log('SLOW DOWN');
                document.getElementById("speed_reading").style.color = "#990000"; document.getElementById("info-msg").innerHTML = "SLOW DOWN";
                navigator.vibrate(500);
            } else {
                speedcount = speedcount + 1;
                document.getElementById("speed_reading").style.color = "#990000"; document.getElementById("info-msg").innerHTML = "SLOW DOWN";
            }
          } else {
            window.sessionStorage.removeItem("audio");
            document.getElementById("speed_reading").style.color = "whitesmoke";
            navigator.vibrate(0);
          }
      } else if (distance(mylat, mylong, "-37.418679", "175.746423", "K") < 3.5) {
    // Check if KARANGAHEKE GORGE (SH2)
    document.getElementById("detail_sign").src="../../shared_assets/images/80kmph.gif";
         if (crd.speed > target.eighty) {
            if (speedcount % 20 === 0) {
                speedcount = speedcount + 1;
                loadAlert('slowdown');
                console.log('SLOW DOWN');
                document.getElementById("speed_reading").style.color = "#990000"; document.getElementById("info-msg").innerHTML = "SLOW DOWN";
                navigator.vibrate(500);
            } else {
                speedcount = speedcount + 1;
                document.getElementById("speed_reading").style.color = "#990000"; document.getElementById("info-msg").innerHTML = "SLOW DOWN";
            }
          } else {
            window.sessionStorage.removeItem("audio");
            document.getElementById("speed_reading").style.color = "whitesmoke";
            navigator.vibrate(0);
          }
       } else if (distance(mylat, mylong, "-41.009416", "174.922994", "K") < 3) {
    // Check if WLG Costal Road (SH1)
    document.getElementById("detail_sign").src="../../shared_assets/images/80kmph.gif";
         if (crd.speed > target.eighty) {
            if (speedcount % 20 === 0) {
                speedcount = speedcount + 1;
                loadAlert('slowdown');
                console.log('SLOW DOWN');
                document.getElementById("speed_reading").style.color = "#990000"; document.getElementById("info-msg").innerHTML = "SLOW DOWN";
                navigator.vibrate(500);
            } else {
                speedcount = speedcount + 1;
                document.getElementById("speed_reading").style.color = "#990000"; document.getElementById("info-msg").innerHTML = "SLOW DOWN";
            }
          } else {
            window.sessionStorage.removeItem("audio");
            document.getElementById("speed_reading").style.color = "whitesmoke";
            navigator.vibrate(0);
          }
       } else if (distance(mylat, mylong, "-42.464052", "173.541664", "K") < 5.5) {
    // Check if Kaikoura Costal Road (SH1)
    document.getElementById("detail_sign").src="../../shared_assets/images/80kmph.gif";
         if (crd.speed > target.eighty) {
            if (speedcount % 20 === 0) {
                speedcount = count + 1;
                loadAlert('slowdown');
                console.log('SLOW DOWN');
                document.getElementById("speed_reading").style.color = "#990000"; document.getElementById("info-msg").innerHTML = "SLOW DOWN";
                navigator.vibrate(500);
            } else {
                speedcount = speedcount + 1;
                document.getElementById("speed_reading").style.color = "#990000"; document.getElementById("info-msg").innerHTML = "SLOW DOWN";
            }
          } else {
            window.sessionStorage.removeItem("audio");
            document.getElementById("speed_reading").style.color = "whitesmoke";
            navigator.vibrate(0);
          }
      }  else {
            // Generic Speed (100KM/h)
          if (crd.speed > target.onehundred) {
            if (speedcount % 20 === 0) {
                speedcount = speedcount + 1;
                loadAlert('slowdown');
                console.log('SLOW DOWN');
                document.getElementById("speed_reading").style.color = "#990000"; document.getElementById("info-msg").innerHTML = "SLOW DOWN";
                navigator.vibrate(500);
            } else {
                speedcount = speedcount + 1;
                document.getElementById("speed_reading").style.color = "#990000"; document.getElementById("info-msg").innerHTML = "SLOW DOWN";
            }
          } else {
            window.sessionStorage.removeItem("audio");
            document.getElementById("speed_reading").style.color = "whitesmoke";
            navigator.vibrate(0);
          }
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
  timeout: 1000,
  maximumAge: 0
};

function notifyonDeviceReady() {
	cordova.plugins.backgroundMode.setDefaults({
          title:  "SafeDriver",
          ticker: "Open the app to receive SafeDriver alerts",
          text:   "Open SafeDriver to receive safety alerts"
      })
    console.log('deviceready');
    if (cordova.platformId == 'android') { window.powermanagement.acquire(); }
    window.localStorage.setItem("geofence", "blank");
    window.localStorage.setItem("addressgeofence", "blank");
    console.log(availablesound);
    console.log(localStorage.getItem("geofence"));
    console.log(localStorage.getItem("addressgeofence"));
    id = navigator.geolocation.watchPosition(success, error, options);
}

document.addEventListener("deviceready", notifyonDeviceReady, false);

cordova.plugins.backgroundMode.onactivate = function() {
    console.log('in background');
    id = navigator.geolocation.watchPosition(success, error, options);
};
