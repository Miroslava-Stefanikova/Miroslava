
$(function(){
	$('.motto p').hide().show(3000);
})

$(function(){
	$('.title h1').hide().show(4000);
})

$(function(){
	$('.academicBackground p').slideDown(3000);
	$('.experience p').slideDown(3000);
	$('.skill p').slideDown(3000);
	$('.computer p').slideDown(3000);

})


$(function(){
var interest=$('#interest');
var fadecovers=$('.fadecovers');
setInterval(function(){
	fadecovers.children(':last').fadeOut(3000, function(){
		$(this).prependTo(fadecovers);}).prev().fadeIn(3000);
},3000);


})