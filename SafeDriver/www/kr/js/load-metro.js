$(function(){
    if ((document.location.host.indexOf('.dev') > -1) || (document.location.host.indexOf('modernui') > -1) ) {
        $("<script type="text/javascript"/>").attr('src', 'js/metro/metro-loader.js').appendTo($('head'));
    } else {
        $("<script type="text/javascript"/>").attr('src', 'js/metro.min.js').appendTo($('head'));
    }
})