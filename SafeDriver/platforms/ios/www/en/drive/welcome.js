function onDeviceReady() {
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
  //doStuff(position.coords.latitude, position.coords.longitude);
  });
}
else {
}
}
document.addEventListener("deviceready", onDeviceReady, false);

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

function doStuff(mylat, mylong) {
    if (window.localStorage.welcome) {
        var welcome = window.localStorage.welcome;
    }
    if (distance(mylat, mylong, "-35.269039", "173.583971", "K") < 130) {
      //Northland
       if (welcome != "northland") {
       } else {
            window.localStorage.setItem("welcome", "northland");
            $( "#northlanddialog" ).dialog( "open" );
       }
   } else if (distance(mylat, mylong, "-36.870686", "174.777946", "K") < 75) {
       //Auckland
       if (welcome != "auckland") {
       } else {
            window.localStorage.setItem("welcome", "auckland");
            $( "#aucklanddialog" ).dialog( "open" );
       }
   } else if (distance(mylat, mylong, "-37.783777", "175.269562", "K") < 20) {
       //Hamilton
       if (welcome != "hamilton") {
       } else {
            window.localStorage.setItem("welcome", "hamilton");
            $( "#hamiltondialog" ).dialog( "open" );
       }
   } else if (distance(mylat, mylong, "-38.430343", "176.156148", "K") < 50) {
       //Central North Island
       if (welcome != "cni") {
       } else {
            window.localStorage.setItem("welcome", "cni");
            $( "#cnidialog" ).dialog( "open" );
       }
   } else if (distance(mylat, mylong, "-41.291249", "174.767883", "K") < 60) {
       //Wellington
       if (welcome != "wellington") {
       } else {
           window.localStorage.setItem("welcome", "wellington");
           $( "#wellingtondialog" ).dialog( "open" );
       }
   } else if (distance(mylat, mylong, "-41.624792", "168.033783", "K") < 300) {
       //West Coast
       if (welcome != "westcoast") {
       } else {
            window.localStorage.setItem("welcome", "westcoast");
            $( "#westcoastdialog" ).dialog( "open" );
       }
   } else if (distance(mylat, mylong, "-45.034439", "168.653588", "K") < 150) {
        //Queenstown
       if (welcome != "queenstown") {
       } else {
            window.localStorage.setItem("welcome", "queenstown");
            $( "#queenstowndialog" ).dialog( "open" );
       }
   } else {

   }
}