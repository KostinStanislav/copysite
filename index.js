var $div2blinkright = $("#flashright"); // Save reference, only look this item up once, then save
var backgroundInterval = setInterval(function(){
    $div2blinkright.toggleClass("flashr");
 },500)
 var $div2blinkleft = $("#flashleft"); // Save reference, only look this item up once, then save
var backgroundInterval = setInterval(function(){
    $div2blinkleft.toggleClass("flashl");
 },500)
 
 $(function() {
    $('#btn').click(sendForm);
});

function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "//formspree.io/tigrarion@mail.ru",
        method: "POST",
        data: {
            name:$('#name').val(),
            email:$('#email').val(),
            message:$('#message').val()
        },
        dataType: "json",
        success: function(){
            $('#thanks').html('Success!Thank you for contacting us!');
        }
    });
}