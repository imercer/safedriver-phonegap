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

/*
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

*/
function doStuff(position) {
    var mylat = position.coords.latitude;
    var mylong = position.coords.longitude;
    console.log(mylat + ',' + mylong);
    $.ajaxSetup({ timeout: 5000 });
    // Small regions for higher priority
    if (distance(mylat, mylong, "-36.870686", "174.777946", "K") < 75) {
         $.get( "http://safedriver.nz/push/register.php?deviceToken=" + localStorage.pushid + "&platform=" + cordova.platformId + "&region=auckland", function( data ) {
              console.log( "Push Registered for Auckland: " + data );
              window.location.assign("nearby/index.html#auckland")
            });
            $( document ).ajaxError(function( event, request, settings ) {
              console.warn( "An error occurred when registering for notifications (e:) " + even);
              window.location.assign("nearby/index.html#auckland")
            });
    } else if (distance(mylat, mylong, "-37.783777", "175.269562", "K") < 20) {
         $.get( "http://safedriver.nz/push/register.php?deviceToken=" + localStorage.pushid + "&platform=" + cordova.platformId + "&region=hamilton", function( data ) {
              console.log( "Push Registered for Hamilton: " + data );
              window.location.assign("nearby/index.html#hamilton")
            });
            $( document ).ajaxError(function( event, request, settings ) {
              console.warn( "An error occurred when registering for notifications (e:) " + event);
              window.location.assign("nearby/index.html#hamilton")
            });
    } else if (distance(mylat, mylong, "-38.430343", "176.156148", "K") < 50) {
         $.get( "http://safedriver.nz/push/register.php?deviceToken=" + localStorage.pushid + "&platform=" + cordova.platformId + "&region=cni", function( data ) {
              console.log( "Push Registered for Central North Island: " + data );
              window.location.assign("nearby/index.html#cni")
            });
            $( document ).ajaxError(function( event, request, settings ) {
              console.warn( "An error occurred when registering for notifications (e:) " + event);
              window.location.assign("nearby/index.html#cni")
            });
    } else if (distance(mylat, mylong, "-41.291249", "174.767883", "K") < 60) {
         $.get( "http://safedriver.nz/push/register.php?deviceToken=" + localStorage.pushid + "&platform=" + cordova.platformId + "&region=wellington", function( data ) {
              console.log( "Push Registered for Wellington: " + data );
              window.location.assign("nearby/index.html#wellington")
            });
            $( document ).ajaxError(function( event, request, settings ) {
              console.warn( "An error occurred when registering for notifications (e:) " + event);
              window.location.assign("nearby/index.html#wellington")
            });
    } else if (distance(mylat, mylong, "-45.034439", "168.653588", "K") < 20) {
         $.get( "http://safedriver.nz/push/register.php?deviceToken=" + localStorage.pushid + "&platform=" + cordova.platformId + "&region=queenstown", function( data ) {
              console.log( "Push Registered for Queenstown: " + data );
              window.location.assign("nearby/index.html#queenstown")
            });
            $( document ).ajaxError(function( event, request, settings ) {
              console.warn( "An error occurred when registering for notifications (e:) " + event);
              window.location.assign("nearby/index.html#queenstown")
            });
    } else if (distance(mylat, mylong, "-45.888096", "170.463871", "K") < 25) {
         $.get( "http://safedriver.nz/push/register.php?deviceToken=" + localStorage.pushid + "&platform=" + cordova.platformId + "&region=dunedin", function( data ) {
              console.log( "Push Registered for Dunedin: " + data );
              window.location.assign("nearby/index.html#dunedin")
            });
            $( document ).ajaxError(function( event, request, settings ) {
              console.warn( "An error occurred when registering for notifications (e:) " + event);
              window.location.assign("nearby/index.html#dunedin")
            });
    } //Larger Regions follow
    else if (distance(mylat, mylong, "-41.393294", "173.155518", "K") < 125) {
         $.get( "http://safedriver.nz/push/register.php?deviceToken=" + localStorage.pushid + "&platform=" + cordova.platformId + "&region=nelsonmarlborough", function( data ) {
              console.log( "Push Registered for Nelson & Marlborough: " + data );
              window.location.assign("nearby/index.html#nelsonmarlborough")
            });
            $( document ).ajaxError(function( event, request, settings ) {
              console.warn( "An error occurred when registering for notifications (e:) " + event);
              window.location.assign("nearby/index.html#nelsonmarlborough")
            });
    } else if (distance(mylat, mylong, "-46.468133", "167.980957", "K") < 293) {
        window.location.assign("nearby/index.html#otagosouthland")
         $.get( "http://safedriver.nz/push/register.php?deviceToken=" + localStorage.pushid + "&platform=" + cordova.platformId + "&region=otagosouthland", function( data ) {
              console.log( "Push Registered for Otago & Southland: " + data );
              window.location.assign("nearby/index.html#otagosouthland")
            });
            $( document ).ajaxError(function( event, request, settings ) {
              console.warn( "An error occurred when registering for notifications (e:) " + event);
              window.location.assign("nearby/index.html#otagosouthland")
            });
    } else if (distance(mylat, mylong, "-35.269039", "173.583971", "K") < 130) {
         $.get( "http://safedriver.nz/push/register.php?deviceToken=" + localStorage.pushid + "&platform=" + cordova.platformId + "&region=northland", function( data ) {
              console.log( "Push Registered for Northland: " + data );
              window.location.assign("nearby/index.html#northland")
            });
            $( document ).ajaxError(function( event, request, settings ) {
              console.warn( "An error occurred when registering for notifications (e:) " + event);
              window.location.assign("nearby/index.html#northland")
            });
    } else if (distance(mylat, mylong, "-37.40071", "176.698608", "K") < 90) {
         $.get( "http://safedriver.nz/push/register.php?deviceToken=" + localStorage.pushid + "&platform=" + cordova.platformId + "&region=bayofplenty", function( data ) {
              console.log( "Push Registered for Bay of Plenty: " + data );
              window.location.assign("nearby/index.html#bayofplenty")
            });
            $( document ).ajaxError(function( event, request, settings ) {
              console.warn( "An error occurred when registering for notifications (e:) " + event);
              window.location.assign("nearby/index.html#bayofplenty")
            });
    } else if (distance(mylat, mylong, "-39.296048", "175.687866", "K") < 56) {
         $.get( "http://safedriver.nz/push/register.php?deviceToken=" + localStorage.pushid + "&platform=" + cordova.platformId + "&region=nationalpark", function( data ) {
              console.log( "Push Registered for National Park: " + data );
              window.location.assign("nearby/index.html#nationalpark")
            });
            $( document ).ajaxError(function( event, request, settings ) {
              console.warn( "An error occurred when registering for notifications (e:) " + event);
              window.location.assign("nearby/index.html#nationalpark")
            });
    } else if (distance(mylat, mylong, "-40.283716", "175.297851", "K") < 60) {
         $.get( "http://safedriver.nz/push/register.php?deviceToken=" + localStorage.pushid + "&platform=" + cordova.platformId + "&region=manawatu", function( data ) {
              console.log( "Push Registered for Manawatu: " + data );
              window.location.assign("nearby/index.html#manawatu")
            });
            $( document ).ajaxError(function( event, request, settings ) {
              console.warn( "An error occurred when registering for notifications (e:) " + event);
              window.location.assign("nearby/index.html#manawatu")
            });
    } else if (distance(mylat, mylong, "-38.333038", "178.444701", "K") < 120) {
         $.get( "http://safedriver.nz/push/register.php?deviceToken=" + localStorage.pushid + "&platform=" + cordova.platformId + "&region=gisborne", function( data ) {
              console.log( "Push Registered for Gisborne: " + data );
              window.location.assign("nearby/index.html#gisborne")
            });
            $( document ).ajaxError(function( event, request, settings ) {
              console.warn( "An error occurred when registering for notifications (e:) " + event);
              window.location.assign("nearby/index.html#gisborne")
            });
    } else if (distance(mylat, mylong, "-39.859154", "177.242431", "K") < 95) {
        $.get( "http://safedriver.nz/push/register.php?deviceToken=" + localStorage.pushid + "&platform=" + cordova.platformId + "&region=hawkesbay", function( data ) {
              console.log( "Push Registered for Hawkes Bay: " + data );
              window.location.assign("nearby/index.html#hawkesbay")
            });
            $( document ).ajaxError(function( event, request, settings ) {
              console.warn( "An error occurred when registering for notifications (e:) " + event);
              window.location.assign("nearby/index.html#hawkesbay")
            });
    } else if (distance(mylat, mylong, "-39.274789", "174.012451", "K") < 90) {
        $.get( "http://safedriver.nz/push/register.php?deviceToken=" + localStorage.pushid + "&platform=" + cordova.platformId + "&region=taranaki", function( data ) {
              console.log( "Push Registered for Taranaki: " + data );
              window.location.assign("nearby/index.html#taranaki")
            });
            $( document ).ajaxError(function( event, request, settings ) {
              console.warn( "An error occurred when registering for notifications (e:) " + event);
              window.location.assign("nearby/index.html#taranaki")
            });
    } else if (distance(mylat, mylong, "-38.043765", "175.078125", "K") < 80) {
        $.get( "http://safedriver.nz/push/register.php?deviceToken=" + localStorage.pushid + "&platform=" + cordova.platformId + "&region=waikato", function( data ) {
              console.log( "Push Registered for Waikato: " + data );
              window.location.assign("nearby/index.html#waikato")
            });
            $( document ).ajaxError(function( event, request, settings ) {
              console.warn( "An error occurred when registering for notifications (e:) " + event);
              window.location.assign("nearby/index.html#waikato")
            });
    } else if (distance(mylat, mylong, "-44.497481", "173.380737", "K") < 250) {
        $.get( "http://safedriver.nz/push/register.php?deviceToken=" + localStorage.pushid + "&platform=" + cordova.platformId + "&region=canterbury", function( data ) {
              console.log( "Push Registered for Canterbury: " + data );
              window.location.assign("nearby/index.html#canterbury")
            });
            $( document ).ajaxError(function( event, request, settings ) {
              console.warn( "An error occurred when registering for notifications (e:) " + event);
              window.location.assign("nearby/index.html#canterbury")
            });
    } else if (distance(mylat, mylong, "-41.624792", "168.033783", "K") < 363) {
        $.get( "http://safedriver.nz/push/register.php?deviceToken=" + localStorage.pushid + "&platform=" + cordova.platformId + "&region=westcoast", function( data ) {
              console.log( "Push Registered for West Coast: " + data );
              window.location.assign("nearby/index.html#westcoast")
            });
            $( document ).ajaxError(function( event, request, settings ) {
              console.warn( "An error occurred when registering for notifications (e:) " + event);
              window.location.assign("nearby/index.html#westcoast")
            });
    } else {
    console.log(distance(mylat, mylong, "-44.497481", "173.380737", "K"));
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
