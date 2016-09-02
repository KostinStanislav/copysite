var $div2blinkright = $("#flashright"); // Save reference, only look this item up once, then save
var backgroundInterval = setInterval(function(){
    $div2blinkright.toggleClass("flashr");
 },500)
 var $div2blinkleft = $("#flashleft"); // Save reference, only look this item up once, then save
var backgroundInterval = setInterval(function(){
    $div2blinkleft.toggleClass("flashl");
 },500)