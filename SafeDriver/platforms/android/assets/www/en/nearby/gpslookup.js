function onError(error) {
       console.log('no location is available');
       console.error(error);
       window.location.assign("nearby/index.html#newzealand")
}
console.log('loaded gpslookup.js');


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

function doStuff(position) {
    var mylat = position.coords.latitude;
    var mylong = position.coords.longitude;
    console.log(mylat + mylong);
    if (distance(mylat, mylong, "-35.269039", "173.583971", "K") < 130) {
        window.location.assign("nearby/index.html#northland")        
    } else if (distance(mylat, mylong, "-36.870686", "174.777946", "K") < 75) {
        window.location.assign("nearby/index.html#auckland")        
    } else if (distance(mylat, mylong, "-37.783777", "175.269562", "K") < 20) {
        window.location.assign("nearby/index.html#hamilton")        
    } else if (distance(mylat, mylong, "-38.430343", "176.156148", "K") < 50) {
        window.location.assign("nearby/index.html#cni")        
    } else if (distance(mylat, mylong, "-41.291249", "174.767883", "K") < 60) {
        window.location.assign("nearby/index.html#wellington")        
    } else if (distance(mylat, mylong, "-45.034439", "168.653588", "K") < 150) {
        window.location.assign("nearby/index.html#queenstown")        
    } else if (distance(mylat, mylong, "-41.624792", "168.033783", "K") < 300) {
        window.location.assign("nearby/index.html#westcoast")        
    } else {
        window.location.assign("nearby/index.html#newzealand")        
    }
}

function onDeviceReady() {
    console.log('deviceReady');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(doStuff, onError,{timeout:5000, enableHighAccuracy:false});
    } else {
        console.log('no location is available');
       window.location.assign("nearby/index.html#newzealand")
    }
}
document.addEventListener("deviceready", onDeviceReady, false);
